import React from 'react';
import {Link} from 'gatsby';
import blogImage from '../../dist/img/post-bg.jpg'

const PageHeaderBlog = ({title, subtitle, date, author}) =>
    <header className="masthead" style={{backgroundImage: `url(${blogImage})`}}>
        <div className="overlay"></div>
        <div className="container">
            <div className="row">
                <div className="col-lg-8 col-md-10 mx-auto">
                    <div className="post-heading">
                        <h1>{title}</h1>
                        {/* <h2 className="subheading">{subtitle}</h2>
                        <span className="meta">Posted by <Link to="/about">{author}</Link> on {date}</span> */}
                    </div>
                </div>
            </div>
        </div>
    </header>

export default PageHeaderBlog;