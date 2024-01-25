import React from "react";
import "./AcmDesc.css";
import Animation2 from "./SquareAnimation";

function ValuesSection() {
  return (
    <div className="goal-container">
      <div className="about-us-content">
        <div className="about-us-right">
          <Animation2 />
        </div>
        <div className="about-us-left">
          <h2>💻 Our Values: Beyond Knowledge, Building Futures</h2>
          <div>
            <div>
              <p>
                Above all, ACM AUB is a testament to our dedication in
                fulfilling our mission of sharing knowledge and resources. We
                extend a welcoming hand to the talented minds of Lebanon and the
                surrounding regions. Those who share our values and possess an
                eagerness to invest in personal growth, developing computing
                skills will be guided by our mentorship and support.
              </p>
            </div>
            <div>
              <p>
              At ACM AUB, we champion diversity, extending a warm welcome to 
              every AUB student, regardless of their backgrounds. As a student-led 
              entity, our commitment lies in promoting academic excellence, 
              fostering education, and advancing technology responsibly and 
              ethically for a positive societal impact.
              </p>
            </div>
            <p style={{ marginTop: "20px" }}>
              Check out our{" "}
              <a
                href="../pdfs/bylaws.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Bylaws
              </a>{" "}
              to learn more about us!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ValuesSection;
