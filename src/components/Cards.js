import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";

const BLUE= '0 6px 20px rgba(56, 125, 255, 0.17), 0 0 10px rgba(56, 165, 255, 0.763)'
const RED='0 6px 20px rgba(56, 125, 255, 0.17), 0 0 10px rgba(255, 56, 56, 0.801)'
const GREEN='0 6px 20px rgba(56, 125, 255, 0.17), 0 0 10px rgba(83, 255, 56, 0.703)'
const YELLOW='0 6px 20px rgba(56, 125, 255, 0.17), 0 0 10px rgba(245, 255, 56, 0.736)'

function Cards() {
  return (
    <div className='cards'>
      <h1>MEET THE TEAM</h1>
      <h2 >CLUB ADVISOR</h2>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className='cards__items'>
            <CardItem
              src='images/img-13.jpg'
              text='Loauy Bazzy'
              label='Advisor'
              color='yellow'
              shadow={YELLOW}
              email='mailto:lb13@aub.edu.lb'
            />
          </ul>
        </div>
      </div>
      <h2>CABINET MEMBERS</h2>
      <div className="cards__container">
        <div className="cards__wrapper">
        <ul className='cards__items'>
            <CardItem
              src='images/img-1.jpg'
              text='Jad Mchaimech'
              label='PREDISENT'
              linkedin="https://www.linkedin.com/in/jad-mchaimech-86181a232/"
              color='red'
              shadow={RED}
              email='mailto:jam37@mail.aub.edu'
            />
            <CardItem
              src='images/img-4.jpg'
              text='Alex Juvelekian'
              label='VICE PRESIDENT'
              linkedin="https://www.linkedin.com/in/alex-juvelekian/"
              color='red'
              shadow={RED}
              email='mailto:agj06@mail.aub.edu'
            />
            <CardItem
              src='images/img-2.jpg'
              text='Ruba El Houssami'
              label='TREASURER'
              linkedin="https://www.linkedin.com/in/ruba-houssami/"
              color='red'
              shadow={RED}
              email='mailto:rhe34@mail.aub.edu'
            />
            <CardItem
              src='images/img-3.jpg'
              text='Anthony Khairallah'
              label='SECRETARY'
              linkedin="anthony-khairallah"
              color='red'
              shadow={RED}
              email='mailto:adk05@mail.aub.edu'
            />
            <CardItem
              src='images/img-5.jpg'
              text='Artur Baboudijian'
              label='MEMBERSHIP AND PUBLIC RELATIONS'
              linkedin="https://www.linkedin.com/in/artur-baboudjian-2a6311258/"
              color='red'
              shadow={RED}
              email='mailto:asb27@mail.aub.edu'
            />
          </ul>
        </div>
      </div>
      <h2 >COMMITTEE LEADS</h2>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className='cards__items'>
            <CardItem
              src='images/img-6.jpg'
              text='Ahmad El Hajj'
              label='HEAD OF EDUCATION'
              linkedin="https://www.linkedin.com/in/ahmad-el-hajj-863b81268/"
              color='green'
              shadow={GREEN}
              email='mailto:aae108@mail.aub.edu'
            />
            <CardItem
              src='images/img-7.jpg'
              text='Don Carlos Awada'
              label='HEAD OF CP'
              linkedin="https://www.linkedin.com/in/don-carlos-awada-9907012a2/"
              color='green'
              shadow={GREEN}
              email='mailto:daa66@mail.aub.edu'
            />
            <CardItem
              src='images/img-8.jpg'
              text='Jawad Nasser'
              label='HEAD OF AI'
              linkedin="https://www.linkedin.com/in/jawad-nasser-46143b19a/"
              color='green'
              shadow={GREEN}
              email='mailto:jmn09@mail.aub.edu'
            />
          </ul>
        </div>
      </div>
      <h2> TECHNICAL OFFICERS AND SOCIAL MEDIA</h2>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className='cards__items'>
            <CardItem
              src='images/img-9.jpg'
              text='Joseph Aoun'
              label='TECHNICAL OFFICER'
              linkedin="https://www.linkedin.com/in/joseph-aoun-5242bb254/"
              color='blue'
              shadow={BLUE}
              email='mailto:jea26@mail.aub.edu'
            />
            <CardItem
              src='images/img-10.jpg'
              text='Karim Habbal'
              label='TECHNICAL OFFICER'
              linkedin="https://www.linkedin.com/in/karim-habbal-31977a255/"
              color='blue'
              shadow={BLUE}
              email='mailto:kmh36@mail.aub.edu'
            />
            <CardItem
              src='images/img-11.jpg'
              text='Hashem Khodor'
              label='TECHNICAL OFFICER'
              linkedin="hashem-khodor"
              color='blue'
              shadow={BLUE}
              email='mailto:hmk57@mail.aub.edu'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-12.jpg'
              text='Hawraa Khalil'
              label='TECHNICAL OFFICER'
              color='blue'
              linkedin="https://www.linkedin.com/in/hawraa-khalil-13658a24b/"
              email='mailto:hhk22@mail.aub.edu'
              shadow={BLUE}
            />
            <CardItem
              src='images/img-13.jpg'
              text='Lea Azar'
              label='SOCIAL MEDIA OFFICER'
              linkedin="https://www.linkedin.com/in/lea-azar-357414224/"
              color='blue'
              shadow={BLUE}
              email='mailto:lga23@mail.aub.edu'
            />
            <CardItem
              src='images/img-14.jpg'
              text='Pia Maria Chedid'
              label='DESIGN OFFICER'
              linkedin="https://www.linkedin.com/in/pia-maria-chedid-89251827b/"
              color='blue'
              shadow={BLUE}
              email='mailto:ptc01@mail.aub.edu'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
