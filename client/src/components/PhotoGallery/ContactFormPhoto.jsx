import React from "react";
import {Basic} from "../Form";
import styles from "./photo.module.scss";


export const ContactFormPhoto = () => {
    return <div className={styles.ContactFormPhoto}>
        <div className={styles.titleForm}>Хотите получить подарок и <span>бесплатную</span> консультацию прораба?</div>
        <div className={styles.subTitleForm}><span>Оставьте заявку</span> и получите бесплатную разводку электричества в подарок! </div>
        <Basic/></div>
}