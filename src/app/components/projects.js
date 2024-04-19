import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Draggable from 'gsap/Draggable';

gsap.registerPlugin(ScrollTrigger, Draggable);

const Gallery = () => {
  const galleryRef = useRef(null);
  const scrub = useRef(null);

  useEffect(() => {
    let iteration = 0;
    gsap.set('.cards li', { xPercent: 400, opacity: 0, scale: 0 });

    const spacing = 0.1;
    const snapTime = gsap.utils.snap(spacing);
    const cards = gsap.utils.toArray('.cards li');
    
    const animateFunc = element => {
      const tl = gsap.timeline();
      tl.fromTo(element, { scale: 0, opacity: 0 }, { scale: 1, opacity: 1, zIndex: 100, duration: 0.5, yoyo: true, repeat: 1, ease: "power1.in", immediateRender: false })
        .fromTo(element, { xPercent: 400 }, { xPercent: -400, duration: 1, ease: "none", immediateRender: false }, 0);
      return tl;
    };
    
    const seamlessLoop = buildSeamlessLoop(cards, spacing, animateFunc);
    
    const playhead = { offset: 0 };
    const wrapTime = gsap.utils.wrap(0, seamlessLoop.duration());
    
    scrub.current = gsap.to(playhead, {
      offset: 0,
      onUpdate() {
        seamlessLoop.time(wrapTime(playhead.offset));
      },
      duration: 0.5,
      ease: "power3",
      paused: true
    });

    const trigger = ScrollTrigger.create({
      start: 0,
      onUpdate(self) {
        let scroll = self.scroll();
        if (scroll > self.end - 1) {
          wrap(1, 2);
        } else if (scroll < 1 && self.direction < 0) {
          wrap(-1, self.end - 2);
        } else {
          scrub.current.vars.offset = (iteration + self.progress) * seamlessLoop.duration();
          scrub.current.invalidate().restart();
        }
      },
      end: "+=3000",
      pin: ".gallery"
    });

    const progressToScroll = progress => gsap.utils.clamp(1, trigger.end - 1, gsap.utils.wrap(0, 1, progress) * trigger.end);

    const wrap = (iterationDelta, scrollTo) => {
      iteration += iterationDelta;
      trigger.scroll(scrollTo);
      trigger.update();
    };

    ScrollTrigger.addEventListener("scrollEnd", () => scrollToOffset(scrub.current.vars.offset));

    function scrollToOffset(offset) {
      let snappedTime = snapTime(offset);
      let progress = (snappedTime - seamlessLoop.duration() * iteration) / seamlessLoop.duration();
      let scroll = progressToScroll(progress);
      if (progress >= 1 || progress < 0) {
        return wrap(Math.floor(progress), scroll);
      }
      trigger.scroll(scroll);
    }

    document.querySelector(".next").addEventListener("click", () => scrollToOffset(scrub.current.vars.offset + spacing));
    document.querySelector(".prev").addEventListener("click", () => scrollToOffset(scrub.current.vars.offset - spacing));

    return () => {
      ScrollTrigger.removeEventListener("scrollEnd", () => scrollToOffset(scrub.current.vars.offset));
    };
  }, []);

  function buildSeamlessLoop(items, spacing, animateFunc) {
    let rawSequence = gsap.timeline({ paused: true });
    let seamlessLoop = gsap.timeline({
      paused: true,
      repeat: -1,
      onRepeat() {
        this._time === this._dur && (this._tTime += this._dur - 0.01);
      },
      onReverseComplete() {
        this.totalTime(this.rawTime() + this.duration() * 100);
      }
    });
    const cycleDuration = spacing * items.length;
    let dur;

    items.concat(items).concat(items).forEach((item, i) => {
      let anim = animateFunc(items[i % items.length]);
      rawSequence.add(anim, i * spacing);
      dur || (dur = anim.duration());
    });

    seamlessLoop.fromTo(rawSequence, {
      time: cycleDuration + dur / 2
    }, {
      time: "+=" + cycleDuration,
      duration: cycleDuration,
      ease: "none"
    });

    return seamlessLoop;
  }

  Draggable.create(".drag-proxy", {
    type: "x",
    trigger: ".cards",
    onPress() {
      this.startOffset = scrub.current.vars.offset;
    },
    onDrag() {
      scrub.current.vars.offset = this.startOffset + (this.startX - this.x) * 0.001;
      scrub.current.invalidate().restart();
    },
    onDragEnd() {
      scrollToOffset(scrub.current.vars.offset);
    }
  });

  return (
    <div className="gallery" ref={galleryRef}>
      <ul className="cards">
        {[...Array(31).keys()].map(num => (
          <li key={num}>{num}</li>
        ))}
      </ul>
      <div className="actions">
        <button className="prev">Prev</button>
        <button className="next">Next</button>
      </div>
    </div>
  );
};

export default Gallery;
