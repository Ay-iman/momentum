// src/app/components/Footer.jsx
import React from "react";
import styles from "./styles.module.css";
import Image from "next/image";
const Footer = () => {
  return (
    <footer>
      <div className={styles.footer_frameParent}>
        <div className={styles.image8Wrapper}>
          <Image
            className={styles.image8Icon}
            width={298}
            height={80}
            alt=""
            src="/image 8.png"
          />
        </div>
        <div className={styles.footer_frameGroup}>
          <div className={styles.discoverParent}>
            <div className={styles.discover}>Discover</div>
            <div className={styles.footer_frameChild} />
          </div>
          <div className={styles.healthCareConsultingParent}>
            <div className={styles.healthCareConsulting}>
              Health Care Consulting
            </div>
            <div className={styles.healthMediaManagement}>
              Health Media Management
            </div>
            <div className={styles.medicalTourism}>Medical Tourism</div>
            <div className={styles.medicalTourism}>Academy</div>
          </div>
        </div>
        <div className={styles.footer_frameContainer}>
          <div className={styles.discoverParent}>
            <div className={styles.discover}>Company</div>
            <div className={styles.footer_frameChild} />
          </div>
          <div className={styles.healthCareConsultingParent}>
            <div className={styles.healthCareConsulting}>About us</div>
            <div className={styles.healthMediaManagement}>Careers</div>
            <div className={styles.medicalTourism}>Contact us</div>
          </div>
        </div>
        <div className={styles.footer_frameGroup}>
          <div className={styles.getInTouchParent}>
            <div className={styles.getInTouch}>Get in touch</div>
            <div className={styles.footer_frameChild} />
          </div>
          <div className={styles.footer_frameParent1}>
            <div className={styles.getTheLatestArticlesInYouParent}>
              <div className={styles.discover}>
                Get the latest articles in your email
              </div>
              <div className={styles.input}>
                <div className={styles.enterYourEmail}>Enter your email</div>
              </div>
            </div>
            <div className={styles.footer_button}>
              <div className={styles.subscribe}>Subscribe</div>
              <Image
                className={styles.forwardToInboxIcon}
                width={16}
                height={16}
                alt=""
                src="/forward_to_inbox.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
