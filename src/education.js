import React from 'react';
import DataStore from './dataStore';

const Education = () => {

    const educationDiv = () => {
        return DataStore.academics.map(edu => {
            return (
                <div className="single-exp">
                    <div className="title">{edu.course}<a href={edu.url} className="company">&nbsp;@&nbsp;{edu.university}</a></div>
                    {/* <a href={edu.url} className="company">{edu.university}</a> */}
                    <div className="date">{edu.dates}</div>
                    {/* <div className="college">{edu.college}</div> */}
                    {/* <div className='course'>{edu.course}</div> */}
                    {/* <div className="gpa">{edu.gpa}</div> */}
                </div>
            )
        })
    }

    return (
        <div id="education" className="exp-container section-container">
            <div className="section-header">Education </div>
            {educationDiv()}
        </div>
    )
}

export default Education;