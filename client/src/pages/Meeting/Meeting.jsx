import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMeetingData } from "../../bll/meetingReducer";

import styles from "./Meeting.module.scss";
import { Basic, Container, Quiz, MenuButton } from "../../components";
import { ArrowVariant, CheckMark } from "../../icons";
import classNames from "classnames";

export const Meeting = () => {
  const dispatch = useDispatch();
  const data = useSelector(
    (state) => state.meetingData?.meetingData?.attributes?.main
  );

  useEffect(() => {
    dispatch(fetchMeetingData());
  }, [dispatch]);

  console.log(data);

  return (
    <section className={styles.meeting}>
      {data && (
        <Container className={styles.meetingContainer}>
          <div className={styles.wrapper}>
            <div className={styles.textContent}>
              <h1 className={styles.title}>{data?.title}</h1>
              <h3 className={styles.subtitle}>{data?.subtitle}</h3>
              <p className={styles.titleForm}>
                Оставьте заявку на БЕСПЛАТНУЮ встречу с прорабом!
              </p>
              <Basic />
            </div>
            <video
              className={styles.video}
              width="660px"
              controls={true}
              src={`${process.env.REACT_APP_UPLOAD_URL}${data?.video?.data?.attributes?.url}`}
            ></video>
          </div>

          <div className={styles.gifts}>
            <div className={styles.textBlock}>
              <p className={styles.firstText}>{data.firstText}</p>
              <p className={styles.secondText}>{data.secondText}</p>
              <p className={styles.secondText}>{data.thirdText}</p>
            </div>
            <div className={styles.giftsBlock}>
              {data?.block?.map((item) => (
                <div className={styles.gift} key={item.id}>
                  <img
                    src={`${process.env.REACT_APP_UPLOAD_URL}${item.image?.data?.attributes?.url}`}
                    alt=""
                  />
                  <p className={styles.desc}>{item.description}</p>
                </div>
              ))}
            </div>
          </div>
          <Quiz numberQuiz={1} />
          <div className={styles.wrapperExample}>
            <h3 className={styles.titleBlock}>{data.example[0].title}</h3>
            <div className={styles.mediaContent}>
              <img
                src={`${process.env.REACT_APP_UPLOAD_URL}${data.example[0].mediaContent.data[3].attributes.url}`}
                alt=""
              />
              <div className={styles.imageGroup}>
                <img
                  src={`${process.env.REACT_APP_UPLOAD_URL}${data.example[0].mediaContent.data[0].attributes.url}`}
                  alt=""
                />
                <img
                  src={`${process.env.REACT_APP_UPLOAD_URL}${data.example[0].mediaContent.data[1].attributes.url}`}
                  alt=""
                />
                <img
                  src={`${process.env.REACT_APP_UPLOAD_URL}${data.example[0].mediaContent.data[2].attributes.url}`}
                  alt=""
                />
              </div>
              <div className={styles.videoGroup}>
                <video
                  className={styles.video}
                  width="427px"
                  controls={true}
                  src={`${process.env.REACT_APP_UPLOAD_URL}${data.example[0].mediaContent.data[4].attributes.url}`}
                ></video>
                <video
                  className={styles.video}
                  width="427px"
                  controls={true}
                  src={`${process.env.REACT_APP_UPLOAD_URL}${data.example[0].mediaContent.data[4].attributes.url}`}
                ></video>
              </div>
            </div>
            <div className={styles.text}>
              <div className={styles.textWrapper}>
                <h3 className={styles.textTitle}>
                  {data.example[0].textContent.title}
                </h3>
                <div className={styles.descWrapper}>
                  {data.example[0].textContent.descriptions.map((desc) => (
                    <div className={styles.description} key={desc.id}>
                      <CheckMark className={styles.checkIcon} />
                      <p>{desc.description}</p>
                    </div>
                  ))}
                </div>
              </div>
              <img
                src={`${process.env.REACT_APP_UPLOAD_URL}${data.example[0].mediaContent.data[5].attributes.url}`}
                alt=""
              />
            </div>
            <div className={styles.actions}>
              <h3 className={classNames(styles.textTitle, styles.actionsTitle)}>
                {data.actions.title}
              </h3>
              <MenuButton
                classNameForBtn={styles.wrapperBtn}
                title="Записаться"
                className={styles.btn}
              />
              <ArrowVariant className={styles.arrow} />
            </div>
            <div className={styles.visual}>
              <h3 className={classNames(styles.titleBlock, styles.visualTitle)}>
                {data.visual.title}
              </h3>
              <p className={styles.visualSubtitle}>{data.visual.subtitle}</p>
              <div className={styles.visualMedia}>
                <Basic
                  lockText={true}
                  className={styles.visualForm}
                  titleForm="Заявка на заказ 3д визуализации. "
                />
                <video
                  className={styles.video}
                  width="660px"
                  height="370px"
                  controls={true}
                  src={`${process.env.REACT_APP_UPLOAD_URL}${data.visual.video.data.attributes.url}`}
                ></video>
                <div className={styles.visualImages}>
                  <img
                    src={`${process.env.REACT_APP_UPLOAD_URL}${data.visual.images.data[0].attributes.url}`}
                    alt=""
                  />
                  <img
                    src={`${process.env.REACT_APP_UPLOAD_URL}${data.visual.images.data[1].attributes.url}`}
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className={styles.contacts}>
              <p className={styles.contactsTitle}>{data.contacts.title}</p>
              <p className={styles.visualSubtitle}>{data.contacts.subtitle}</p>
              <Basic
                className={styles.contactsFormWrapper}
                classNameForm={styles.contactsForm}
                classNameInput={styles.contactsFormInput}
                classNameSelect={styles.contactsFormSelect}
                classNameForTextarea={styles.contactsFormTextarea}
                inputVariant={true}
                classNameForBtn={styles.contactsFormBtn}
                btnText="Записаться"
                lockText={true}
              />
            </div>
          </div>
        </Container>
      )}
    </section>
  );
};
