import React from "react";
import {Route, Routes} from "react-router-dom";

import {Layout, Main} from "../../pages";
import {Gratitude, Quiz, QuizBuilding} from "../../components";
import {PhotoContainer} from "../../components/PhotoGallery/PhotoContainer";

export const App = () => {

    return (
        <Routes>
            <Route path="/" element={<Layout/>}>
                <Route index element={<Main/>}/>
                <Route path={"quiz"} element={<QuizBuilding/>}>
                    <Route path=":id" element={<Quiz />}/>
                    <Route path=":id/gratitude" element={<Gratitude/>}/>

                </Route>
                <Route path="gallery" element={<PhotoContainer />}/>



            </Route>
        </Routes>
    );
};
