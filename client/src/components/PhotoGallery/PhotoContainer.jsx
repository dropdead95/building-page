import React, {useEffect, useState} from "react";
import {Container} from "../Container";
import styles from "./photo.module.scss";
import {NavigationContainer} from "./NaviagationContainer";
import {PhotoList} from "./PhotoList";
import {fetchPhotoGallery} from "../../bll/photoReducer";
import {useDispatch, useSelector} from "react-redux";

export const PhotoContainer = () => {
    const [folder, setFolder] = useState(0);
    const [search, setSearch] = useState('')
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchPhotoGallery());
    }, []);
    let Arr = []
    let data = useSelector((state) => state.photo.photo);
    data?.map(t => (t.attributes.photo.filter(item => item.title?.toLowerCase().includes(search) ? Arr.push(item) : '')))
    console.log(search);
    let dataTransfer
    if (search.length > 1) {
        dataTransfer = Arr
    } else if (data) {
        dataTransfer = data[folder]?.attributes?.photo
    }

    console.log(Arr.length < 1)
    return (
        <section className={styles.photogallery}>

            <Container>
                <h2 className={styles.title}>Фотогалерея</h2>
                <div className={styles.wrapper}>
                    <NavigationContainer
                        setSearch={setSearch}
                        search={search}
                        data={data}
                        folder={folder}
                        setFolder={setFolder}
                    />
                    {Arr.length > 0 && (<PhotoList key={dataTransfer[0]?.id} folder={dataTransfer}/>)}
                </div>
            </Container>

        </section>
    );
};
