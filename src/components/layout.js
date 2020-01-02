import React from 'react'
import Navigation from './navigation'
import Footer from './footer'
import './layout.css'

const Layout = ({children}) =>
    <div>
        <Navigation />
            {children}
        <Footer />
    </div>

export default Layout