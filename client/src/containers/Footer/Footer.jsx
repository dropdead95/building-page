import React from "react";

import styles from "./Footer.module.scss";
import Instagram from "../../assets/instagram.png";
import Facebook from "../../assets/facebook.png";
import Youtube from "../../assets/youtube.png";
import {footerMenu} from "../../mockData/footerMenu";

import {
    Container,
    MenuButton,
    MenuFooterItem,
    ReviewsSlider,
} from "../../components";
import {Arrow, ArrowRight, LogoVariant, WhatsUp, Telegram} from "../../icons";

export const Footer = () => {
    return (
        <footer className={styles.footer}>
            <Container className={styles.container}>
                <div className={styles.left}>
                    <div className={styles.reviews}>
                        <p className={styles.title}>Видеоотзывы от партнёров</p>
                        <ReviewsSlider/>
                    </div>
                    <div className={styles.logoBlock}>
                        <LogoVariant/>
                        <p className={styles.text}>
                            <span>Alfa Digital Agency</span> – разработка высоко конверсионных
                            сайтов
                        </p>
                    </div>
                </div>

                <nav className={styles.nav}>
                    {footerMenu.map((item) => (
                        <MenuFooterItem
                            key={item.title}
                            title={item.title}
                            Icon={item.Icon}
                            className={styles.menuItem}
                        />
                    ))}
                </nav>
                <div className={styles.info}>
                    <div className={styles.textWrapper}>
                        <p className={styles.textInfo}>Смотреть все документы</p>
                        <ArrowRight/>
                    </div>
                    <MenuButton
                        className={styles.buttonFirst}
                        title="Политика конфиденциальности"
                    >
                        <Arrow className={styles.arrow}/>
                    </MenuButton>
                    <MenuButton className={styles.buttonSecond} title="Русский">
                        <Arrow className={styles.arrow}/>
                    </MenuButton>
                    <div className={styles.contacts}>
                        <WhatsUp/>
                        <Telegram/>
                        <img src={Instagram} alt="Instagram"/>
                        <img src={Youtube} alt="Youtube"/>
                        <img src={Facebook} alt="Facebook"/>
                    </div>
                    <div className={styles.logoMobile}>
                        <LogoVariant/>
                        <p className={styles.text}>
                            <span>Alfa Digital Agency</span> – разработка высоко конверсионных
                            сайтов
                        </p>
                    </div>
                </div>
            </Container>
        </footer>
    );
};
