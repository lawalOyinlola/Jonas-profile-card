import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const skills = [
  {
    skill: 'Nipping',
    level: 'advanced',
    color: '#2662EA',
  },
  {
    skill: 'Eating',
    level: 'advanced',
    color: '#EFD81D',
  },
  {
    skill: 'Playing',
    level: 'advanced',
    color: '#C3DCAF',
  },
  {
    skill: 'Attention Seeking',
    level: 'intermediate',
    color: '#E84F33',
  },
  {
    skill: 'Laying Down',
    level: 'advanced',
    color: '#60DAFB',
  },
  {
    skill: 'Cuddling',
    level: 'beginner',
    color: '#FF3B00',
  },
];

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <SkillSet />
      </div>
    </div>
  );
}

function Avatar() {
  return (
    <img className="avatar" src="chow-chow-fullbody.png" alt="chow chow" />
  );
}

function Intro() {
  return (
    <div>
      <h1>Rex The Dawg!</h1>
      <p>
        Home bred golden brown dog of the chow chow breed also called Lion puffy
        breed. When not laying down lazy, I like to jump around, chew on random
        stuffs, eat, seek attention from my owner and receive treats.
      </p>
    </div>
  );
}

function SkillSet() {
  return (
    <div className="skill-list">
      {skills.map((skill) => (
        <Skill skill={skill.skill} level={skill.level} color={skill.color} />
      ))}
    </div>
  );
}

function Skill({skill,level, color}) {
  return (
    <div className="skill" style={{ backgroundColor: color }}>
      <span>{skill}</span>
      <span>
        {level === 'beginner' && '👶'}
        {level === 'intermediate' && '👍'}
        {level === 'advanced' && '💪'}
      </span>
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
