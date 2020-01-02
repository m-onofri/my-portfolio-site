import React from 'react';
import homeBg from '../../dist/img/home-bg.jpg'

const IndexHeader = () =>
    <header className="masthead" style={{backgroundImage: `url(${homeBg})`}}>
        <div className="overlay"></div>
        <div className="container">
            <div className="row">
                <div className="col-lg-8 col-md-10 mx-auto">
                    <div className="site-heading">
                        <h1>Hi I'm Manuele</h1>
                        <span className="subheading">I like programming in javaScript and PHP</span>
                        <span className="subheading">Give a look at my portfolio</span>
                    </div>
                </div>
            </div>
        </div>
    </header>

export default IndexHeader;