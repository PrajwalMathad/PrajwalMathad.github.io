import React from 'react';
import DataStore from './dataStore';
import Typewriter from 'typewriter-effect';

const Home = () => {

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
        <div className="main-container">
            <div className="left-container">
                <div className="contacts">
                    <a href="mailto:mathadprajwal@gmail.com" target="_blank" rel="noreferrer"><i class="icons fas fa-envelope"></i></a>
                    <a href="https://www.linkedin.com/in/prajwal-mathad/" target="_blank" rel="noreferrer"><i class="icons fab fa-linkedin"></i></a>
                    <a href="https://github.com/PrajwalMathad" target="_blank" rel="noreferrer"><i class="icons fab fa-github-square"></i></a>
                    <a href="https://www.instagram.com/prajwal_mathad" target="_blank" rel="noreferrer"><i class="icons fab fa-instagram"></i></a>
                </div>
            </div>
            <div className="middle-container">
                <div className="banner">
                    <div className="salutation"> Hey there! I am</div>
                    <div className="primary-text">Prajwal Mathad</div>
                    <div className="secondary-text" title="🤖: Its gonna take some time to typeout everything! This guy loves a lot of shit">
                        <span>I love&nbsp;</span><Typewriter options={{ strings: DataStore.ILove, autoStart: true, loop: true }} />
                    </div>
                    <div className="intro">
                        I'm a Software Engineer from India. Currently working at Software AG, building efficient and user friendly web applications.
                        Thanks for stopping by. Lets catch up and talk tech!
                    </div>
                </div>
                <div className="secondary-container">
                    <div className="exp-container section-container">
                        <div className="section-header">Experience </div>
                        {experienceDiv()}
                    </div>
                </div>
                <div className="footer">built by Prajwal Mathad</div>
            </div>
            <div className="right-container">
            </div>
        </div>
    )
}

export default Home;