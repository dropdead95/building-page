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
  }, []);
  console.log(data.meetingData.attributes);

  return (
    <>
      {data && (
        <section className={styles.meeting}>
          <Container className={styles.meetingContainer}>
            <div className={styles.wrapper}>
              <div className={styles.textContent}>
                <h1></h1>
                <h3></h3>
                <p>ФОРМА</p>
                <video
                  controls
                  src={`${process.env.REACT_APP_UPLOAD_URL}${data.meetingData.attributes.main.video.data.attributes.url}`}
                ></video>
              </div>
            </div>
          </Container>
        </section>
      )}
    </>
  );
};
