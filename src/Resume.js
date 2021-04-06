import styled from "styled-components";
import { resume } from "./data";

const Resume = styled.article`
  padding: 2rem 1rem 4rem 1rem;
  background-color: whitesmoke;
  text-align: center;
  width: 50%;
  margin: 0 auto;
  box-shadow: 0 0 8px white;
  h1 {
    font-size: 3rem;
    margin-bottom: 0;
  }
  .personal-info {
    padding: 2rem;
  }
`;

const Skills = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const Educations = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const Experience = styled.section`
  width: 90%;
  margin: 0 auto;
  text-align: left;
  .work-location {
    display: grid;
    grid-template-columns: 1fr 1fr;
    div {
      h3,
      h4 {
        padding: 0;
        margin: 0;
      }
    }
    .time-frame {
      text-align: right;
    }
  }
  .work-description {
  }
`;

export default function () {
  return (
    <Resume>
      <div className="personal-info">
        <h1>Rhys Dent</h1>
        <h3>
          <a href="mailto:rhyswdent@gmail.com">RhysWDent@gmail.com</a>
        </h3>
      </div>
      <h2>Skills</h2>
      <Skills>
        {resume.skills.major.map((skill) => (
          <span>{skill}</span>
        ))}
      </Skills>
      <h2>Education</h2>
      <Educations>
        {resume.education.map((education) => (
          <div>
            <h3>{education.title}</h3>
            <h4>{education.institution}</h4>
            <h5>
              {education.start} - {education.completed}
            </h5>
          </div>
        ))}
      </Educations>
      <div>
        <h2>Experience</h2>
        {resume.experience.map((experience) => (
          <Experience>
            <div className="work-location">
              <div>
                <h3>{experience.title}</h3>
                <h4>
                  {experience.company}, {experience.location}
                </h4>
              </div>
              <div className="time-frame">
                <span>{experience.start}</span> - <span>{experience.end}</span>
              </div>
            </div>
            <ul className="work-description">
              {experience.description.map((description) => (
                <li>{description}</li>
              ))}
            </ul>
          </Experience>
        ))}
      </div>
    </Resume>
  );
}
