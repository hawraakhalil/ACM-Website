import React from 'react'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import './Timeline.css';


const Timeline = () => {
    return (

<VerticalTimeline lineColor={"black"}>
  <VerticalTimelineElement
    className="vertical-timeline-element"
    contentStyle={{ background: '#B00707', color: 'white' }}
    contentArrowStyle={{ borderRight: '7px solid #B00707' }}
    date="Feb, 2023"
    iconStyle={{ background: `url(${'/images/cp.jpg'})`, backgroundSize: 'cover', color: '#fff' }}
    iconClassName="border"
  >
    <h3>COMPETITIVE PROGRAMMING COMPETITION</h3>
    <p>
     Desc
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    contentStyle={{ background: '#840032', color: 'white' }}
    contentArrowStyle={{ borderRight: '7px solid #840032' }}
    date="Dec 22, 2023"
    iconClassName="border"
    iconStyle={{ background: `url(${'/images/acm_logo_red.jpg'})`, backgroundSize: 'cover', color: '#fff' }}
  >
    <h3 >ACM ALUMNI DAY</h3>
    <p>
    The Alumni Day was a half-day fully in-person event where students
    got to meet with Alumni and attend multiple short talks about 
    internships, interviews, work applications, graduate school, life 
    abroad, and more exciting topics! The talks featured 11 speakers who 
    have worked or studied at Amazon, EPFL, Google, IMC Trading, Meta, 
    Microsoft, University of Toronto, Walmart, and YouTube. Attendees 
    enjoyed a lunch break in between the talks and a networking session 
    with the alumni at the end of the day!
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    contentStyle={{ background: '#B00707', color: 'white' }}
    contentArrowStyle={{ borderRight: '7px solid #B00707' }}
    date="Oct 17, 2023"
    iconClassName="border"
    iconStyle={{ background: `url(${'/images/cp.jpg'})`, backgroundSize: 'cover', color: '#fff' }}
  >
    <h3 >Interview Workshop with Rene Adaimi, Founder of Resis</h3>
    <p>
    The interview workshop was with Rene Adaimi, a software engineer
     working at Google and the founder of Resis, a website that almost 
     all AUB students use to ease their registration processes! Rene 
     explained the interview process and provided important guidelines
     on how one must approach their big-tech interview in a 1 hour 
     workshop. Students were excited to interact with Rene especially
     since he is somewhat of a legend around campus.
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    
    date="Oct 09, 2023"
    contentArrowStyle={{ borderRight: '7px solid #47817F' }}
    iconStyle={{ background: `url(${'/images/ai.jpg'})`, backgroundSize: 'cover', color: '#fff' }}
    contentStyle={{ background: '#47817F', color: 'white' }}
    iconClassName="border"
  >
    <h3>ACM AI Sessions</h3>
    <p>
    The AI sessions happened once a week and featured alumni professionals 
    who work in the field of Artificial Intelligence (some notable schools/workplaces 
    include MIT and OpenAI). The alumni started the first session by telling
    their career path story and providing insight into their work. Then, they
    led a series of technical talks that included tools to build AI models. 
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    contentStyle={{ background: '#B00707', color: 'white' }}
    contentArrowStyle={{ borderRight: '7px solid #B00707' }}
    date="Aug 23, 2023"
    iconStyle={{ background: `url(${'/images/cp.jpg'})`, backgroundSize: 'cover', color: '#fff' }}
    iconClassName="border"
  >
    <h3>ACM CP Sessions</h3>
    <p>
    The ACM CP sessions happened twice a week and featured experienced students
    and alumni professionals who have reached ICPC and were able to advance their 
    careers well partially due to their CP efforts (some notable workplaces 
    include Google and Microsoft). The sessions given provided technical training
    for students to participate in CP competitions, by covering popular CP topics 
    and solving exercises simultaneously.
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    contentStyle={{ background: '#0089FF', color: 'white' }}
    contentArrowStyle={{ borderRight: '7px solid #0089FF' }}
    date="Aug 07, 2023"
    iconClassName="border"
    iconStyle={{ background: `url(${'/images/education.jpg'})`, backgroundSize: 'cover', color: '#fff' }}
  >
    <h3 >EECE 230X</h3>
    <p>
    The EECE 230X initiative is a free, online course that is open to all leaners
    and supported by the Faculty of Engineering through an official certificate. 
    All the material was made open source through a website we created using a creative 
    commons license. More than 2000 learners accessed the material. After 3 weeks 
    of access to the material, we administered an entrance exam for all students who 
    wanted to take it. The top-scoring students obtained access to a student-built 
    auto-grading tool, teaching office hours, and the opportunity to earn a certificate 
    upon passing the final exam. Almost 50% of the students took the final exam and almost
    50% of those who took it passed, which is remarkable for an online course.
    </p>
    
  </VerticalTimelineElement>
  <VerticalTimelineElement
    contentStyle={{ background: '#840032', color: 'white' }}
    contentArrowStyle={{ borderRight: '7px solid #840032' }}
    date="Aug 28, 2023"
    iconClassName="border"
    iconStyle={{ background: `url(${'/images/acm_logo_red.jpg'})`, backgroundSize: 'cover', color: '#fff' }}
  >
    <h3 >FOUNDATION</h3>
    <p>
    Years later, our founders attended CP sessions given by the predecessor students of Mr. Nahas 
    and they were inspired. With the support of the alumni of the CP community and Professor Louay Bazzi, 
    AUB ACM was born!
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    contentStyle={{ background: '#4FC3F7', color: 'white' }}
    contentArrowStyle={{ borderRight: '7px solid #4FC3F7' }}
    date="2007"
    iconClassName="border"
    iconStyle={{ background: `url(${'/images/acm_logo_blue.jpg'})`, backgroundSize: 'cover', color: '#fff' }}
  >
    <h3 >PRE-FOUNDATION</h3>
    <p>
    The inspiration for the official foundation of AUB ACM came from a previously 
    present competitive programming community within AUB. This community has existed since
    2007, when Mr. Nagi Nahas started giving CP sessions to students to empower them to participate 
    in programming competitions. Our students shined in the LCPC, ACPC, and ICPC, often ranking amongst
    the top 50-100 universities in the competition. Throughout these years, our current advisor, Professor 
    Louay Bazzi, has always been a beacon of light to this community of students, helping them build their 
    careers and plan for their future.
    </p>
  </VerticalTimelineElement>
</VerticalTimeline>
    )
}

export default Timeline