import React from 'react'
import styles from './Chapter.module.css'
import { FaRegCheckSquare } from "react-icons/fa";


const Chapter = () => {
    return (
        <section className={styles.chapter_section}>

            <div className={styles.text_div}>
                <h1 className={styles.title_h1}>
                    <span>Mentalidade</span>
                    <span>de um campeão</span>
                </h1>
                <h3>
                    desbloqueando o mindset de um atleta
                </h3>
            </div>

            <ul className={styles.list_ul}>
                <li>
                    <FaRegCheckSquare
                        color="green"
                        size={25} />
                    <p>aprenda com seus ídolos</p>
                </li>
                <li>
                    <FaRegCheckSquare
                        color="green"
                        size={25} />
                    <p>molde o seu caráter</p>
                </li>
                <li>
                    <FaRegCheckSquare
                        color="green"
                        size={25} />
                    <p>ganhe disciplina</p>
                </li>
            </ul>

        </section>
    )
}

export default Chapter
