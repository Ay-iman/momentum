// src/app/page.jsx
import React from "react";
// import Navbar from "./components/Navbar";
import Image from "next/image";
import Link from "next/link";
// import Footer from "./components/Footer";
import styles from "./styles.module.css";

const HomePage = () => {
  return (
    <>
      {/* <Navbar /> */}
      <main>
        <div className={styles.desktop1}>
          <div className={styles.rectangleParent}>
            <div className={styles.groupChild} />
            <Image
              className={styles.landingPageReplacesThePho}
              width={647}
              height={668}
              alt=""
              src="/Landing page_ replaces the phone with the hand 1.png"
            />
          </div>
          <Image
            className={styles.imageIcon}
            width={1770}
            height={598}
            alt=""
            src="/image.png"
          />
          <div className={styles.desktop1Inner}>
            <div className={styles.momentumLogoCroppedPng1Parent}>
              <Image
                className={styles.momentumLogoCroppedPng1}
                width={207}
                height={52}
                alt=""
                src="/Momentum Logo- cropped png 1.png"
              />
              <div className={styles.aboutUsParent}>
                <div className={styles.aboutUs}>
                  <Link href="/about-us">About Us</Link>
                </div>
                <div className={styles.aboutUs}>
                  <Link href="/articles">Articles</Link>
                </div>
                <div className={styles.aboutUs}>Services</div>
                <div className={styles.aboutUs}>
                  <Link href="/careers">Careers</Link>
                </div>
                <div className={styles.aboutUs}>
                  <Link href="/contact-us">Contact Us</Link>
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
            <div className={styles.yourReliableHealthcareServiParent}>
              <div className={styles.yourReliableHealthcare}>
                Your reliable healthcare service organisation.
              </div>
              <div className={styles.empoweringHealthcareOrganisa}>
                Empowering healthcare organisations with unstoppable momentum.
              </div>
            </div>
            <div className={styles.button1}>
              <div className={styles.aboutUs}>Explore Services</div>
            </div>
          </div>
          <div className={styles.trustedByLeading}>
            Trusted by leading health organizations globally.
          </div>
          <div className={styles.whatWeHaveToOfferParent}>
            <div className={styles.whatWeHave}>What we have to offer</div>
            <div className={styles.healthConsulting}>
              <div className={styles.frameGroup}>
                <div className={styles.frameContainer}>
                  <div className={styles.healthcareConsultingParent}>
                    <div className={styles.yourReliableHealthcare}>
                      HealthCare Consulting
                    </div>
                    <div className={styles.weProvideTailored}>
                      We provide tailored solutions for healthcare startups,
                      public health organizations, pharmaceutical companies,
                      hospitals,laboratories and Health financing organisations.
                      Our services include strategy, operations, business
                      analytics, market access, marketing, medical writing, and
                      health media management.
                    </div>
                  </div>
                  <div className={styles.button1}>
                    <div className={styles.aboutUs}>
                      <Link href="/healthcare-consulting">View Details</Link>
                    </div>
                  </div>
                </div>
                <Image
                  className={styles.landingPageHealthcareConsu}
                  width={387}
                  height={400}
                  alt=""
                  src="/Landing page_ Healthcare_Consulting_1.png"
                />
              </div>
            </div>
            <div className={styles.healthMediaManagement}>
              <div className={styles.landingPageHealthMediaManParent}>
                <Image
                  className={styles.landingPageHealthMediaMan}
                  width={387}
                  height={400}
                  alt=""
                  src="/Landing page_ Health media_Management_1.png"
                />
                <div className={styles.frameContainer}>
                  <div className={styles.healthcareConsultingParent}>
                    <div className={styles.yourReliableHealthcare}>
                      Health Media Management
                    </div>
                    <div className={styles.leverageThePower}>
                      Leverage the power of our extensive social media
                      reach—connecting with nearly 100 million individuals. Our
                      dedicated team of health communication and marketing
                      specialists excels in building brand awareness and driving
                      lead generation. From strategic media management to
                      targeted advertising, we help your organization amplify
                      its impact and grow its audience effectively.
                    </div>
                  </div>
                  <div className={styles.button3}>
                    <div className={styles.aboutUs}>
                      <Link href="/health-media-management">View Details</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.medicalTourism}>
              <div className={styles.frameGroup}>
                <div className={styles.frameContainer}>
                  <div className={styles.healthcareConsultingParent}>
                    <div className={styles.yourReliableHealthcare}>
                      Medical Tourism
                    </div>
                    <div className={styles.throughOurPartnerships}>
                      Through our partnerships with leading hospitals worldwide,
                      we connect patients with the right providers globally. Our
                      team of medical experts ensures tailored medical
                      management plans to meet each patient’s unique needs
                      effectively.
                    </div>
                  </div>
                  <div className={styles.button1}>
                    <div className={styles.aboutUs}>
                      <Link href="/medical_tourism">View Details</Link>
                    </div>
                  </div>
                </div>
                <div className={styles.rectangleGroup}>
                  <div className={styles.frameChild} />
                  <Image
                    className={styles.fepictureIcon}
                    width={80}
                    height={80}
                    alt=""
                    src="fe:picture.svg"
                  />
                  <Image
                    className={styles.image1377Icon}
                    width={387}
                    height={400}
                    alt=""
                    src="/image 1377.png"
                  />
                  <Image
                    className={styles.image1377Icon}
                    width={387}
                    height={400}
                    alt=""
                    src="/Landing page_ Medical Tourism_1.png"
                  />
                </div>
              </div>
            </div>
            <div className={styles.academy}>
              <Image
                className={styles.landingPageAcademy1}
                width={387}
                height={400}
                alt=""
                src="/Landing page_ Academy 1.png"
              />
              <div className={styles.frameParent3}>
                <div className={styles.frameWrapper}>
                  <div className={styles.healthcareConsultingParent}>
                    <div className={styles.yourReliableHealthcare}>Academy</div>
                    <div className={styles.throughOurPartnerships}>
                      We offer mentorship and staffing solutions for healthcare
                      professionals and organizations, along with access to
                      affordable university admissions for aspiring healthcare
                      talents. Partner with us to build a stronger, more skilled
                      healthcare workforce.
                    </div>
                  </div>
                </div>
                <div className={styles.button1}>
                  <div className={styles.aboutUs}>
                    <Link href="/academy">View Details</Link>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.image1380Parent}>
              <Image
                className={styles.image1380Icon}
                width={1440}
                height={175}
                alt=""
                src="/image 1380.png"
              />
              <div className={styles.checkUsOutOnOurSocialsParent}>
                <div className={styles.checkUsOut}>
                  Check us out on our socials
                </div>
                <div className={styles.frame}>
                  <Image
                    className={styles.groupIcon}
                    width={71}
                    height={74}
                    alt=""
                    src="/Group.png"
                  />
                  <Image
                    className={styles.frameIcon}
                    width={70}
                    height={73}
                    alt=""
                    src="/Frame.png"
                  />
                  <Image
                    className={styles.groupIcon1}
                    width={70}
                    height={73}
                    alt=""
                    src="/Group_1.png"
                  />
                  <Image
                    className={styles.groupIcon2}
                    width={71}
                    height={75}
                    alt=""
                    src="/Group_2.png"
                  />
                  <Image
                    className={styles.groupIcon3}
                    width={70}
                    height={73}
                    alt=""
                    src="/Group_3.png"
                  />
                  <Image
                    className={styles.groupIcon3}
                    width={70}
                    height={73}
                    alt=""
                    src="/Group_4.png"
                  />
                </div>
              </div>
            </div>
            <div className={styles.image6Parent}>
              <Image
                className={styles.image6Icon}
                width={1440}
                height={500}
                alt=""
                src="/image 6.png"
              />
              <div className={styles.neverMissAStoryParent}>
                <div className={styles.checkUsOut}>Never miss a story</div>
                <div className={styles.getOurWeekly}>
                  Get our Weekly recap with the latest news, articles and
                  resources.
                </div>
              </div>
              <div className={styles.formCols}>
                <div className={styles.input}>
                  <div className={styles.subscribeToOur}>
                    Subscribe to our newsletters
                  </div>
                  <div className={styles.input1}>
                    <div className={styles.enterYourEmail}>
                      Enter your email
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.button6}>
                <div className={styles.aboutUs}>Subscribe</div>
                <Image
                  className={styles.searchIcon}
                  width={16}
                  height={16}
                  alt=""
                  src="/forward_to_inbox.svg"
                />
              </div>
            </div>
          </div>
          <div className={styles.rectangleContainer}>
            <div className={styles.frameItem} />
            <div className={styles.frameItem} />
            <div className={styles.frameItem} />
            <div className={styles.frameItem} />
            <div className={styles.frameItem} />
            <div className={styles.frameItem} />
          </div>
          <div className={styles.frameParent4}>
            <div className={styles.image8Wrapper}>
              <Image
                className={styles.image8Icon}
                width={298}
                height={80}
                alt=""
                src="/image 8.png"
              />
            </div>
            <div className={styles.frameParent5}>
              <div className={styles.discoverParent}>
                <div className={styles.checkUsOut}>Discover</div>
                <div className={styles.lineDiv} />
              </div>
              <div className={styles.healthCareConsultingParent}>
                <div className={styles.healthCareConsulting}>
                  Health Care Consulting
                </div>
                <div className={styles.healthMediaManagement2}>
                  Health Media Management
                </div>
                <div className={styles.medicalTourism2}>Medical Tourism</div>
                <div className={styles.medicalTourism2}>Academy</div>
              </div>
            </div>
            <div className={styles.frameParent6}>
              <div className={styles.discoverParent}>
                <div className={styles.checkUsOut}>Company</div>
                <div className={styles.lineDiv} />
              </div>
              <div className={styles.healthCareConsultingParent}>
                <div className={styles.healthCareConsulting}>About us</div>
                <div className={styles.healthMediaManagement2}>Careers</div>
                <div className={styles.medicalTourism2}>Contact us</div>
              </div>
            </div>
            <div className={styles.frameParent5}>
              <div className={styles.getInTouchParent}>
                <div className={styles.getInTouch}>Get in touch</div>
                <div className={styles.lineDiv} />
              </div>
              <div className={styles.frameParent8}>
                <div className={styles.getTheLatestArticlesInYouParent}>
                  <div className={styles.checkUsOut}>
                    Get the latest articles in your email
                  </div>
                  <div className={styles.input2}>
                    <div className={styles.enterYourEmail}>
                      Enter your email
                    </div>
                  </div>
                </div>
                <div className={styles.button7}>
                  <div className={styles.aboutUs}>Subscribe</div>
                  <Image
                    className={styles.searchIcon}
                    width={16}
                    height={16}
                    alt=""
                    src="/forward_to_inbox.svg"
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

export default HomePage;
