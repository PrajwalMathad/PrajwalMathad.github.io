import React from 'react';
import DataStore from './dataStore';

const Experience = () => {

    const experienceDiv = () => {
        return DataStore.experiences.map(exp => {
            return (
                <div className="single-exp">
                    <div className="title">{exp.title}<a href={exp.url} className="company">&nbsp;@&nbsp;{exp.company}</a></div>
                    <div className="date">{exp.dates}</div>
                    <div className="exp-description">
                        {exp.description.map(line => {
                            return (
                                <div className="single-point">
                                    <i className="fas fa-angle-right"></i><div className="single-point-text">{line}</div>
                                </div>)
                        })}
                    </div>
                </div>
            )
        })
    }

    return (
        <div id="experience" className="exp-container section-container">
            <div className="section-header">Experience </div>
            {experienceDiv()}
        </div>
    )
}

export default Experience;