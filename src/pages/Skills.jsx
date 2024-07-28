import React from 'react';
import '../global.css'

const Skills = () => {
    const skills = [
      { name: 'Creativity', level: '80%' },
      { name: 'Communication', level: '85%' },
      { name: 'ProblemSloving', level: '89%'},
      { name: 'Teamwork', level: '95%'}
    ];
    const skill = [
        { name: 'Programer', level: '75%' },
        { name: 'FullStack', level: '85%' },
        { name: 'React', level: '70%'},
        { name: 'Java', level: '95%'}
    ]
      
  
    return (
        
      <div id='Skills' className="professional-skills">
        <h1>Professional Skills</h1>
        
        <div className="skills-container">
          {skills.map(skill => (
            <div className="skill-circle" key={skill.name}>
              <span className="skill-percentage">{skill.level}</span>
              <span className="skill-name">{skill.name}</span>
            </div>
          ))}
        </div>
        <div className="skills-containers">
          {skill.map(skill => (
            <div className="skill-circle" key={skill.name}>
              <span className="skill-percentage">{skill.level}</span>
              <span className="skill-name">{skill.name}</span>
            </div>
          ))}
        </div>

        
    </div>

      
    );
  };
  

export default Skills;
