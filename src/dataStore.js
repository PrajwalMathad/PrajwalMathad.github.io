const DataStore = {
    skills: [
        {
            name: 'Javascript',
            value: '100'
        },
        {
            name: 'Java',
            value: '95'
        },
        {
            name: 'Typescript',
            value: '100'
        },
        {
            name: 'React',
            value: '95'
        },
        {
            name: 'Angular',
            value: '92'
        },
        {
            name: 'NodeJs',
            value: '90'
        },        
        {
            name: 'MongoDB',
            value: '88'
        },        
        {
            name: 'PostgreSQL',
            value: '82'
        },       
        {
            name: 'Docker',
            value: '80'
        },
        {
            name: 'AWS',
            value: '80'
        }
    ],
    experiences: [
        {
            type: "Internship",
            title: "Full Stack Engineer, Co-op",
            company: "Fidelity Investments",
            url: "https://www.fidelity.com/",
            place: "Boston",
            dates: "Jul 2023 - Dec 2024",
            description: [
                "Worked on building a web application to ease the processing of retirement plans.",
                "As a Full stack engineer, worked on all the aspects of the application development. ",
                "Writing efficient, readable, reusable, robust, modularized code.",
            ]
        },
        {
            type: "Job",
            title: "Graduate Teaching Assistant",
            company: "Khoury College Of Computer Sciences",
            url: "https://www.khoury.northeastern.edu/",
            place: "Boston",
            dates: "Jan 2023 - May 2024",
            description: [
                "Worked as a Teaching Assistant for the course 'Foundations of Software Engineering'.",
                "Mentoring and guiding 20 students in projects, grading assignments, and assisting the professor."
            ]
        },
        {
            type: "Job",
            title: "Software Engineer",
            company: "Software AG",
            url: "https://www.softwareag.com/en_corporate.html",
            place: "Bangalore",
            dates: "Aug 2018 - Aug 2022",
            description: [
                "Worked on building the next gen middleware cloud applications.",
                "Worked on different platforms and frameworks like React, Angular, Node, JavaScript, Java, Docker, Kubernetes.",
                "Co-ordinated with multiple teams of engineers and designers.",
                "Writing efficient, readable, reusable, robust, modularized code.",
                "Used testing libraries like Jest, Protractor, React testing library."
            ]
        },
        {
            type: "Job",
            title: "Research Assistant",
            company: "KLE Technological University",
            url: "https://www.kletech.ac.in/",
            place: "Hubli",
            dates: "Aug 2017 - Apr 2018",
            description: [
                "Built an end-to-end pipeline for 3D reconstruction of statues with images.",
                "Capture images of stautes with a drone and refine them.",
                "Worked on Image processing, Computer vision, Machine learning.",
                "Programming languages and Tools used : Python, C++, Matlab, VisualSFM, OpenMVG, OpenMVS.",
            ]
        },
        {
            type: "Internship",
            title: "Software Engineering Intern",
            company: "Walmart Global Tech",
            url: "https://tech.walmart.com/content/walmart-global-tech/en_us.html",
            place: "Bangalore",
            dates: "Feb 2017 - Jul 2017",
            description: [
                "Worked with the global business solutions team of Walmart.",
                "Worked on SAP UI5, SAP ABAP, SAP Fiori to develop web applications."
            ]
        }
    ],
    academics: [
        {
            college: "Khoury College of Computer sciences",
            university: "Northeastern University",
            url: "https://www.northeastern.edu/",
            dates: "Sept 2022 - May 2024",
            course: "Master of Science in Computer Science",
            gpa: "3.89/4"
        },
        {
            college: "B.V.Bhoomareddy College of Engineering and Technology",
            university: "KLE Technological University",
            url: "https://www.kletech.ac.in/",
            dates: "Aug 2013 - Jun 2017",
            course: "Bachelor of Engineering in Information science",
            gpa: "8.7/10"
        }
    ],
    projects: [
        {
            "title": "Igloo: Hotel Booking Application",
            "stack": "React, Redux, Node.js, Express.js, MongoDb, Render, Netlify",
            "description": "Built a hotel booking application using MERN stack and hosted on Render and Netlify. " +
                "Salient features : login/register, views based on user roles(customer/owner/admin), CRUD operation for bookings.",
            "url": "https://main--sage-marshmallow-1c700a.netlify.app/#/Home",
            "github": "https://github.com/PrajwalMathad/igloo-hotel-booking-website"
        },
        {
            "title": "Covid 19 Dashboard",
            "stack": "React, Redux,  GitHub, GH Pages",
            "description": "Its a dashboard showing the statistics of COVID19 disease effect over the world. " +
                "The COVID19 disease first observed in China in December 2019, is a disease that causes respiratory " +
                "illness (like the flu) with symptoms such as a cough, fever, and in more severe cases, difficulty " +
                "breathing. This dashboard gives the count of confirmed, deceased cases of the disease across the globe and in a particular " +
                "country. The graph plot is based on the county specific data over a period of 30 days.",
            "url": "https://prajwalmathad.github.io/covid19-dashboard/",
            "github": "https://github.com/PrajwalMathad/covid19-dashboard"
        },
        {
            "title": "Stockbroker Application",
            "stack": "MVC, Java",
            "description": "Developed a Stockbroker application using the MVC design pattern. The application would" +
                " allow users to create portfolios, buy/sell stocks, and view stock details and values on a given date using real-time data.",
            "url": null,
            "github": null
        }
    ],
    ILove: [
        "building websites!", "technology!", "being an engineer!", "sketching!", "cars!", "dogs!",
        ""
    ],
    themes: [
        {
            "id": 1,
            "name": "NeonGreen",
            "primaryAccentColor": "#56ffcc",
            "secondaryAccentColor": "#e0e5f5",
            "secondaryAccentColor2": "#ccd6f6",
            "backgroundGradient1": "#00002d",
            "backgroundGradient2": "#141e61"
        },
        {
            "id": 2,
            "name": "MaroonYellow",
            "primaryAccentColor": "#fff8adf8",
            "secondaryAccentColor": "#f3c3c3",
            "secondaryAccentColor2": "#EFB7B7",
            "backgroundGradient1": "#000000",
            "backgroundGradient2": "#470033"
        },
        {
            "id": 3,
            "name": "DarkPurple",
            "primaryAccentColor": "#fffbfd",
            "secondaryAccentColor": "#ffb8f6",
            "secondaryAccentColor2": "#ff81de",
            "backgroundGradient1": "#000000",
            "backgroundGradient2": "#52057B"
        }
    ]
}
export default DataStore;