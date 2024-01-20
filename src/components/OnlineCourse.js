import React from 'react'
import './OnlineCourse.css'
import SettingsIcon from '@mui/icons-material/Settings';
import LanguageIcon from '@mui/icons-material/Language';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PaymentIcon from '@mui/icons-material/Payment';
import DescriptionIcon from '@mui/icons-material/Description';

function OnlineCourse() {
    return (
        <>
        <div>
        <div className="open-source-container">
          <div className="image-container">
            <img src="/images/course_image3.jpg" alt="Course Pic" />
          </div>
          <div className="course-details">
            <h2>EECE 230X: Introduction to Computation and Programming Using Python</h2>
            <p>Dive into the field of computer science, irrespective of your coding experience using Python with an emphasis on elementary algorithmic ideas. </p>
           
            <div className="details-with-icon">
            <SettingsIcon/>
            <p>Format: F​ully Online (Asynchronous)​</p>
            </div>
                    
            <div className="details-with-icon">
                <LanguageIcon />
                <p>Language: English & Arabic</p>
            </div>

            <div className="details-with-icon">
                <CalendarMonthIcon />
                <p>Next start date: TBD​</p>
            </div>

            <div className="details-with-icon">
                <AccessTimeIcon />
                <p>Length of program: 3 months</p>
            </div>

            <div className="details-with-icon">
                <PaymentIcon />
                <p>Total program tuition: FREE</p>
            </div>
            <div className="details-with-icon">
                <DescriptionIcon />
                <a href="../pdfs/syllabus.pdf" target="_blank" rel="noopener noreferrer">
            Check the syllabus
      </a>
            </div>

            <div className="buttons-container">
              <a href="https://www.aub.edu.lb/msfea/ece/introduction-to-computation-and-programming-using-python/Pages/courses.aspx" className="button">
                Learn Python at your own pace without receiving a certificate
              </a>
              <a href="https://www.aub.edu.lb/msfea/Landing/introduction-to-Python.html" className="button">
                Enroll in the interactive program and get your certificate
              </a>
            </div>
          </div>
        </div>
        </div>
        </>
      );
    };
export default OnlineCourse
