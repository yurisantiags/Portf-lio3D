import { Event, Events, Timeline } from 'vertical-timeline-component-react';

const Main = () => {
	const customTheme = {
		borderDotColor: '#000',
		descriptionColor: '#000',
		dotColor: '#fff',
		eventColor: '#000',
		lineColor: '#000',
		subtitleColor: '#000',
		titleColor: '#000',
		yearColor: null,
	};

	return (
		<Timeline lang="en" theme={customTheme} dateFormat="only-string" collapse withoutDay>
			<Events
				title="Front-end:"
				subtitle="Proficient in Bootstrap, Tailwind, HTML, CSS, SASS, JavaScript, PHP, Next.js, and React."
				active
            
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
				active
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
				startDate="2020/12/02"
				active
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
				active
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
				startDate="2020/12/02"
				active
				
			>
            <Event
					
					description={[
						"That was a bit about me and my skllis in timeline format",
					]}
				/>
			</Events>
		</Timeline>
        
	);
};
export default Main;