import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./Timeline.css";

const Timeline = () => {
  return (
    <VerticalTimeline lineColor={"black"}>
       <VerticalTimelineElement
        contentStyle={{ background: "#B00707", color: "white" }}
        contentArrowStyle={{ borderRight: "7px solid #B00707" }}
        date="Feb 24, 2024"
        iconClassName="border"
        iconStyle={{
          background: `url(${"/images/cp.jpg"})`,
          backgroundSize: "cover",
          color: "#fff",
        }}
      >
        <h3>
          ACM Programming Competition (AUBPC) 🏆
        </h3>
        <p>
        The ACM AUB Programming Competition (AUBPC) was an exhilarating five-hour
        showdown, tailor-made by our team to ignite the competitive spirit of 
        programmers at all levels. With 22 dynamic teams competing against each other, 
        the event buzzed with energy and excitement. Thanks to the generous sponsorship 
        from Murex, prizes awaited the top three teams that demonstrated a remarkable 
        performance, celebrating their outstanding achievements.
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        contentStyle={{ background: "#840032", color: "white" }}
        contentArrowStyle={{ borderRight: "7px solid #840032" }}
        date="Dec 22, 2023"
        iconClassName="border"
        iconStyle={{
          background: `url(${"/images/acm_logo_red.jpg"})`,
          backgroundSize: "cover",
          color: "#fff",
        }}
      >
        <h3>
          ACM AUB Alumni Day: Bridging the Past and Present, Inspiring Futures 💬
        </h3>
        <p>
          The Alumni Day was a half-day, fully in-person immersion of wisdom
          event where students got to meet with accomplished alumni and attend
          multiple short talks about internships, interviews, work applications,
          graduate school, life abroad, and more exciting topics! The talks
          featured 11 speakers, each with a unique journey, who have worked or
          studied at powerhouse institutions such as Amazon, EPFL, Google, IMC
          Trading, Meta, Microsoft, University of Toronto, Walmart, and YouTube.
          Attendees enjoyed a relaxing lunch break in between the talks and a
          networking session with the alumni at the end of the day.
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        contentStyle={{ background: "#B00707", color: "white" }}
        contentArrowStyle={{ borderRight: "7px solid #B00707" }}
        date="Oct 17, 2023"
        iconClassName="border"
        iconStyle={{
          background: `url(${"/images/cp.jpg"})`,
          backgroundSize: "cover",
          color: "#fff",
        }}
      >
        <h3>
          Interview Workshop with Rene Adaimi: Decoding the Big-Tech Interview
          Process 🎙️
        </h3>
        <p>
          The one-hour workshop was provided by Rene Adaimi, a software engineer
          at Google and the visionary founder behind Resis – a website that has
          become an indispensable tool for almost all AUB students streamlining
          their registration processes. Rene provided a deep dive into the
          intricacies of big-tech interviews, offering crucial guidelines on how
          students should approach this critical phase of their career journey.
          The excitement among students was palpable as they engaged
          with Rene, seizing the opportunity to interact with someone who has
          not only conquered the tech industry but has also left an indelible
          mark on campus life.
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        date="Oct 09, 2023"
        contentArrowStyle={{ borderRight: "7px solid #47817F" }}
        iconStyle={{
          background: `url(${"/images/ai.jpg"})`,
          backgroundSize: "cover",
          color: "#fff",
        }}
        contentStyle={{ background: "#47817F", color: "white" }}
        iconClassName="border"
      >
        <h3>Launch of ACM AUB Artificial Intelligence Sessions 🤖</h3>
        <p>
          The AI sessions are held once a week and feature alumni professionals
          who work in the field of Artificial Intelligence. Some of their
          notable schools/workplaces include MIT and OpenAI. The sessions kick
          off with a distinctive touch – alumni professionals share their career
          path stories, offering personal insights into their journeys and work.
          These talks then dive deep into the tools essential for building AI
          models, offering a substantive understanding that goes beyond
          superficial advertising to provide real knowledge about ML and AI.
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        contentStyle={{ background: "#B00707", color: "white" }}
        contentArrowStyle={{ borderRight: "7px solid #B00707" }}
        date="Aug 23, 2023"
        iconStyle={{
          background: `url(${"/images/cp.jpg"})`,
          backgroundSize: "cover",
          color: "#fff",
        }}
        iconClassName="border"
      >
        <h3>Launch of ACM AUB Competitive Programming Sessions 💻</h3>
        <p>
          The CP sessions are held twice a week and feature experienced students
          and alumni professionals who reached ICPC and were able to navigate
          their careers successfully, partially due to their CP efforts. Some of
          their notable workplaces include Google and Microsoft. The sessions
          given provided technical training for students to participate in CP
          competitions by covering popular CP topics and solving exercises
          simultaneously.
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        contentStyle={{ background: "#0089FF", color: "white" }}
        contentArrowStyle={{ borderRight: "7px solid #0089FF" }}
        date="Aug 07, 2023"
        iconClassName="border"
        iconStyle={{
          background: `url(${"/images/education.jpg"})`,
          backgroundSize: "cover",
          color: "#fff",
        }}
      >
        <h3>EECE 230X: Empowering Minds Through Open Learning 🤝</h3>
        <p>
          The EECE 230X initiative is a free, online course, generously open to
          all learners, serving as a beacon of knowledge supported by the
          esteemed Faculty of Engineering through an official certificate upon
          completion. Our commitment to accessibility and knowledge sharing is
          epitomized by the release of all course materials under a creative
          commons license and organized on a website our dedicated students
          created. The initiative witnessed an overwhelming response, with more
          than 2000 learners accessing the curated material. After 3 weeks of
          launching, we administered an entrance exam for all students who
          wanted to take it. The top-scoring students obtained access to a
          student-built auto-grading tool, teaching office hours, and the
          opportunity to earn a certificate upon passing the final exam. Almost
          50% of the students took the final exam and almost 50% of those who
          took it passed, which is a remarkable milestone.
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        contentStyle={{ background: "#840032", color: "white" }}
        contentArrowStyle={{ borderRight: "7px solid #840032" }}
        date="Aug 28, 2023"
        iconClassName="border"
        iconStyle={{
          background: `url(${"/images/acm_logo_red.jpg"})`,
          backgroundSize: "cover",
          color: "#fff",
        }}
      >
        <h3>FOUNDATION: ACM AUB's Inspirational Genesis 🌱</h3>
        <p>
          Years later, our founders discovered inspiration in the CP sessions
          facilitated by the accomplished students of Mr. Nagi Nahas. Fueled by
          this inspiration and fortified by the unwavering support of the CP
          community alumni and Professor Louay Bazzi, ACM AUB was born.
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        contentStyle={{ background: "#4FC3F7", color: "white" }}
        contentArrowStyle={{ borderRight: "7px solid #4FC3F7" }}
        date="2007"
        iconClassName="border"
        iconStyle={{
          background: `url(${"/images/acm_logo_blue.jpg"})`,
          backgroundSize: "cover",
          color: "#fff",
        }}
      >
        <h3>PRE-FOUNDATION: Forging the Roots of Excellence🌟</h3>
        <p>
          Before the official establishment of AUB ACM, our journey began with
          the spark of a competitive programming community at AUB. In 2007, the
          visionary Mr. Nagi Nahas ignited this flame by conducting CP sessions,
          empowering students to step into the thrilling realm of programming
          competitions. Our students shined in the LCPC, ACPC, and ICPC, proudly
          ranking amongst the top 50-100 universities in the competition, a
          testament to the passion and dedication of our members. Behind every
          success story is our esteemed advisor, Professor Louay Bazzi. A
          guiding light for years, Professor Bazzi has been the cornerstone of
          our community, shaping the careers and futures of countless students.
        </p>
      </VerticalTimelineElement>
    </VerticalTimeline>
  );
};

export default Timeline;
