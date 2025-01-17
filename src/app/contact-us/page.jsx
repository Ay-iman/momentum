// src/app/contact/page.jsx
import React from "react";
import styles from "./styles.module.css";
import Image from "next/image";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";

const ContactPage = () => {
  return (
    <>
      {/* <Navbar /> */}
      <main>
        <div className={styles.desktop4}>
          <div className={styles.desktop4Inner}>
            <div className={styles.momentumLogoCroppedPng1Parent}>
              <Image
                className={styles.momentumLogoCroppedPng1}
                width={207}
                height={52}
                alt=""
                src="/Momentum Logo- cropped png 1.png"
              />
              <div className={styles.aboutUsParent}>
                <div className={styles.aboutUs}>About Us</div>
                <div className={styles.aboutUs}>Articles</div>
                <div className={styles.aboutUs}>Services</div>
                <div className={styles.aboutUs}>Careers</div>
                <div className={styles.contactUsParent}>
                  <div className={styles.aboutUs}>Contact Us</div>
                  <div className={styles.frameChild} />
                </div>
                <div className={styles.button}>
                  <Image
                    className={styles.searchIcon}
                    width={16}
                    height={16}
                    alt=""
                    src="/search.png"
                  />
                  <div className={styles.searchArticles}>Search articles</div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.frameParent}>
            <div className={styles.wereHereToHelpWrapper}>
              <div className={styles.wereHereTo}>We’re Here to Help</div>
            </div>
            <div className={styles.gotAQuestion}>
              Got a question, feedback, or need assistance? Reach out to us
              anytime, and we’ll get back to you as soon as possible.
            </div>
          </div>
          <Image
            className={styles.contactUs1}
            width={1195}
            height={430}
            alt=""
            src="/Contact Us 1.png"
          />
          <div className={styles.desktop4Child} />
          <div className={styles.frameDiv}>
            <div className={styles.frameGroup}>
              <div className={styles.mailWrapper}>
                <Image
                  className={styles.mailIcon}
                  width={48}
                  height={48}
                  alt=""
                  src="/mail.png"
                />
              </div>
              <div className={styles.sendUsAMailParent}>
                <b className={styles.sendUsA}>Send us a mail</b>
                <div className={styles.contactmomentumcom}>
                  Contact@Momentum.com
                </div>
              </div>
            </div>
          </div>
          <div className={styles.sendUsAMessageParent}>
            <div className={styles.wereHereTo}>Send Us a Message</div>
            <div className={styles.needAssistanceOr}>
              Need assistance or have a question? Fill out the form below or
              drop us a message, and we’ll be in touch shortly.
            </div>
          </div>
          <div className={styles.formColsParent}>
            <div className={styles.formCols}>
              <div className={styles.input}>
                <div className={styles.firstName}>First Name</div>
                <div className={styles.input1}>
                  <div className={styles.enterYourFirst}>
                    Enter your first name here
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.formCols}>
              <div className={styles.input}>
                <div className={styles.firstName}>Last Name</div>
                <div className={styles.input1}>
                  <div className={styles.enterYourFirst}>
                    Enter your last name here
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.formCols2}>
            <div className={styles.input}>
              <div className={styles.firstName}>Email Address</div>
              <div className={styles.input5}>
                <div className={styles.enterYourEmail}>
                  Enter your email here
                </div>
              </div>
            </div>
          </div>
          <div className={styles.formCols3}>
            <div className={styles.input}>
              <div className={styles.firstName}>Comment or Message</div>
              <div className={styles.input7}>
                <div className={styles.typeYourMessage}>
                  Type your message here
                </div>
              </div>
            </div>
          </div>
          <div className={styles.button1}>
            <div className={styles.aboutUs}>Send Message</div>
          </div>
          <Image
            className={styles.image1374Icon}
            width={1440}
            height={512}
            alt=""
            src="/image 1374.png"
          />
          <div className={styles.joinUsOnYourJourneyToBetParent}>
            <div className={styles.wereHereTo}>
              Join Us on Your Journey to Better Health
            </div>
            <div className={styles.discoverTrustedAdvice}>
              Discover trusted advice, expert insights, and practical tips to
              help you make informed decisions for a healthier, happier life.
            </div>
          </div>
          <div className={styles.buttonParent}>
            <div className={styles.button2}>
              <div className={styles.aboutUs}>Sign Up for Our Newsletter</div>
            </div>
            <div className={styles.button3}>
              <div className={styles.aboutUs}>Explore Topics Now</div>
            </div>
          </div>
          <div className={styles.desktop4Item} />
          <div className={styles.rectangleDiv} />
          <div className={styles.desktop4Child1} />
          <div className={styles.desktop4Child2} />
          <div className={styles.frameContainer}>
            <div className={styles.image8Wrapper}>
              <Image
                className={styles.image8Icon}
                width={298}
                height={80}
                alt=""
                src="/image 8.png"
              />
            </div>
            <div className={styles.frameParent1}>
              <div className={styles.discoverParent}>
                <div className={styles.discover}>Discover</div>
                <div className={styles.frameItem} />
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
            <div className={styles.frameParent2}>
              <div className={styles.discoverParent}>
                <div className={styles.discover}>Company</div>
                <div className={styles.frameItem} />
              </div>
              <div className={styles.healthCareConsultingParent}>
                <div className={styles.healthCareConsulting}>About us</div>
                <div className={styles.healthMediaManagement}>Careers</div>
                <div className={styles.medicalTourism}>Contact us</div>
              </div>
            </div>
            <div className={styles.frameParent1}>
              <div className={styles.sendUsAMailParent}>
                <div className={styles.getInTouch}>Get in touch</div>
                <div className={styles.frameItem} />
              </div>
              <div className={styles.frameParent4}>
                <div className={styles.getTheLatestArticlesInYouParent}>
                  <div className={styles.discover}>
                    Get the latest articles in your email
                  </div>
                  <div className={styles.input8}>
                    <div className={styles.enterYourFirst}>
                      Enter your email
                    </div>
                  </div>
                </div>
                <div className={styles.button4}>
                  <div className={styles.aboutUs}>Subscribe</div>
                  <Image
                    className={styles.searchIcon}
                    width={16}
                    height={16}
                    alt=""
                    src="/forward_to_inbox.png"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      {/* <Footer /> */}
    </>
  );
};

export default ContactPage;
