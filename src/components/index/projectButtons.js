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
                >GitHub Page</a>
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
                >Live Sample</a>
                <a 
                    className="button"
                    href={`${gitHub_url}`} 
                    target="_blank"
                    rel="noopener noreferrer"
                >GitHub Page</a>
            </div>
        );    
    }  
}

export default ProjectButtons;