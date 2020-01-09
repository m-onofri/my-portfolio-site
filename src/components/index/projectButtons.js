import React from 'react';

const ProjectButtons = ({site_url, gitHub_url}) => {

    if (site_url === "null") {
        return(
            <div className="buttons">
                <a 
                    className="button"
                    href={`${gitHub_url}`} 
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <i class="fab fa-github-square fa-2x"></i>
                    <span class="tooltiptext">GitHub</span>
                    </a>
            </div>
        );
    } else {
        return(
            <div className="buttons">
                <a 
                    className="button"
                    href={`${site_url}`} 
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <i class="fas fa-desktop fa-2x"></i>
                    <span class="tooltiptext">Live Demo</span>
                </a>
                <a 
                    className="button"
                    href={`${gitHub_url}`} 
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <i class="fab fa-github-square fa-2x"></i>
                    <span class="tooltiptext">GitHub</span>
                </a>
            </div>
        );    
    }  
}

export default ProjectButtons;