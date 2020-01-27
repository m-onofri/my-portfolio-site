import React from 'react';

const Footer = () =>
    <footer>
        <div className="container">
            <div className="row">
                <div className="col-lg-8 col-md-10 mx-auto">
                    <ul className="list-inline text-center">
                        <li className="list-inline-item">
                            <a href="https://twitter.com/ManueleOnofri">
                            <span className="fa-stack fa-lg">
                            <i className="fas fa-circle fa-stack-2x"></i>
                            <i className="fab fa-twitter fa-stack-1x fa-inverse"></i>
                            </span>
                            </a>
                        </li>
                        <li className="list-inline-item">
                            <a href="https://www.linkedin.com/in/manuele-onofri-31068738/">
                            <span className="fa-stack fa-lg">
                            <i className="fas fa-circle fa-stack-2x"></i>
                            <i className="fab fa-linkedin-in fa-stack-1x fa-inverse"></i>
                            </span>
                            </a>
                        </li>
                        <li className="list-inline-item">
                            <a href="https://github.com/m-onofri">
                            <span className="fa-stack fa-lg">
                            <i className="fas fa-circle fa-stack-2x"></i>
                            <i className="fab fa-github fa-stack-1x fa-inverse"></i>
                            </span>
                            </a>
                        </li>
                    </ul>
                    <p class="copyright">Manuele Onofri &copy; 2020 - crafted with Gatsby and deployed on Netlify</p>
                </div>
            </div>
        </div>
    </footer>

export default Footer;