import React from 'react'
import Autor from '../../img/author.png'
import './Content.css'


export default function Content() {

    return (
        <div id="row">
            <div class="site-content">
                <main class="posts">
                    <header class="post-header">
                        <h1 class="post-title">Quais são os sintomas da variante Delta da Covid-19? Teste seus conhecimentos</h1>
                        <div>
                            <p class="post-exerpt">A infecção causada pela variante Delta pode provoar sintomar diferentes da doençã causada pela linhagem original do novo coronavírus.</p>
                        </div>
                        <div>
                            <section class="author-content">
                                <figure>
                                    <img src={Autor} class="author-img" />
                                </figure>
                                <div id="higher-share">
                                    <span class="post-data">24/08/2021 às 16h76 | Atualizado por Alechandre às 16h66</span>
                                </div>
                            </section>
                        </div>
                    </header>
                </main>
            </div>
        </div>
    )
}