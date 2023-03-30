import React, {useEffect} from "react";
import {Container} from "../Container";
import styles from "./photo.module.scss";
import {NavigationContainer} from "./NaviagationContainer";
import {PhotoList} from "./PhotoList";
import {fetchPhotoGallery} from "../../bll/photoReducer";
import {useDispatch} from "react-redux";


export const PhotoContainer = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchPhotoGallery())
    })
    return <section className={styles.photogallery}>
        <Container>
            <h2 className={styles.title}>Фотогалерея</h2>
            <div className={styles.wrapper}>
                <NavigationContainer/>
                <PhotoList/>
            </div>
        </Container>
    </section>
}