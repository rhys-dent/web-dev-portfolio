import styled from "styled-components";
import { resume } from "./data";

const Resume = styled.article`
  background-color: whitesmoke;
  text-align: center;
`;

const Skills = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const Experience = styled.section``;
export default function () {
  return (
    <Resume>
      <h1>Rhys Dent</h1>
      <h2>Email</h2>

      <h2>Skills</h2>
      <Skills>
        {resume.skills.map((skill) => (
          <h4>{skill}</h4>
        ))}
      </Skills>
      <div>
        <h2>Education</h2>
        {resume.education.map((education) => (
          <h4>{education.title}</h4>
        ))}
      </div>
      <div>
        <h2>Experience</h2>
        {resume.experience.map((experience) => (
          <Experience>
            <h3>{experience.title}</h3>
            <div>
              <div className="work-location">
                <h4>{experience.company}</h4>
                <h4>{experience.location}</h4>
              </div>
              <div className="timeframe">
                <h4>{experience.start}</h4>
                <h4>{experience.end}</h4>
              </div>
            </div>
            <ul className="description">
              {experience.description.map((description) => {
                <li>{description}</li>;
              })}
            </ul>
          </Experience>
        ))}
      </div>
    </Resume>
  );
}
