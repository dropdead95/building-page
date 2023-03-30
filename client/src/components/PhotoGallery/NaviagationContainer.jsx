import React from "react";
import styles from "./photo.module.scss";
import {MenuButton} from "../MenuButton";
import {ContactFormPhoto} from "./ContactFormPhoto";


export const NavigationContainer = () => {
    return <div className={styles.NavigationWrapper}>
        <MenuButton title={"Фото ремонтов"}
                    className={styles.PhotoNavigationButton}/>
        <MenuButton title={"Фото ремонтов"}
                    className={styles.PhotoNavigationButton}/>
        <ContactFormPhoto/>
    </div>
}