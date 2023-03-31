import React from "react";
import styles from "./photo.module.scss";

export const PhotoItem = ({dataItem}) => {
    return <div className={styles.photoItem}><img className={styles.mainPhoto}
        src={`${process.env.REACT_APP_UPLOAD_URL}${dataItem.mainPhoto.data?.attributes?.url}`} alt="photo"/>
        <span>{dataItem.title}</span>
    </div>
}