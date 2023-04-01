import React, {useState} from "react";
import styles from "./photo.module.scss";
import {PhotoItem} from "./PhotoItem";

export const PhotoList = ({folder}) => {
    const [toggler, setToggler] = useState(false);
    console.log(folder)
    return <div className={styles.photoListsWrapper}> {folder.map((t, index) => <div key={index}><PhotoItem
        dataItem={t}/></div>)}
        <button onClick={() => setToggler(!toggler)}>
            Toggle Lightbox
        </button>
        {/*<FsLightbox
            toggler={toggler}
            sources={[
                'https://i.imgur.com/fsyrScY.jpg',
                'https://www.youtube.com/watch?v=3nQNiWdeH2Q',
                'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'
            ]}
        />*/}</div>
}

