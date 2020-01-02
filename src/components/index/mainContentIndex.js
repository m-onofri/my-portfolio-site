import React from 'react';
import ProjectList from '../projectList'
import { graphql, useStaticQuery } from 'gatsby';
import {Link} from 'gatsby';

const MainContentIndex = () => {
    const bestProjects = ["project_1", "project_11", "project_23", "project_10", "project_6"];
    const data = useStaticQuery(graphql`
        query {
            allMarkdownRemark {
                edges {
                    node {
                        frontmatter {
                            tags
                            image
                            title
                            description
                            site_url
                            gitHub_url
                        }
                        html
                    }
                }
            }
        }    
    `);
    const filteredData = data.allMarkdownRemark.edges.filter(d =>
        bestProjects.includes(d.node.frontmatter.image)
    );
    return (
        <>
        <div id="about_me">
            <p>Ipsum Blaster antaran jedi mind trick kirk serenity apollo. R2-D2 mccoy paradox machine jabba husker. Doctor who fodder worf carbonite gorram bantha hypercube hutt andorian jethrik enterprise. Dalek sullust yoda edosian jawa force bantha kirk felgercarb laser. Landspeeder jar jar romulan troi gravitron x-wing cloud city. Light saber a new hope xindi mace windu starfleet dalek sullust greedo grand moff tarkin dagobah kirk exterminate andorian ba’ku tribble. Lando carbonite maul, ferengi reman spock luke.</p>
            <Link id="all_pjs" className="button" to="/about">More About Me</Link>
        </div>
        <div className="container">
            <div className="row" id="my_projects">
                <h1 id="projects_title">My Projects</h1>
                <div id="container">
                    {filteredData.map(i => 
                    <ProjectList
                        tags={i.node.frontmatter.tags}
                        image={i.node.frontmatter.image}
                        title={i.node.frontmatter.title}
                        description={i.node.frontmatter.description}
                        site_url={i.node.frontmatter.site_url}
                        gitHub_url={i.node.frontmatter.gitHub_url}
                    />   
                    )}
                </div>
            </div>
            <Link id="all_pjs" className="button" to="/projects">See All Projects</Link>
        </div>
        </>
    )
}
    
export default MainContentIndex;
