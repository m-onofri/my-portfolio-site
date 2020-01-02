import React, { useState } from 'react';
import ProjectList from '../projectList'
import { graphql, useStaticQuery } from 'gatsby';

const ProjectsContent = () => {
    const options = ["All Projects", "PHP", "HTML & CSS", "React", "Slim", "D3", "jQuery"];
    const [tag, setTag] = useState(
        'All Projects'
    );
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
        (d.node.frontmatter.tags === tag) || (tag === "All Projects")
    );

    return (
        <div className="container">
            <div className="row">
                <select 
                    id="lang" 
                    onChange={event => setTag(event.target.value)} 
                    value={tag}>
                        {options.map(option => 
                            <option value={option}>{option}</option>
                        )}
                </select>
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
        </div>
    )
}


export default ProjectsContent