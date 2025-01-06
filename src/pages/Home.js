import React, { useState, useEffect } from 'react';
import Toolbar from './../components/Toolbar';

function Home() {
    //state variables for managing status of log in an project content
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [projects, setProjects] = useState([]);
    const [userScenario, setUserScenario] = useState('noLoggedIn');

    useEffect(() => {
        switch (userScenario) {
            case 'loggedInWithProjects':
                setIsLoggedIn(true);
                setProjects([{id: 1, name: 'Project 1' },
                             {id: 2, name: 'Project 2'}]);
                break;
            case 'loggedInWithoutProjects':
                setIsLoggedIn(true);
                setProjects([]);
                break;
            default:
                setIsLoggedIn(false);
                setProjects([]);
                break;
        }
    }, [userScenario]);

    //Function to handle project creation, can redirect or open a modal
    const createNewProject = () => {
    //placeholder for project creation logic
    console.log('Create a new project');
    };

    return (
        <>
            <Toolbar /> {/* Render the Toolbar component */}
            <div id="spacer-div" style={{ height: "50px" }}></div>
            <div className="container">
                <div className="user-scenario-option">
                    <label>
                        <input
                            type="radio"
                            checked={userScenario === 'notLoggedIn'}
                            onChange={() => setUserScenario('notLoggedIn')}
                        />
                        Not Logged In
                    </label>
                    <label>
                        <input
                            type="radio"
                            checked={userScenario === 'loggedInWithProjects'}
                            onChange={() => setUserScenario('loggedInWithProjects')}
                        />
                        Logged In with Projects
                    </label>
                    <label>
                        <input
                            type="radio"
                            checked={userScenario === 'loggedInWithoutProjects'}
                            onChange={() => setUserScenario('loggedInWithoutProjects')}
                        />
                        Logged In without Projects
                    </label>
                </div>
                {!isLoggedIn ? (
                    <div className="homepage-message">
                        <h1>Welcome!</h1>
                        <p>Please sign up or log in to access the functions of the service.</p>
                    </div>
                ) : (
                    <div className="projects-container">
                        {projects.length > 0 ? (
                            <div className="projects-list">
                                <h1>Your Projects</h1>
                                <ul>
                                    {projects.map(project => (
                                        <li key={project.id}>{project.name}</li>
                                    ))}
                                </ul>
                            </div>
                        ) : (
                            <div className="no-projects-message">
                                <h1>No Projects</h1>
                                <p>You are not part of any projects. Please create a new project.</p>
                                <button onClick={createNewProject}>CREATE</button>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </>
    );
}

export default Home;
