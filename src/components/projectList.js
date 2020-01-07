import React from 'react';
import ProjectButtons from './index/projectButtons';
import {Link} from 'gatsby';

function setColorTag(tag) {
    switch (tag) {
        case "PHP":
            return("#FFF799");
        case "Slim":
            return("#FFD795"); 
        case "React":
            return("#98C7FF");
        case "HTML & CSS":
            return("#C6FF87");
        case "jQuery":
            return("#ff7171");
        case "D3":
            return("#E4B2EE"); 
        default:
            return("#E0E0E0");
    }
}

const ProjectList = ({tags, image, title, description, site_url, gitHub_url, slug}) =>
    <>
        <div className="box" id={image}>
            <div className="tag">
                <h6
                    style={{backgroundColor: setColorTag(tags)}}
                >{tags}</h6>
            </div>
            <div className="inbox"></div>
            <h2 className="title"><Link to={`/blog/${slug}`}>{title}</Link></h2>
            {/* <p className="description">{description}</p> */}
            <ProjectButtons 
                site_url={site_url}
                gitHub_url={gitHub_url}
            />
        </div>
    </>    

export default ProjectList;