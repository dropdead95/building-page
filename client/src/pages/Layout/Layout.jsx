import React from "react";
import { Outlet } from "react-router-dom";

import styles from "./Layout.module.scss";

import { Sprite } from "../../components";
import { Footer, Header } from "../../containers";

export const Layout = () => {
  return (
    <div className={styles.wrapper}>
      <Sprite />
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};
