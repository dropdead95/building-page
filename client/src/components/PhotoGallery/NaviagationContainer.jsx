import React from "react";
import styles from "./photo.module.scss";
import {MenuButton} from "../MenuButton";
import {ContactFormPhoto} from "./ContactFormPhoto";


export const NavigationContainer = ({data, setFolder}) => {
    return <div className={styles.NavigationWrapper}>
        {data?.map((t, index) => {
            return <div key={index} onClick={() => setFolder(index)}><MenuButton title={t.attributes.folder}
                                                                                 className={styles.PhotoNavigationButton}/>
            </div>
        })}
        <ContactFormPhoto/>
    </div>
}