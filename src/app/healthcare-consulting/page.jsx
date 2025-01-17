// src/app/healthcare-consulting/page.jsx
import React from "react";
import Image from "next/image";
// import Link from "next/link";
import styles from "./styles.module.css";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";

const HealthcareConsultingPage = () => {
  return (
    <>
      {/* <Navbar /> */}
      <main>
        <div className={styles.desktop5}>
          <div className={styles.desktop5Inner}>
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
            <div className={styles.healthcareConsultingParent}>
              <b className={styles.healthcareConsulting}>
                Healthcare Consulting
              </b>
              <div className={styles.transformingHealthcareOneSWrapper}>
                <div className={styles.transformingHealthcareOne}>
                  Transforming Healthcare, One Solution at a Time
                </div>
              </div>
              <div className={styles.weProvideTailored}>
                We provide tailored consulting services to help healthcare
                organizations improve efficiency, enhance patient care, and
                achieve lasting growth.
              </div>
              <div className={styles.button1}>
                <div className={styles.searchArticles}>
                  Schedule a Consultation
                </div>
              </div>
            </div>
            <Image
              className={styles.healthcareConsulting1}
              width={1195}
              height={430}
              alt=""
              src="/Healthcare consulting 1.png"
            />
          </div>
          <Image
            className={styles.image1374Icon}
            width={1440}
            height={512}
            alt=""
            src="/image 1374.png"
          />
          <div className={styles.joinUsOnYourJourneyToBetParent}>
            <div className={styles.transformingHealthcareOne}>
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
          <div className={styles.desktop5Child} />
          <div className={styles.desktop5Item} />
          <div className={styles.rectangleDiv} />
          <div className={styles.desktop5Child1} />
          <div className={styles.frameGroup}>
            <div className={styles.image8Wrapper}>
              <Image
                className={styles.image8Icon}
                width={298}
                height={80}
                alt=""
                src="/image 8.png"
              />
            </div>
            <div className={styles.frameContainer}>
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
            <div className={styles.frameDiv}>
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
            <div className={styles.frameContainer}>
              <div className={styles.getInTouchParent}>
                <div className={styles.getInTouch}>Get in touch</div>
                <div className={styles.frameItem} />
              </div>
              <div className={styles.frameParent2}>
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
          <div className={styles.frameParent3}>
            <div className={styles.ourExpertiseYourAdvantageParent}>
              <div className={styles.ourExpertiseYour}>
                Our Expertise, Your Advantage
              </div>
              <div className={styles.whatWeOffer}>What We Offer</div>
            </div>
            <div className={styles.parent}>
              <Image
                className={styles.icon}
                width={48}
                height={48}
                alt=""
                src="/1.png"
              />
              <div className={styles.ourExpertiseYour}>
                Strategy and Operations
              </div>
              <div className={styles.optimizingProcessesAligningContainer}>
                <p className={styles.optimizingProcessesAligning}>
                  Optimizing processes, aligning organizational goals, and
                  implementing innovative solutions to improve efficiency,
                  patient outcomes, and overall performance.
                </p>
              </div>
            </div>
            <div className={styles.group}>
              <Image
                className={styles.icon}
                width={48}
                height={48}
                alt=""
                src="/2.png"
              />
              <div className={styles.ourExpertiseYour}>Business analytics</div>
              <div className={styles.leveragesBusinessAnalytics}>
                leverages business analytics to transform data into actionable
                insights, enabling informed decision-making, improving
                operational efficiency, and driving strategic growth in the
                healthcare sector.
              </div>
            </div>
            <div className={styles.container}>
              <Image
                className={styles.icon}
                width={48}
                height={48}
                alt=""
                src="/3.png"
              />
              <div className={styles.ourExpertiseYour}>Marketing</div>
              <div className={styles.weCraftTargeted}>
                We craft targeted marketing strategies to increase brand
                visibility, engage audiences, and drive patient or client
                acquisition in the competitive healthcare landscape.
              </div>
            </div>
            <div className={styles.parent1}>
              <Image
                className={styles.icon}
                width={48}
                height={48}
                alt=""
                src="/4.png"
              />
              <div className={styles.ourExpertiseYour}>Medical Writing</div>
              <div className={styles.weProvideHighQuality}>
                We provide high-quality, accurate, and compliant medical content
                to support clinical and healthcare communications, regulatory
                submissions, and patient education.
              </div>
            </div>
          </div>
          <div className={styles.frameParent4}>
            <div className={styles.yourPartnerInHealthcareExcParent}>
              <div className={styles.ourExpertiseYour}>
                Your Partner in Healthcare Excellence
              </div>
              <div className={styles.whatWeOffer}>Why Partner with us</div>
            </div>
            <div className={styles.partneringWithUs}>
              Partnering with us ensures innovative solutions, expert guidance,
              and proven strategies to help you achieve your goals, optimize
              operations, and stay ahead in the dynamic healthcare landscape.
            </div>
            <div className={styles.ellipseDiv} />
            <div className={styles.healthcareConsultingWhyPartParent}>
              <Image
                className={styles.healthcareConsultingWhyPart}
                width={450}
                height={450}
                alt=""
                src="/Healthcare consulting_why partner with us 2.png"
              />
              <div className={styles.frameWrapper}>
                <div className={styles.checkMark125036001Parent}>
                  <Image
                    className={styles.checkMark125036001Icon}
                    width={45}
                    height={45}
                    alt=""
                    src="/check-mark_12503600 1.png"
                  />
                  <i className={styles.aboutUs}>90% client satisfaction rate</i>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.desktop5Inner1}>
            <div className={styles.frameParent5}>
              <div className={styles.easyToUnderstandResearchedWrapper}>
                <div className={styles.easyToUnderstandContainer}>
                  <p
                    className={styles.optimizingProcessesAligning}
                  >{`Easy to Understand `}</p>
                  <p className={styles.optimizingProcessesAligning}>
                    Researched Health Articles
                  </p>
                </div>
              </div>
              <div className={styles.frameParent6}>
                <div className={styles.frameParent7}>
                  <div className={styles.frameParent8}>
                    <div className={styles.imageParent}>
                      <div className={styles.image} />
                      <Image
                        className={styles.image1Icon}
                        width={610}
                        height={301}
                        alt=""
                        src="/image 1.png"
                      />
                    </div>
                    <div className={styles.frameParent9}>
                      <div className={styles.theRelationshipBetweenAlcohParent}>
                        <b className={styles.theRelationshipBetween}>
                          The Relationship Between Alcohol And Cholesterol
                          Levels
                        </b>
                        <div className={styles.byShalomNgbalaOkpabParent}>
                          <div className={styles.healthcareConsulting}>
                            <span className={styles.byShalomNgbalaOkpab}>
                              By Shalom Ngbala-Okpab
                            </span>
                          </div>
                          <div className={styles.healthcareConsulting}>
                            <span className={styles.byShalomNgbalaOkpab}>
                              Posted on September 1, 2022
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className={styles.thereAreOften}>
                        There are often queries concerning the consumption of
                        alcohol. Some schools of thoughts are for its
                        consumption while some are against its consumption.
                      </div>
                    </div>
                  </div>
                  <div className={styles.frameParent10}>
                    <div className={styles.frameParent11}>
                      <div className={styles.rectangleParent}>
                        <div className={styles.frameChild1} />
                        <Image
                          className={styles.image2Icon}
                          width={243}
                          height={154}
                          alt=""
                          src="/image 2.png"
                        />
                      </div>
                      <div className={styles.getInTouchParent}>
                        <b className={styles.howDoYou}>
                          How Do You Treat Premature Ejaculation?
                        </b>
                        <div className={styles.byShalomNgbalaOkpabGroup}>
                          <div className={styles.healthcareConsulting}>
                            <span className={styles.byShalomNgbalaOkpab}>
                              By Shalom Ngbala-Okpab
                            </span>
                          </div>
                          <div className={styles.healthcareConsulting}>
                            <span className={styles.byShalomNgbalaOkpab}>
                              Posted on September 1, 2022
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.frameParent11}>
                      <div className={styles.rectangleParent}>
                        <div className={styles.frameChild1} />
                        <Image
                          className={styles.image2Icon}
                          width={243}
                          height={154}
                          alt=""
                          src="/image 3.png"
                        />
                      </div>
                      <div className={styles.whatIsImplantationBleedingParent}>
                        <b className={styles.whatIsImplantation}>
                          What Is Implantation Bleeding?
                        </b>
                        <div className={styles.byShalomNgbalaOkpabGroup}>
                          <div className={styles.healthcareConsulting}>
                            <span className={styles.byShalomNgbalaOkpab}>
                              By Shalom Ngbala-Okpab
                            </span>
                          </div>
                          <div className={styles.healthcareConsulting}>
                            <span className={styles.byShalomNgbalaOkpab}>
                              Posted on September 1, 2022
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.frameParent11}>
                      <div className={styles.rectangleParent}>
                        <div className={styles.frameChild1} />
                        <Image
                          className={styles.image4Icon}
                          width={244}
                          height={154}
                          alt=""
                          src="/image 4.png"
                        />
                      </div>
                      <div className={styles.whatIsImplantationBleedingParent}>
                        <b className={styles.whatIsImplantation}>
                          Reasons Why You Shouldn’t Hold Your Urine
                        </b>
                        <div className={styles.byShalomNgbalaOkpabGroup}>
                          <div className={styles.healthcareConsulting}>
                            <span className={styles.byShalomNgbalaOkpab}>
                              By Shalom Ngbala-Okpab
                            </span>
                          </div>
                          <div className={styles.healthcareConsulting}>
                            <span className={styles.byShalomNgbalaOkpab}>
                              Posted on September 1, 2022
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.button4}>
                  <div className={styles.aboutUs}>Read More Articles</div>
                  <Image
                    className={styles.searchIcon}
                    width={16}
                    height={16}
                    alt=""
                    src="/arrow_forward.png"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.frameParent14}>
            <div className={styles.ourTeamParent}>
              <div className={styles.transformingHealthcareOne}>Our Team</div>
              <div className={styles.meetOurTeam}>
                Meet our team of experts who is ready and available to help you
                with your health
              </div>
            </div>
            <div className={styles.frameWrapper1}>
              <div className={styles.frameParent15}>
                <div className={styles.frameParent16}>
                  <div className={styles.ellipseParent}>
                    <div className={styles.frameChild4} />
                    <Image
                      className={styles.maleMemojisIcon}
                      width={316}
                      height={316}
                      alt=""
                      src="/Male Memojis.png"
                    />
                    <div className={styles.button6}>
                      <Image
                        className={styles.arrowForwardIcon1}
                        width={19}
                        height={19}
                        alt=""
                        src="/arrow_forward.png"
                      />
                    </div>
                  </div>
                  <div className={styles.thompsonPetersParent}>
                    <b className={styles.theRelationshipBetween}>
                      Thompson Peters
                    </b>
                    <div className={styles.chiefExecutiveOfficer}>
                      Chief Executive Officer
                    </div>
                  </div>
                </div>
                <div className={styles.frameParent17}>
                  <div className={styles.ellipseGroup}>
                    <div className={styles.frameChild5} />
                    <Image
                      className={styles.maleMemojisIcon}
                      width={316}
                      height={316}
                      alt=""
                      src="/Female Memojis.png"
                    />
                    <div className={styles.button7}>
                      <Image
                        className={styles.arrowForwardIcon1}
                        width={19}
                        height={19}
                        alt=""
                        src="/arrow_forward.png"
                      />
                    </div>
                  </div>
                  <div className={styles.thompsonPetersParent}>
                    <b className={styles.theRelationshipBetween}>
                      Thompson Peters
                    </b>
                    <div className={styles.chiefExecutiveOfficer}>
                      Chief Executive Officer
                    </div>
                  </div>
                </div>
                <div className={styles.frameParent17}>
                  <div className={styles.ellipseGroup}>
                    <div className={styles.frameChild6} />
                    <Image
                      className={styles.maleMemojisIcon}
                      width={316}
                      height={316}
                      alt=""
                      src="/Male Memojis.png"
                    />
                    <div className={styles.button8}>
                      <Image
                        className={styles.arrowForwardIcon1}
                        width={19}
                        height={19}
                        alt=""
                        src="/arrow_forward.png"
                      />
                    </div>
                  </div>
                  <div className={styles.thompsonPetersParent}>
                    <b className={styles.theRelationshipBetween}>
                      Thompson Peters
                    </b>
                    <div className={styles.chiefExecutiveOfficer}>
                      Chief Executive Officer
                    </div>
                  </div>
                </div>
                <div className={styles.frameParent17}>
                  <div className={styles.ellipseGroup}>
                    <div className={styles.frameChild7} />
                    <Image
                      className={styles.maleMemojisIcon}
                      width={316}
                      height={316}
                      alt=""
                      src="/Female Memojis.png"
                    />
                    <div className={styles.button9}>
                      <Image
                        className={styles.arrowForwardIcon1}
                        width={19}
                        height={19}
                        alt=""
                        src="/arrow_forward.png"
                      />
                    </div>
                  </div>
                  <div className={styles.thompsonPetersParent}>
                    <b className={styles.theRelationshipBetween}>
                      Thompson Peters
                    </b>
                    <div className={styles.chiefExecutiveOfficer}>
                      Chief Executive Officer
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.frameWrapper2}>
              <div className={styles.frameParent15}>
                <div className={styles.frameParent16}>
                  <div className={styles.ellipseParent}>
                    <div className={styles.frameChild4} />
                    <Image
                      className={styles.maleMemojisIcon}
                      width={316}
                      height={316}
                      alt=""
                      src="/Male Memojis.png"
                    />
                    <div className={styles.button6}>
                      <Image
                        className={styles.arrowForwardIcon1}
                        width={19}
                        height={19}
                        alt=""
                        src="/arrow_forward.png"
                      />
                    </div>
                  </div>
                  <div className={styles.thompsonPetersParent}>
                    <b className={styles.theRelationshipBetween}>
                      Thompson Peters
                    </b>
                    <div className={styles.chiefExecutiveOfficer}>
                      Chief Executive Officer
                    </div>
                  </div>
                </div>
                <div className={styles.frameParent17}>
                  <div className={styles.ellipseGroup}>
                    <div className={styles.frameChild5} />
                    <Image
                      className={styles.maleMemojisIcon}
                      width={316}
                      height={316}
                      alt=""
                      src="/Female Memojis.png"
                    />
                    <div className={styles.button7}>
                      <Image
                        className={styles.arrowForwardIcon1}
                        width={19}
                        height={19}
                        alt=""
                        src="/arrow_forward.png"
                      />
                    </div>
                  </div>
                  <div className={styles.thompsonPetersParent}>
                    <b className={styles.theRelationshipBetween}>
                      Thompson Peters
                    </b>
                    <div className={styles.chiefExecutiveOfficer}>
                      Chief Executive Officer
                    </div>
                  </div>
                </div>
                <div className={styles.frameParent17}>
                  <div className={styles.ellipseGroup}>
                    <div className={styles.frameChild6} />
                    <Image
                      className={styles.maleMemojisIcon}
                      width={316}
                      height={316}
                      alt=""
                      src="/Male Memojis.png"
                    />
                    <div className={styles.button8}>
                      <Image
                        className={styles.arrowForwardIcon1}
                        width={19}
                        height={19}
                        alt=""
                        src="/arrow_forward.png"
                      />
                    </div>
                  </div>
                  <div className={styles.thompsonPetersParent}>
                    <b className={styles.theRelationshipBetween}>
                      Thompson Peters
                    </b>
                    <div className={styles.chiefExecutiveOfficer}>
                      Chief Executive Officer
                    </div>
                  </div>
                </div>
                <div className={styles.frameParent17}>
                  <div className={styles.ellipseGroup}>
                    <div className={styles.frameChild7} />
                    <Image
                      className={styles.maleMemojisIcon}
                      width={316}
                      height={316}
                      alt=""
                      src="/Female Memojis.png"
                    />
                    <div className={styles.button9}>
                      <Image
                        className={styles.arrowForwardIcon1}
                        width={19}
                        height={19}
                        alt=""
                        src="/arrow_forward.png"
                      />
                    </div>
                  </div>
                  <div className={styles.thompsonPetersParent}>
                    <b className={styles.theRelationshipBetween}>
                      Thompson Peters
                    </b>
                    <div className={styles.chiefExecutiveOfficer}>
                      Chief Executive Officer
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.desktop5Child2} />
          <div className={styles.scheduleAConsultParent}>
            <div className={styles.transformingHealthcareOne}>
              Schedule a consult
            </div>
            <div className={styles.needAssistanceOr}>
              Need assistance or have a question? Fill out the form below or
              drop us a message, and we’ll be in touch shortly.
            </div>
          </div>
          <div className={styles.formColsParent}>
            <div className={styles.formCols}>
              <div className={styles.input1}>
                <div className={styles.firstName}>First Name</div>
                <div className={styles.input2}>
                  <div className={styles.enterYourEmail}>
                    Enter your first name here
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.formCols}>
              <div className={styles.input1}>
                <div className={styles.firstName}>Last Name</div>
                <div className={styles.input2}>
                  <div className={styles.enterYourEmail}>
                    Enter your last name here
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.formCols2}>
            <div className={styles.input1}>
              <div className={styles.firstName}>Email Address</div>
              <div className={styles.input6}>
                <div className={styles.enterYourEmail1}>
                  Enter your email here
                </div>
              </div>
            </div>
          </div>
          <div className={styles.formCols3}>
            <div className={styles.input1}>
              <div className={styles.firstName}>Drop your Message</div>
              <div className={styles.input8}>
                <div className={styles.typeYourMessage}>
                  Type your message here
                </div>
              </div>
            </div>
          </div>
          <div className={styles.button14}>
            <div className={styles.aboutUs}>Send Message</div>
          </div>
        </div>
      </main>
      {/* <Footer /> */}
    </>
  );
};

export default HealthcareConsultingPage;
