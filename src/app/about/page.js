'use client '
import { Event, Events, Timeline } from 'vertical-timeline-component-react';
import Image from '../components/aboutImage';

	const customTheme = {
		borderDotColor: '#000',
		descriptionColor: '#000',
		dotColor: '#fff',
		eventColor: '#000',
		lineColor: '#000',
		subtitleColor: '#000',
		titleColor: '#000',
		yearColor: '#000',
	};

export default function About() {
  return (
    
    <main id='about' className="h-screen mt-72 flex flex-col justify-center items-center">
      <div className="flex flex-col justify-center items-center">
        <div className="flex justify-center md:pl-24 md:pb-14">
          <Image src="/img/perf-2.png" alt="me"/>
         <Timeline theme={customTheme} collapse withoutDay>
			<Events
				title="Front-end:"
				subtitle="Proficient in Bootstrap, Tailwind, HTML, CSS, SASS, JavaScript, PHP, Next.js, and React."
				defaultClosed
			>
				<Event
					title="3D Front-end"
					description={[
						"3D front end development using threee.js in next.js",
					]}
				/>
			</Events>
            <Events
				title="Design:"
				subtitle="Comprehensive experience in designing and implementing complete websites, including 3D modeling and animations (Three.js)."
				defaultClosed
			>
				<Event
					title="Design Tools:"
					description={[
						" Figma, Photoshop, Canva, and Blender.",
					]}
				/>
			</Events>
            <Events
				title="Back-end Integration:"
				subtitle="Java, Spring boot"
				defaultClosed
			>
				<Event
					title="Database"
					description={[
						"Database administration with Mysql",
						'Integrating java information with databases',
					]}
				/>
			</Events>
            <Events
				title="Cyber Security:"
				subtitle="Knowledge in vulnerability analysis and data protection"
				defaultClosed
                
			>
            <Event
					description={[
						"Information security study for better development ",
					]}
				/>
			</Events>
            <Events
				title="Code version"
				subtitle="Version control using Git and Git Flow."
				defaultClosed
			>
            <Event
					
					description={[
						"That was a bit about me and my skllis in timeline format",
					]}
				/>
			</Events>
		</Timeline>
        </div>
      </div>
    </main>
  );
}
