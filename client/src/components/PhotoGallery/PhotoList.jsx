import React, {useState} from "react";
import styles from "./photo.module.scss";
import {PhotoItem} from "./PhotoItem";
import "yet-another-react-lightbox/styles.css";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import {usePagination, Pagination} from "pagination-react-js"
import './pagination.css'

export const PhotoList = ({folder}) => {
    const [open, setOpen] = useState(false)
    const [indexSlides, setIndexSlides] = useState(0)
    const openLightBox = (index) => {
        setOpen(true)
        setIndexSlides(index)

    }
    const thumbnailsRef = React.useRef(null);
    const {currentPage, entriesPerPage, entries} = usePagination(1, 6);
    let src = 'src'
    let slides = []
    folder[indexSlides].images.data.map(t => slides.push({[src]: `${process.env.REACT_APP_UPLOAD_URL}${t.attributes.url}`}))


    return <div className={styles.photoListsWrapper}>
        <div className={styles.photoList}>
            {folder.slice(entries.indexOfFirst, entries.indexOfLast).map((t, index) => <div key={index}
                                                                                            onClick={() => openLightBox(index)}>
                <PhotoItem
                    dataItem={t}/>

            </div>)}
        </div>

        <Pagination
            entriesPerPage={entriesPerPage.get}
            totalEntries={folder.length}
            currentPage={{get: currentPage.get, set: currentPage.set}}
            offset={3}
            classNames={{
                wrapper: "pagination m-auto",
                item: "pagination-item",
                itemActive: "pagination-item-active",
                navPrev: "pagination-item nav-item",
                navNext: "pagination-item nav-item",
                navStart: "pagination-item nav-item",
                navEnd: "pagination-item nav-item",
                navPrevCustom: "pagination-item",
                navNextCustom: "pagination-item"
            }}
            showFirstNumberAlways={true}
            showLastNumberAlways={true}

            navPrev="&#x2039;" // Here you can pass anything (Text, HTML Tag, React Component, ...)
            navNext="&#x203a;" // Here you can pass anything (Text, HTML Tag, React Component, ...)
            navPrevCustom={{
                steps: 5,
                content: "\u00B7\u00B7\u00B7" /* Here you can pass anything (Text, HTML Tag, React Component, ...) */
            }}
            navNextCustom={{
                steps: 5,
                content: "\u00B7\u00B7\u00B7" /* Here you can pass anything (Text, HTML Tag, React Component, ...) */
            }}
        />

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

