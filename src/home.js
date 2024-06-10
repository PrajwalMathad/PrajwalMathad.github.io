import React, { useState } from 'react';
import Typewriter from 'typewriter-effect';
import DataStore from './dataStore';
import Education from './education';
import Experience from './experience';
import Projects from './projects';
import Skills from './skills';

const Home = () => {
    const [theme, setTheme] = useState(1);

    const changeTheme = () => {
        const body = document.body.style;
        let newTheme = DataStore.themes.find((eachTheme) => {
            return eachTheme.id > theme;
        })
        if (newTheme) {
            setTheme(newTheme.id)
        } else {
            setTheme(1);
            newTheme = DataStore.themes[0];
        }
        body?.setProperty("--primary-accent-color", newTheme.primaryAccentColor);
        body?.setProperty("--secondary-accent-color", newTheme.secondaryAccentColor);
        body?.setProperty("--secondary-accent-color2", newTheme.secondaryAccentColor2);
        body?.setProperty("--background-gradient1", newTheme.backgroundGradient1);
        body?.setProperty("--background-gradient2", newTheme.backgroundGradient2);
    }

    return (
        <div className="main-container ripple">
            <div className="left-container">
                <ul className="navbar">
                    <li className="nav-item">
                        <a href="#skills" className="nav-link"> <i class="icons fas fa-briefcase"></i></a>
                    </li>
                    <li className="nav-item">
                        <a href="#education" className="nav-link"> <i class="icons fas fa-user-graduate"></i></a>
                    </li>
                    <li className="nav-item">
                        <a href="#projects" className="nav-link"> <i class="icons fas fa-laptop-code"></i></a>
                    </li>
                </ul>
            </div>
            <div className="middle-container">
                <div className="banner">
                    <div className="secondary-text"> Hey there! I am</div>
                    <div className="primary-text">Prajwal Mathad</div>
                    <div className="secondary-text" title="🤖: Its gonna take some time to typeout everything! This guy loves a lot of shit">
                        <span>I love&nbsp;</span><Typewriter options={{ strings: DataStore.ILove, autoStart: true, loop: true }} />
                    </div>
                    <div className="intro">
                        I aspire to work on building scalable applications that can solve complex problems.
                        Thanks for stopping by. Lets catch up and talk tech!
                    </div>
                </div>
                <div className="secondary-container">
                    <Skills />
                    <Experience />
                    <div className="separator"></div>
                    <Education />
                    <div className="separator"></div>
                    <Projects />
                </div>
                <div className="footer">built by Prajwal Mathad</div>
            </div>
            <div className="right-container">
                <i onClick={changeTheme} class="icons fas fa-magic theme-changer-icon"></i>
                <div className="contacts">
                    <a href="mailto:mathadprajwal@gmail.com" target="_blank" rel="noreferrer"><i class="icons fas fa-envelope"></i></a>
                    <a href="https://www.linkedin.com/in/prajwal-mathad/" target="_blank" rel="noreferrer"><i class="icons fab fa-linkedin"></i></a>
                    <a href="https://github.com/PrajwalMathad" target="_blank" rel="noreferrer"><i class="icons fab fa-github-square"></i></a>
                    <a href="https://www.instagram.com/prajwal_mathad" target="_blank" rel="noreferrer"><i class="icons fab fa-instagram"></i></a>
                </div>
            </div>
        </div>
    )
}

export default Home;