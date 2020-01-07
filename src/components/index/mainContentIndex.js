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
                        fields {
                            slug
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
        <div className="container">
            <div className="row" id="my_projects">
                <h1 id="projects_title">My Projects</h1>
                <p>This is a personal site I put together mainly to keep track of what I learned and what I produced so far.</p>
                <div id="container">
                    {filteredData.map(i => 
                    <ProjectList
                        tags={i.node.frontmatter.tags}
                        image={i.node.frontmatter.image}
                        title={i.node.frontmatter.title}
                        description={i.node.frontmatter.description}
                        site_url={i.node.frontmatter.site_url}
                        gitHub_url={i.node.frontmatter.gitHub_url}
                        slug={i.node.fields.slug}
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
