import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

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

function Skill(props) {
  return (
    <div className="skill">
      <p style={{ backgroundColor: props.bgColor, padding: "5px" }}>
        {props.emoji} {props.text}
      </p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      <Skill text="HTML+CSS+JS" bgColor="yellow" emoji="😃" />
      <Skill text="C / C++ / C#" bgColor="red" emoji="💪🏻" />
      <Skill text="Python+Django" bgColor="blue" emoji="🐍" />
      <Skill text="SQL" bgColor="green" emoji="👏" />
      <Skill text="Java+Android+Kotlin" bgColor="purple" emoji="👌🏾" />
      <Skill text="Linux / Bash" bgColor="gray" emoji="👍🏻" />
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
