import React, {useState} from "react";
import styles from "./photo.module.scss";
import {PhotoItem} from "./PhotoItem";
import "yet-another-react-lightbox/styles.css";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";


export const PhotoList = ({folder}) => {
    const [open, setOpen] = useState(false)
    const [indexSlides, setIndexSlides] = useState(0)
    const openLightBox = (index) => {
        setOpen(true)
        setIndexSlides(index)

    }
    const thumbnailsRef = React.useRef(null);
    console.log(indexSlides)
    let src = 'src'
    let slides = []
    folder[indexSlides].images.data.map(t => slides.push({[src]: `${process.env.REACT_APP_UPLOAD_URL}${t.attributes.url}`}))


    return <div className={styles.photoListsWrapper}> {folder.map((t, index) => <div key={index}
                                                                                     onClick={() => openLightBox(index)}>
        <PhotoItem
            dataItem={t}/></div>)}


        <Lightbox
            open={open}
            close={() => setOpen(false)}
            slides={slides}
            plugins={[Thumbnails]}
            thumbnails={{ref: thumbnailsRef}}
            on={{
                click: () => {
                    (thumbnailsRef.current?.visible
                        ? thumbnailsRef.current?.hide
                        : thumbnailsRef.current?.show)?.();
                },
            }}
        />
    </div>
}

