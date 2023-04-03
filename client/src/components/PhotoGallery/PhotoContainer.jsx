import React, {useEffect, useState} from "react";
import {Container} from "../Container";
import styles from "./photo.module.scss";
import {NavigationContainer} from "./NaviagationContainer";
import {PhotoList} from "./PhotoList";
import {fetchPhotoGallery} from "../../bll/photoReducer";
import {useDispatch, useSelector} from "react-redux";


export const PhotoContainer = () => {
    const [folder, setFolder] = useState(0)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchPhotoGallery())
    }, [])

    let data = useSelector(state => state.photo.photo)
    console.log(data)
    return <section className={styles.photogallery}>
        {data && <Container>
            <h2 className={styles.title}>Фотогалерея</h2>
            <div className={styles.wrapper}>
                <NavigationContainer data={data} folder={folder} setFolder={setFolder}/>
                <PhotoList key={folder} folder={data[folder].attributes.photo}/>
            </div>
        </Container>}
    </section>
}