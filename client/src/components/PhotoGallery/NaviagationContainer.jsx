import React from "react";
import styles from "./photo.module.scss";
import { MenuButton } from "../MenuButton";
import { ContactFormPhoto } from "./ContactFormPhoto";

export const NavigationContainer = ({ data, folder, setFolder, search , setSearch}) => {
    const changeSearch = (e) => {
        setSearch(e.currentTarget.value)
    }

  return (
    <div className={styles.NavigationWrapper}>
        <form action="">

            <input className={styles.searchInput} type="text" id="search" name="search" onChange={e => changeSearch(e)} placeholder="search" value={search}/>
        </form>
      {data?.map((t, index) => {
        return (
          <div key={index} onClick={() => setFolder(index)}>
            <MenuButton
              title={t.attributes.folder}
              className={
                folder === index
                  ? `${styles.PhotoNavigationButton} ${styles.active}`
                  : styles.PhotoNavigationButton
              }
            />
          </div>
        );
      })}
      <ContactFormPhoto />
    </div>
  );
};
