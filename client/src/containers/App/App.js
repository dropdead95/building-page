import React from "react";
import { Routes, Route } from "react-router-dom";

import { Layout, Main } from "../../pages";
import { Gratitude, QuizBuilding, Quiz } from "../../components";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Main />} />
        <Route path="quiz" element={<QuizBuilding />}>
          <Route index element={<Quiz />}></Route>
          <Route path="gratitude" element={<Gratitude />} />
        </Route>
      </Route>
    </Routes>
  );
};
