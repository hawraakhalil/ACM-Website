import React from 'react'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import './Timeline.css';
import ShapeExample from './ShapeExample';



const Timeline = () => {
    return (

<VerticalTimeline lineColor={"black"}>
  <VerticalTimelineElement
    className="vertical-timeline-element"
    contentStyle={{ background: '#B00707', color: 'black' }}
    contentArrowStyle={{ borderRight: '7px solid #B00707' }}
    date="2011 - present"
    iconStyle={{ background: `url(${'/images/cp.jpg'})`, backgroundSize: 'cover', color: '#fff' }}
    iconClassName="border"
  >
    <h3>COMPETITIVE PROGRAMMING COMPETITION</h3>
    <p>
      Creative Direction, User Experience, Visual Design, Project Management, Team Leading
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    contentStyle={{ background: '#9296F0', color: 'black' }}
    contentArrowStyle={{ borderRight: '7px solid #9296F0' }}
    date="2010 - 2011"
    iconClassName="border"
    iconStyle={{ background: `url(${'/images/education.jpg'})`, backgroundSize: 'cover', color: '#fff' }}
  >
    <h3 >AUB ALUMNI DAY</h3>
    <h4 >San Francisco, CA</h4>
    <p>
      Creative Direction, User Experience, Visual Design, SEO, Online Marketing
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    contentStyle={{ background: '#9296F0', color: 'black' }}
    contentArrowStyle={{ borderRight: '7px solid #9296F0' }}
    date="2010 - 2011"
    iconClassName="border"
    iconStyle={{ background: `url(${'/images/education.jpg'})`, backgroundSize: 'cover', color: '#fff' }}
  >
    <h3 >RENE IDK SOMETHING</h3>
    <h4 >Los Angeles, CA</h4>
    <p>
      User Experience, Visual Design
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    
    date="2006 - 2008"
    contentArrowStyle={{ borderRight: '7px solid #47817F' }}
    iconStyle={{ background: `url(${'/images/ai.jpg'})`, backgroundSize: 'cover', color: '#fff' }}
    contentStyle={{ background: '#47817F', color: 'black' }}
    iconClassName="border"
  >
    <h3>Launch of AI sessions</h3>
    <h4>San Francisco, CA</h4>
    <p>
      User Experience, Visual Design
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    contentStyle={{ background: '#B00707', color: 'black' }}
    contentArrowStyle={{ borderRight: '7px solid #B00707' }}
    date="2000 - 2000"
    iconStyle={{ background: `url(${'/images/cp.jpg'})`, backgroundSize: 'cover', color: '#fff' }}
    iconClassName="border"
  >
    <h3>LAUNCH OF CP SESSIONS</h3>
    <h4>Online Course</h4>
    <p>
      Strategy, Social Media
    </p>
  </VerticalTimelineElement>

</VerticalTimeline>
    )
}

export default Timeline