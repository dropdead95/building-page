import React from "react";

import Instagram from "../../assets/instagram.png";
import Facebook from "../../assets/facebook.png";

import styles from "./Header.module.scss";
import {Burger, Logo, Mail, Phone, WhatsUp} from "../../icons";
import {Container, MenuButton} from "../../components";
import {Telegram} from "../../icons";
import {menu} from "../../mockData/menu";
import {NavLink} from "react-router-dom";

export const Header = () => {
    return (
        <header className={styles.header}>
            <Container className={styles.container}>
                <div className={styles.info}>
                    <NavLink

                        to='/'>
                    <Logo className={styles.logo}/>
                    </NavLink>
                    <div className={styles.phoneWrapper}>
                        <div className={styles.phone}>
                            <Phone className={styles.phoneIcon}/>
                            <a className={styles.number} href="tel:+34 624 36 23 26">
                                +34 624 36 23 26
                            </a>
                        </div>
                        <p className={styles.text}>Звоните, мы онлайн</p>
                    </div>
                    <div className={styles.socialWrapper}>
                        <div className={styles.socials}>
                            <WhatsUp/>
                            <Telegram/>
                            <img src={Instagram} alt="Instagram"/>
                            <img src={Facebook} alt="Facebook"/>
                            <Mail/>
                        </div>
                        <p className={styles.textSocials}>Пишите, мы онлайн</p>
                    </div>
                    <button type="button" className={styles.btn}>
                        Записаться на экскурсию
                    </button>
                    <Burger/>
                </div>
                <nav className={styles.nav}>
                    {menu.map((item) => (
                        <NavLink
                            key={item.id}
                            to={item.link}>
                            <MenuButton
                                title={item.title}
                                className={styles.menuItem}
                            />
                        </NavLink>
                    ))}
                    {/*  sdfsdf*/}
                </nav>
            </Container>
        </header>
    );
};
