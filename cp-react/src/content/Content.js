import React from 'react'
import Autor from '../img/autor.png'



export default function Content() {

    return(
        <div class="site-content">
            <main class="posts">
                <header class="post-header">
                    <h1 class="post-title">Quais são os sintomas da variante Delta da Covid-19? Teste seus conhecimentos</h1>
                    <div>
                        <p>A infecção causada pela variante Delta pode provoar sintomar diferentes da doençã causada pela linhagem original do novo coronavírus.</p>
                    </div>
                    <div>
                        <section class="author-content">
                            <img src={Autor}></img>
                            <figure></figure>
                        </section>
                    </div>
                </header>
            </main>
        </div>
    )
}