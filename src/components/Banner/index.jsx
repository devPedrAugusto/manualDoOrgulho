import React from 'react'
import srManual from '/imgs/srManual.png'
import styles from './Banner.module.css'

const Banner = () => {
    return (
        <header>

            <div className={styles.title_div}>
                <h1>
                    Os segredos dos maiores campeões e líderes da
                    história estão a um passo de mudar a sua vida
                </h1>
                <h3>
                    você está pronto pra conquistar o que poucos ousaram???
                </h3>
            </div>

            <img className={styles.srManual_img} src={srManual} alt="" />
        </header>
    )
}

export default Banner
