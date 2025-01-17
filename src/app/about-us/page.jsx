// src/app/about-us/page.jsx
import React from "react";
import styles from "./styles.module.css";
import Image from "next/image";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";

const AboutUsPage = () => {
  return (
    <>
      <main>
        <div className={styles.desktop12}>
          <div className={styles.desktop12Inner}>
            <div className={styles.momentumLogoCroppedPng1Parent}>
              <Image
                className={styles.momentumLogoCroppedPng1}
                width={207}
                height={52}
                alt=""
                src="/Momentum Logo- cropped png 1.png"
              />
              <div className={styles.frameParent}>
                <div className={styles.aboutUsParent}>
                  <div className={styles.aboutUs}>About Us</div>
                  <div className={styles.frameChild} />
                </div>
                <div className={styles.articles}>Articles</div>
                <div className={styles.articles}>Services</div>
                <div className={styles.articles}>Careers</div>
                <div className={styles.articles}>Contact Us</div>
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
          <div className={styles.frameGroup}>
            <div className={styles.empoweringHealthcareOrganisaWrapper}>
              <div className={styles.empoweringHealthcareOrganisa}>
                Empowering healthcare organisations with unstoppable momentum.
              </div>
            </div>
            <div className={styles.momentumHealthcareIsContainer}>
              <p className={styles.momentumHealthcareIs}>
                Momentum Healthcare is your partner in driving growth and
                excellence in the healthcare sector. With a diverse portfolio
                that spans health media management, consulting, medical tourism,
                and professional development, we’re committed to creating
                impactful solutions that deliver results.
              </p>
            </div>
          </div>
          <Image
            className={styles.aboutUs1}
            width={1195}
            height={430}
            alt=""
            src="/About US 1.png"
          />
          <div className={styles.frameContainer}>
            <div className={styles.ourVisonAndMissionStatemenParent}>
              <div className={styles.ourVisonAnd}>
                Our Vison and Mission Statement
              </div>
              <div className={styles.ourVisionToContainer}>
                <p className={styles.momentumHealthcareIs}>
                  <span className={styles.ourVision}>Our Vision:</span>
                  <span className={styles.span}>{` `}</span>
                  <span className={styles.toRevolutionizeHealthcareGl}>
                    <span>
                      To revolutionize healthcare globally by building momentum
                      through innovative solutions, meaningful connections, and
                      empowered professionals, ensuring access to exceptional
                      care for all.
                    </span>
                  </span>
                </p>
                <p className={styles.momentumHealthcareIs}>
                  <span className={styles.toRevolutionizeHealthcareGl}>
                    <span>&nbsp;</span>
                  </span>
                </p>
                <p className={styles.ourMissionmomentumHealthcar}>
                  <span className={styles.toRevolutionizeHealthcareGl}>
                    <span className={styles.ourMission1}>Our Mission:</span>
                  </span>
                  <span className={styles.momentumHealthcareIs1}>
                    Momentum Healthcare is dedicated to advancing global health
                    by offering cutting-edge services in media management,
                    consulting, medical tourism, and professional training. We
                    strive to empower healthcare organizations, professionals,
                    and patients through strategic collaborations, innovative
                    approaches, and personalized solutions.
                  </span>
                </p>
              </div>
              <div className={styles.rectangleParent}>
                <div className={styles.frameItem} />
                <Image
                  className={styles.fepictureIcon}
                  width={80}
                  height={80}
                  alt=""
                  src="fe:picture.svg"
                />
                <Image
                  className={styles.aboutUsVisionAndMission1}
                  width={387}
                  height={400}
                  alt=""
                  src="/about Us_ Vision and Mission 1.png"
                />
              </div>
              <div className={styles.frameInner} />
            </div>
            <div className={styles.frameDiv}>
              <div className={styles.fepictureParent}>
                <Image
                  className={styles.fepictureIcon1}
                  width={89}
                  height={89}
                  alt=""
                  src="fe:picture.svg"
                />
                <div className={styles.momentumLogoCroppedPng2Wrapper}>
                  <Image
                    className={styles.momentumLogoCroppedPng2}
                    width={569}
                    height={143}
                    alt=""
                    src="/Momentum Logo- cropped png 2.png"
                  />
                </div>
              </div>
              <div className={styles.welcomeToMomentumParent}>
                <b className={styles.welcomeToMomentum}>Welcome to Momentum</b>
                <div className={styles.atMomentumHealthcare}>
                  At Momentum Healthcare, we’re not just offering services—we’re
                  creating a movement that propels the healthcare industry
                  forward.
                </div>
              </div>
              <div className={styles.frameParent1}>
                <div className={styles.healthCareConsultingParent}>
                  <b className={styles.healthCareConsulting}>
                    Health Care Consulting
                  </b>
                  <div className={styles.ourExpertTeamContainer}>
                    <p className={styles.momentumHealthcareIs}>
                      Our expert team provides tailored strategies for startups,
                      hospitals, pharmaceutical companies, and health
                      organizations to optimize operations and achieve
                      measurable outcomes.i
                    </p>
                    <p className={styles.momentumHealthcareIs}>&nbsp;</p>
                    <p className={styles.learnMore}>
                      <b>Learn More</b>
                    </p>
                  </div>
                </div>
                <div className={styles.healthMediaManagementParent}>
                  <b className={styles.healthMediaManagement}>
                    Health Media Management
                  </b>
                  <div className={styles.withAReachContainer}>
                    <p className={styles.momentumHealthcareIs}>
                      With a reach of over 100 million people, we specialize in
                      amplifying your brand's presence through strategic media
                      management and targeted advertising.
                    </p>
                    <p className={styles.momentumHealthcareIs}>&nbsp;</p>
                    <p className={styles.learnMore}>
                      <b>Learn More</b>
                    </p>
                  </div>
                </div>
                <div className={styles.healthMediaManagementParent}>
                  <b className={styles.healthMediaManagement}>
                    Medical Tourism
                  </b>
                  <div className={styles.withAReachContainer}>
                    <p className={styles.momentumHealthcareIs}>
                      Connecting patients to world-class healthcare providers
                      globally, we ensure personalized and effective medical
                      management plans.
                    </p>
                    <p className={styles.learnMore}>
                      <b>&nbsp;</b>
                    </p>
                    <p className={styles.momentumHealthcareIs}>
                      <b>Learn More</b>
                    </p>
                  </div>
                </div>
                <div className={styles.healthMediaManagementParent}>
                  <b className={styles.healthMediaManagement}>Academy</b>
                  <div className={styles.withAReachContainer}>
                    <p className={styles.momentumHealthcareIs}>
                      We empower healthcare professionals through mentorship,
                      staffing solutions, and access to affordable education
                      opportunities.
                    </p>
                    <p className={styles.momentumHealthcareIs}>&nbsp;</p>
                    <p className={styles.learnMore}>
                      <b>Learn More</b>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.frameParent2}>
              <div className={styles.whatSetsYouApartParent}>
                <div className={styles.articles}>What Sets You Apart</div>
                <b className={styles.whyPartnerWith}>Why Partner With Us?</b>
              </div>
              <div className={styles.expertiseAcrossHealthcareSeParent}>
                <div className={styles.articles}>
                  <ul className={styles.expertiseAcrossHealthcareSe}>
                    <li>Expertise Across Healthcare Sectors</li>
                  </ul>
                </div>
                <div className={styles.articles}>
                  <ul className={styles.expertiseAcrossHealthcareSe}>
                    <li>Dedicated Teams of Experts and Innovators</li>
                  </ul>
                </div>
                <div className={styles.globalReachWithLocalImpactWrapper}>
                  <div className={styles.articles}>
                    <ul className={styles.expertiseAcrossHealthcareSe}>
                      <li>Global Reach with Local Impact</li>
                    </ul>
                  </div>
                </div>
                <div className={styles.articles}>
                  <ul className={styles.expertiseAcrossHealthcareSe}>
                    <li>Tailored Solutions for Every Need</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.managementTeamParent}>
            <div className={styles.empoweringHealthcareOrganisa}>
              Management Team
            </div>
            <div className={styles.momentumHealthcareIsContainer}>
              Meet our management team that helps keep things moving
            </div>
          </div>
          <div className={styles.desktop12Child}>
            <div className={styles.frameParent3}>
              <div className={styles.frameParent4}>
                <div className={styles.ellipseParent}>
                  <div className={styles.ellipseDiv} />
                  <Image
                    className={styles.maleMemojisIcon}
                    width={316}
                    height={316}
                    alt=""
                    src="/Male Memojis.png"
                  />
                  <div className={styles.button1}>
                    <Image
                      className={styles.arrowForwardIcon}
                      width={19}
                      height={19}
                      alt=""
                      src="/arrow_forward.png"
                    />
                  </div>
                </div>
                <div className={styles.thompsonPetersParent}>
                  <b className={styles.thompsonPeters}>Thompson Peters</b>
                  <div className={styles.chiefExecutiveOfficer}>
                    Chief Executive Officer
                  </div>
                </div>
              </div>
              <div className={styles.frameParent5}>
                <div className={styles.ellipseGroup}>
                  <div className={styles.frameChild1} />
                  <Image
                    className={styles.maleMemojisIcon}
                    width={316}
                    height={316}
                    alt=""
                    src="/Female Memojis 1.png"
                  />
                  <div className={styles.button2}>
                    <Image
                      className={styles.arrowForwardIcon}
                      width={19}
                      height={19}
                      alt=""
                      src="/arrow_forward.png"
                    />
                  </div>
                </div>
                <div className={styles.thompsonPetersParent}>
                  <b className={styles.thompsonPeters}>Thompson Peters</b>
                  <div className={styles.chiefExecutiveOfficer}>
                    Chief Executive Officer
                  </div>
                </div>
              </div>
              <div className={styles.frameParent5}>
                <div className={styles.ellipseGroup}>
                  <div className={styles.frameChild2} />
                  <Image
                    className={styles.maleMemojisIcon}
                    width={316}
                    height={316}
                    alt=""
                    src="/Male Memojis 1.png"
                  />
                  <div className={styles.button3}>
                    <Image
                      className={styles.arrowForwardIcon}
                      width={19}
                      height={19}
                      alt=""
                      src="/arrow_forward.png"
                    />
                  </div>
                </div>
                <div className={styles.thompsonPetersParent}>
                  <b className={styles.thompsonPeters}>Thompson Peters</b>
                  <div className={styles.chiefExecutiveOfficer}>
                    Chief Executive Officer
                  </div>
                </div>
              </div>
              <div className={styles.frameParent5}>
                <div className={styles.ellipseGroup}>
                  <div className={styles.frameChild3} />
                  <Image
                    className={styles.maleMemojisIcon}
                    width={316}
                    height={316}
                    alt=""
                    src="/Female Memojis.png"
                  />
                  <div className={styles.button4}>
                    <Image
                      className={styles.arrowForwardIcon}
                      width={19}
                      height={19}
                      alt=""
                      src="/arrow_forward.png"
                    />
                  </div>
                </div>
                <div className={styles.thompsonPetersParent}>
                  <b className={styles.thompsonPeters}>Thompson Peters</b>
                  <div className={styles.chiefExecutiveOfficer}>
                    Chief Executive Officer
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Image
            className={styles.image1374Icon}
            width={1440}
            height={512}
            alt=""
            src="/image 1374.png"
          />
          <div className={styles.joinUsOnYourJourneyToBetParent}>
            <div className={styles.empoweringHealthcareOrganisa}>
              Join Us on Your Journey to Better Health
            </div>
            <div className={styles.discoverTrustedAdvice}>
              Discover trusted advice, expert insights, and practical tips to
              help you make informed decisions for a healthier, happier life.
            </div>
          </div>
          <div className={styles.buttonParent}>
            <div className={styles.button5}>
              <div className={styles.articles}>Sign Up for Our Newsletter</div>
            </div>
            <div className={styles.button6}>
              <div className={styles.articles}>Explore Topics Now</div>
            </div>
          </div>
          <div className={styles.desktop12Item} />
          <div className={styles.rectangleDiv} />
          <div className={styles.desktop12Child1} />
          <div className={styles.desktop12Child2} />
          <div className={styles.frameParent8}>
            <div className={styles.image8Wrapper}>
              <Image
                className={styles.image8Icon}
                width={298}
                height={80}
                alt=""
                src="/image 8.png"
              />
            </div>
            <div className={styles.frameParent9}>
              <div className={styles.discoverParent}>
                <div className={styles.discover}>Discover</div>
                <div className={styles.lineDiv} />
              </div>
              <div className={styles.healthCareConsultingGroup}>
                <div className={styles.healthCareConsulting1}>
                  Health Care Consulting
                </div>
                <div className={styles.healthMediaManagement1}>
                  Health Media Management
                </div>
                <div className={styles.medicalTourism1}>Medical Tourism</div>
                <div className={styles.medicalTourism1}>Academy</div>
              </div>
            </div>
            <div className={styles.frameParent10}>
              <div className={styles.discoverParent}>
                <div className={styles.discover}>Company</div>
                <div className={styles.lineDiv} />
              </div>
              <div className={styles.healthCareConsultingGroup}>
                <div className={styles.healthCareConsulting1}>About us</div>
                <div className={styles.healthMediaManagement1}>Careers</div>
                <div className={styles.medicalTourism1}>Contact us</div>
              </div>
            </div>
            <div className={styles.frameParent9}>
              <div className={styles.getInTouchParent}>
                <div className={styles.getInTouch}>Get in touch</div>
                <div className={styles.lineDiv} />
              </div>
              <div className={styles.frameParent12}>
                <div className={styles.getTheLatestArticlesInYouParent}>
                  <div className={styles.discover}>
                    Get the latest articles in your email
                  </div>
                  <div className={styles.input}>
                    <div className={styles.enterYourEmail}>
                      Enter your email
                    </div>
                  </div>
                </div>
                <div className={styles.button7}>
                  <div className={styles.articles}>Subscribe</div>
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
    </>
  );
};

export default AboutUsPage;
