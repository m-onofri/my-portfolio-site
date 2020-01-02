import React from 'react';
// import { graphql } from 'gatsby';
import Layout from '../components/layout';
import PageHeaderBlog from '../components/blog/pageHeaderBlog';
import PostContent from '../components/blog/postContent';

// export const query = graphql`
//     query($slug: String!) {
//         markdownRemark(fields: {slug: {eq: $slug}}) {
//             frontmatter {
//                 title
//                 subtitle
//                 date
//                 author
//             }
//             html
//         }
//     }
// `

const BlogPage = ({data}) => 
    <Layout>
        <PageHeaderBlog 
            title={data.markdownRemark.frontmatter.title}
            subtitle={data.markdownRemark.frontmatter.subtitle}
            date={data.markdownRemark.frontmatter.date}
            author={data.markdownRemark.frontmatter.author}
        />
        <PostContent 
            html={data.markdownRemark.html}
        />
        <hr></hr>
    </Layout>

export default BlogPage;