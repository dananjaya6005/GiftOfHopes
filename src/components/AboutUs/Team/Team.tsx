import React from "react";
import "./Team.css";
import founders5 from "../../../Images/team/jump.jpg";
import maleDp from "../../../Images/team/maledp.jpg";
import femaleDp from "../../../Images/team/femaledp.jpg";

import AppFooter from "../../Footer/Footer";

const Team: React.FC = () => {
  return (
    <>
      <div className="about-container">
        <div className="header">
          <h1>Our team at Gifts of Hope</h1>
        </div>

        <div className="intro">
          <p>
            Gifts of Hope is a heartfelt initiative founded by four dedicated
            students pursuing their undergraduate degrees at the Open University
            of Sri Lanka. Our journey began as a group project, driven by a
            shared vision to make a positive impact on the lives of children and
            students facing adversity amidst the economic crisis in Sri Lanka.
          </p>
        </div>

        <div className="teamClassMembersWhole">
          <div className="membercard">
            <div className="Cardcontext">
              <div className="membercard-image">
                <img src={maleDp} alt="Classroom 1" className="imgMemmber" />
              </div>
              <div className="membercard-text">
                <h4 className="memberName">A M C D B Arampath</h4>
              </div>
            </div>
          </div>

          <div className="membercard">
            <div className="Cardcontext">
              <div className="membercard-image">
                <img src={maleDp} alt="Classroom 1" className="imgMemmber" />
              </div>
              <div className="membercard-text">
                <h4 className="memberName">M M Hettige</h4>
              </div>
            </div>
          </div>

          <div className="membercard">
            <div className="Cardcontext">
              <div className="membercard-image">
                <img src={maleDp} alt="Classroom 1" className="imgMemmber" />
              </div>
              <div className="membercard-text">
                <h4 className="memberName">G D K Kumarasiri</h4>
              </div>
            </div>
          </div>

          <div className="membercard">
            <div className="Cardcontext">
              <div className="membercard-image">
                <img src={femaleDp} alt="Classroom 1" className="imgMemmber" />
              </div>
              <div className="membercard-text">
                <h4 className="memberName">H M C M Perera</h4>
              </div>
            </div>
          </div>
        </div>

        
        <div className="mission">
          <h2 className="TeamWhywetryHead">Why we try</h2>
          <p>
            Our team of enthusiastic undergraduates believe in the greater good
            of humanity. We belive that humans are inheritly good but their
            circumstances drive them to stray from getting a proper education
            and becoming productive members of society. We tried to create a way
            for those that need that helping hand in their lives to find it
            here.
          </p>
          {
            <img
              src={founders5}
              alt="Classroom 1"
              style={{ width: "100%", height: "auto" }}
            />
          }
        </div>
        <div className="call-to-action">
          <p>
            We hope you join us in making a better tomorrow for the children of
            Sri Lanka and around the world.
          </p>
          {/* left to add a donate button */}
        </div>
      </div>
      <AppFooter />
    </>
  );
};

export default Team;
