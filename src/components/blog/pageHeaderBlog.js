import React from 'react';

const PageHeaderBlog = ({title, image}) =>
    <header className={`masthead ${image}`}>
        <div className="overlay"></div>
        <div className="container">
            <div className="row"> 
                <div className="col-lg-8 col-md-10 mx-auto">
                    <div className="post-heading">
                        <h1>{title}</h1>
                    </div>
                </div>
            </div>
        </div>
    </header>

export default PageHeaderBlog;