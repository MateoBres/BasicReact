import React from 'react'
import {connect} from 'react-redux'
import {NavLink} from 'react-router-dom'

const Header = ({links}) =>
    <header>
        <h1>React SPA</h1>
        <nav>
            {links.map( (link,i)=> 
                <NavLink key={i} to={`/${link}`}>{link}</NavLink>
            )}
        </nav>
    </header>

export default connect(({App})=>({links: App.links}))(Header)