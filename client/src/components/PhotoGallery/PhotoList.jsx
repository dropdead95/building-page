import React from "react";
import styles from "./photo.module.scss";
import {PhotoItem} from "./PhotoItem";

export const PhotoList = () => {
    return <div className={styles.photoListsWrapper}><PhotoItem/></div>
}