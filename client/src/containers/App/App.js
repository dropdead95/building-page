import React from "react";
import { Route, Routes } from "react-router-dom";

import { Layout, Main, Meeting } from "../../pages";
import { Gratitude, Quiz, QuizBuilding } from "../../components";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Main />} />
        <Route path={"quiz"} element={<QuizBuilding />}>
          <Route path=":id" element={<Quiz />} />
        </Route>
        <Route path="gratitude" element={<Gratitude />} />
        <Route path="meeting" element={<Meeting />} />
      </Route>
    </Routes>
  );
};
