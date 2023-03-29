import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMeetingData } from "../../bll/meetingReducer";

import styles from "./Meeting.module.scss";
import { Container } from "../../components";

export const Meeting = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.meetingData);

  useEffect(() => {
    dispatch(fetchMeetingData());
  }, [dispatch]);
  console.log(data.meetingData.attributes);

  return (
    <>
      {data && (
        <section className={styles.meeting}>
          <Container className={styles.meetingContainer}>
            <div className={styles.wrapper}>
              <div className={styles.textContent}>
                <h1 className={styles.title}>
                  {data.meetingData.attributes.main.title}
                </h1>
                <h3 className={styles.subtitle}>
                  {data.meetingData.attributes.main.subtitle}
                </h3>
                <p>ФОРМА</p>
              </div>
              <video
                className={styles.video}
                width="660px"
                controls={true}
                src={`${process.env.REACT_APP_UPLOAD_URL}${data.meetingData.attributes.main.video.data.attributes.url}`}
              ></video>
            </div>
            <div className={styles.gifts}>
              <div className={styles.textBlock}>
                <p className={styles.firstText}>
                  {data.meetingData.attributes.main.firstText}
                </p>
                <p className={styles.secondText}>
                  {data.meetingData.attributes.main.secondText}
                </p>
                <p className={styles.secondText}>
                  {data.meetingData.attributes.main.thirdText}
                </p>
              </div>
              <div className={styles.giftsBlock}>
                {data.meetingData.attributes.main.block.map((item) => (
                  <div className={styles.gift} key={item.id}>
                    <img
                      src={`${process.env.REACT_APP_UPLOAD_URL}${item.image.data.attributes.url}`}
                      alt=""
                    />
                    <p className={styles.desc}>{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </section>
      )}
    </>
  );
};
