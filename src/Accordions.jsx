import { useState } from "react";
import "./style.css";

const Accordions = ({ title, content }) => {
  const [isActive, setActive] = useState(false);

  return (
    <section className="accordions-card" key={Math.random()}>
      <div className="question-card" onClick={() => setActive(!isActive)}>
        <div>{title}</div>
        <p>{isActive ? "-" : "+"}</p>
      </div>
      <div className="question-title">{isActive && <p>{content}</p>}</div>
    </section>
  );
};

export default Accordions;
