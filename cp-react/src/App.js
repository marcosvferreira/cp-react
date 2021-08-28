import React from 'react'
import Header from './Componentes/Header/Header'
import Content from './Componentes/Content/Content'
import Post from './Componentes/Post/Post'
import './App.css'


export default function App() {

    const listaMenu = ["Business","Internacional","Saúde","Tecnologia","Esporte",
    "Entretenimento","Estilo","Viagem e Gastronomia","Newsletters","Podcasts"]


    return (
        <div class="container">
            <Header menu={listaMenu} />
            <Content />
            <Post />
        </div>

    )
}


//Feito por:
//João Batista Souza (rm88298) e Marcos Vinicius Ferreira (rm86904)
//
//"Sozinho a gente vai mais rápido, mas juntos a gente vai mais longe"

