import React from 'react'
import contactImage from '../../dist/img/contact-bg.jpg'

const ContactHeader = () =>
    <header class="masthead" style={{backgroundImage: `url(${contactImage})`}}>
        <div class="overlay"></div>
        <div class="container">
            <div class="row">
                <div class="col-lg-8 col-md-10 mx-auto">
                    <div class="page-heading">
                        <h1>Contact Me</h1>
                        <span class="subheading">Have questions? I have answers.</span>
                    </div>
                </div>
            </div>
        </div>
    </header>

export default ContactHeader