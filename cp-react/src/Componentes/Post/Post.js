import React from 'react'
import Logo from '../../img/logo.svg'
import './Post.css'

export default function Post() {

    return (
        <div class="post-content">
            <div class="riddle">
                <img src={Logo} class="custom-logo" />
            </div>
            <div>
                <p class="p-riddle">
                    Por ser uma doença nova, a <p class="link">Covid-19</p> ainda não foi compreendida totalmente pela comunidade médica global. Os conhecimentos sobre a doença estão em constante atualização, incluindo os sintomas e os impactos para a saúde a curto e longo prazos.
                </p>
                <p class="p-riddle">A <p class="link">variante Delta da Covid-19,</p> originalmente conhecida como B.1.617.2, existe desde o final do ano passado, mas nos últimos meses tornou-se rapidamente dominante em muitos países. Ainda não está claro o quanto essa cepa é mais transmissível. Estimativas variam entre 60% e 200% mais transmissível, dependendo de quem apresenta a estimativa.
                </p>
            </div>
        </div>
    )
}