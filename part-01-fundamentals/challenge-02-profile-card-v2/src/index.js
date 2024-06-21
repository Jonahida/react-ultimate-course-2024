import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";
const skills = [
  {
    skill: "HTML+CSS+JS",
    level: "advanced",
    color: "yellow",
  },
  {
    skill: "C / C++ / C#",
    level: "intermediate",
    color: "red",
  },
  {
    skill: "Python+Django",
    level: "advanced",
    color: "blue",
  },
  {
    skill: "SQL",
    level: "intermediate",
    color: "green",
  },
  {
    skill: "Java+Android+Kotlin",
    level: "basic",
    color: "purple",
  },
  {
    skill: "Linux / Bash",
    level: "intermediate",
    color: "gray",
  },
];

function Avatar() {
  return (
    <div className="avatar">
      <img src="profile.jpeg" style={{ margin: "15px", width: "400px" }} />
    </div>
  );
}

function Intro() {
  return (
    <div>
      <h1>Jonathan Hidalgo</h1>
      <p className="data">Full-stack web developer</p>
    </div>
  );
}

function Skill({ skill, level, color }) {
  return (
    <div className="skill">
      <p style={{ backgroundColor: color }}>
        {level} {skill}
      </p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      {skills.map((skill) => (
        <Skill
          skill={skill.skill}
          color={skill.color}
          level={
            (skill.level === "advanced" && `💪`) ||
            (skill.level === "intermediate" && `👍`) ||
            (skill.level === "basic" && `👶`)
          }
        />
      ))}
    </div>
  );
}

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
        <SkillList />
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
