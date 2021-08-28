import React from 'react'
import './Header.css'

export default function Header(props) {

    const categorias = props.menu.map(
        (c,i)=>
        <li key={i}>{c}</li>
    )

    return(
        <header class="header-group">
            <div class="header-main">
                <nav class="content-menu">
                    <ul class="menu">
                        <li id="national-button">Nacional</li>
                        <li>{categorias}</li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}