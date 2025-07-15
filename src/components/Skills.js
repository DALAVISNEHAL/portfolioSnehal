import './Skills.css';

const skills = [
  { name: 'React & Angular', level: 90 },
  { name: 'Redux & Hooks', level: 90 },
  { name: 'JavaScript & Typescript', level: 90 },
  { name: 'HTML & CSS', level: 90 },
  { name: 'Playwright', level: 90 },
  { name: 'Jest & JUnit', level: 90 },
  { name: 'Java, Python & C/C++', level: 80 },
  { name: 'CI/CD Pipelines Jenkins', level: 80 },
  { name: 'AWS services, Cloudfront, ECS, S3 & DynamoDB', level: 80 },
];

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <h2>MY SKILLS</h2>
      <p className="subheading">-- WHAT I KNOW --</p>
      <div className="skills-container">
        <div className="skills-text">
          <h3>My creative skills & experiences.</h3>
          <p>
            I’m a passionate Frontend Developer with 4+ years of experience in building modern, responsive, and user-friendly web applications using React, Angular, JavaScript, HTML, and CSS. I have hands-on experience in full-stack development, writing test cases, and deploying applications. My focus is on delivering clean, maintainable code and crafting seamless user experiences. I am also experienced in collaborating with cross-functional teams and handling end-to-end project lifecycles efficiently.
          </p>
          <a
            href="/portfolioSnehal/Snehal_Bhanje_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button>Read more</button>
          </a>
        </div>
        <div className="skills-bars">
          {skills.map((skill, index) => (
            <div key={index} className="skill">
              <div className="skill-label">
                <span>{skill.name}</span>
                <span>{skill.level}%</span>
              </div>
              <div className="skill-bar">
                <div className="skill-level" style={{ width: `${skill.level}%` }}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
