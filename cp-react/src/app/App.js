import React from 'react'
import Header from '../header/Header'
import Content from '../content/Content'
import Post from '../post/Post'
import './App.css'


export default function App() {

    return(
        <div class="container">
            <Header/>
            <div id="row"></div>
            <Content/>
            <div id="higher-share">
                <span>24/08/2021 às 16h76 | Atualizado por Alechandre às 16h66</span>
            </div>
            <Post/>
        </div>

    )
    
}
// Sozinho a gente vai mais rápido, mas juntos a gente vai mais longe

