import React from 'react'

const PostContent = ({html}) =>
    <article>
        <div className="container">
            <div className="row">
                <div 
                    className="col-lg-8 col-md-10 mx-auto"
                    dangerouslySetInnerHTML={{__html: html}}
                ></div>
            </div>
        </div>
    </article>

export default PostContent;