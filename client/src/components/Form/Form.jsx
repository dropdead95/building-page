import React from "react";

import styles from "./Form.module.scss";
import axios from "axios";

export const Form = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    console.log(JSON.stringify(formData));

    axios.post(
      process.env.REACT_APP_API_URL + "/responses",
      {
        data: {
          name: formData.get("name"),
          phone: formData.get("phone"),
          messenger: formData.get("messenger"),
        },
      },
      {
        headers: {
          Authorization: `bearer ${process.env.REACT_APP_API_TOKEN}`,
          "Content-Type": "application/json",
        },
      }
    );
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <input name="name" type="text" />
      <input name="phone" type="text" />
      <select name="messenger">
        <option>Telegram</option>
        <option>Whats-up</option>
        <option>Viber</option>
      </select>
      <button type="submit">Оставить заявку</button>
      <p>Ваши данные не будут переданы третьим лицам</p>
    </form>
  );
};
