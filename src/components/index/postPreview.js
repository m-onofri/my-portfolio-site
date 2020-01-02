import React from 'react'
import {Link} from 'gatsby'

const PostPreview = ({title, subtitle, date, author, slug}) =>
    <>
        <div className="post-preview">
            <Link to={`/blog/${slug}`}>
                <h2 className="post-title">
                {title}
                </h2>
                <h3 className="post-subtitle">
                {subtitle}
                </h3>
            </Link>
            <p className="post-meta">Posted by <Link to="/about">{author}</Link> on {date}</p>
        </div>
        <hr />
    </>
        

export default PostPreview;