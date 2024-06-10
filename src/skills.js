import React from 'react';
import DataStore from './dataStore';

const Skills = () => {

    return (
        <div id="skills" className="exp-container section-container">
            <div className="section-header">Skills </div>
            <div className='skill-container'>
                {DataStore.skills.map(skill => {
                    return (
                        <div>
                            <div className='title'>
                                <span>{skill.name}</span>
                                <span>{skill.value + '%'}</span>
                            </div>
                            <div className="progress-bar">
                                <span className={`percentage ${skill.name}`}></span>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Skills;