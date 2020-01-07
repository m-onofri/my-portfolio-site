import React from 'react';
import {Link} from 'gatsby';
import homeBg from '../../dist/img/home-bg.jpg'

const IndexHeader = () =>
    <header className="masthead" style={{backgroundImage: `url(${homeBg})`}}>
        <div className="overlay"></div>
        <div className="container">
            <div className="row">
                <div className="col-lg-8 col-md-10 mx-auto">
                    <div className="site-heading">
                        <h1>Hi I'm Manuele</h1>
                        <span className="subheading">I'm a junior developer and programmer based in Rimini, Italy.</span>
                        <span className="subheading">I've built web applications using PHP, Node.js and React and have good foundation in web design and development.</span>
                        <Link id="all_pjs" className="button" to="/about">More About Me</Link>
                    </div>
                </div>
            </div>
        </div>
    </header>

export default IndexHeader;