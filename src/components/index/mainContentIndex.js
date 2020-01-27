import React from 'react';
import ProjectList from '../projectList'
import { graphql, useStaticQuery } from 'gatsby';
import {Link} from 'gatsby';

const MainContentIndex = () => {
    const bestProjects = ["project_24", "project_25", "project_11", "project_10", "project_6", "project_1"];
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
    const orderedData = bestProjects.map(image => {
        return filteredData.filter(d => d.node.frontmatter.image === image)[0];
    })
    return (
        <>
        <div className="container">
            <div className="row" id="my_projects">
                <h1 id="projects_title">My Projects</h1>
                <div id="container">
                    {orderedData.map(i => 
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
        <div className="container">
            <div className="row" id="my_projects">
                <h1 id="projects_title">Work in progress</h1>
                <div id="container">
                    <ProjectList
                        tags="React"
                        image="project_26"
                        title="Minessweeper"
                        description="Description"
                        site_url="null"
                        gitHub_url="https://github.com/m-onofri/minesweeper"
                    />
                    <ProjectList
                        tags="Symfony"
                        image="project_27"
                        title="Simple Todo App with Symfony"
                        description="Description"
                        site_url="null"
                        gitHub_url="https://github.com/m-onofri/todo-app-symfony"
                    />
                </div>  
            </div>
        </div>
        </>
    )
}
    
export default MainContentIndex;
