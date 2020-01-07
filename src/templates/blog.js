import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import PageHeaderBlog from '../components/blog/pageHeaderBlog';
import PostContent from '../components/blog/postContent';

export const query = graphql`
    query($slug: String!) {
        markdownRemark(fields: {slug: {eq: $slug}}) {
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
`

const BlogPage = ({data}) => 
    <Layout>
        <PageHeaderBlog 
            tag={data.markdownRemark.frontmatter.tag}
            image={data.markdownRemark.frontmatter.image}
            title={data.markdownRemark.frontmatter.title}
            description={data.markdownRemark.frontmatter.description}
            slug={data.markdownRemark.frontmatter.slug}
            site_url={data.markdownRemark.frontmatter.site_url}
            gitHub_url={data.markdownRemark.frontmatter.gitHub_url}
        />
        <PostContent 
            html={data.markdownRemark.html}
        />
        <hr></hr>
    </Layout>

export default BlogPage;