import React from 'react'

const AboutContent = () =>
    <div id="aboutMe" className="container">
        <div className="row">
            <div className="col-lg-8 col-md-10 mx-auto">
                <p>My name is Manuele Onofri and this is my personal portfolio page.</p>
                <p>I have a strong interest in coding and web development, and in particular I am focusing on HTML, CSS3, javaScript and PHP.</p>
                <p>Here you can find the list of all my projects and code challenges.</p>

                <h3>Attended Courses</h3>
                <ul>
                    <li>Treehouse PHP Techdegree (2019)</li>
                    <li>
                        FreeCodeCamp Course (2017 - in progress)
                        <ul>
                            <li>Responsive Web Design Certification</li>
                            <li>JavaScript Algorithms and Data Structures Certification</li>
                            <li>Front End Libraries Certification</li>
                            <li>Data Visualization Certification</li>
                        </ul>
                    </li>
                    <li>Corso online di programmazione PHP per progammatori - PC Academy srl (2015)</li>
                    <li>MySQL - Gestione del database open-source - MRW Corsi (2014)</li>
                    <li>Creazione di siti web dimanici avanzati con PHP e MySQL - MRW Corsi (2014)</li>
                </ul>

                <h3>Tools</h3>
                <ul>
                    <li>HTML, CSS3, JavaScript</li>
                    <li>Libraries: React.js, jQuery, D3.js</li>
                    <li>Frameworks: Symfony 4, Slim 3, Gatsby</li>
                    <li>Databases: MySQL, SQLite, MongoDB</li>
                    <li>ORM: Doctrine, Mongoose</li>
                </ul>
            </div>
        </div>
    </div>

export default AboutContent