import React from "react";

import styles from "./Main.module.scss";
import Man from "../../assets/man.png";
import {info} from "../../mockData/info";

import {Container, ServiceSubtitle, ServiceTitle} from "../../components";
import {Arrow, Mail, Pen, WhatsUp} from "../../icons";

export const Main = () => {
  return (
    <main className={styles.main}>
      <Container className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title}>
            Все материалы о нашей компании и услугах которые мы оказываем
          </h1>
          <p className={styles.subtitle}>
            Здесь вы найдете ответы на самые распространенные вопросы,
            инструкции и кейсы наших клиентов
          </p>
          <div className={styles.application}>
            <p className={styles.desc}>
              <span>Хотите с нами связаться,</span> оставьте заявку и специалист
              свяжется с вами в течение 30 минут.
            </p>
            <input
              placeholder="Номер телефона"
              className={styles.input}
              type="text"
            />
            <button type="button" className={styles.btn}>
              <span className={styles.innerBtn}>
                Оставить заявку <Pen className={styles.pen} />
              </span>
            </button>
          </div>
          <p className={styles.additional}>
            Ваши данные не будут переданы третьим лицам
          </p>
        </div>
        <img className={styles.image} src={Man} alt="Man" />
        <div className={styles.info}>
          {info.map((item) => (
            <div key={item.title} className={styles.item}>
              <ServiceTitle className={styles.serviceTitle} title={item.title}>
                <Arrow className={styles.arrow} />
              </ServiceTitle>

              <ServiceSubtitle
                className={styles.serviceSubtitle}
                subtitle={item.subtitle_1}
              />
              <ServiceSubtitle
                className={styles.serviceSubtitle}
                subtitle={item.subtitle_2}
              />
              {item.subtitle_3 && (
                <ServiceSubtitle
                  className={styles.serviceSubtitle}
                  subtitle={item.subtitle_3}
                />
              )}
            </div>
          ))}
        </div>
        <div className={styles.navigate}>
          <Mail className={styles.mail} />
          <WhatsUp className={styles.whatsUp} />
          <Arrow />
        </div>
      </Container>
    </main>
  );
};
