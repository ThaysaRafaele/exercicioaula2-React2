import React, {useState} from 'react';
import { Button } from "../Button";
import styles from "./styles.module.css"
import { Title } from '../Title';

export function Container() {
    const [isSuccess, setSuccess] = useState(true);

    return(
        <div className={styles.container}>
            <Title/>
            <Button />         
            <p onClick={() => {setSuccess(!isSuccess)}} className={`${isSuccess ? styles.success : styles.neutral}`}>Olá!</p>
        </div>
    );
}