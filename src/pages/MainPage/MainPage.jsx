import styles from "./MainPage.module.scss"
import GoTo from "../../assets/goTo.svg?react"
import Belkin from "../../assets/belkin.png?react"
import Barbell from "../../assets/barbell.svg?react"
import Ipf from "../../assets/ifp.png?react"
import Bsuir from "../../assets/bsuir.png?react"
import Logo from '../../assets/mainLogo.svg?react'
import {Link, useNavigate} from "react-router";
import {useEffect, useRef} from "react";

const MainPage = () => {
    const scrollElement = useRef([]);
    const navigate = useNavigate();
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('fadeUp');
                    observer.unobserve(entry.target);
                }
            });
        }, {threshold: 0.2});

        scrollElement.current.forEach(el => {
            if (el) observer.observe(el);
        });

        return () => {
            observer.disconnect();
        };
    }, []);

    return (
        <div className="wrapper">
            <section className={styles.topSection}>
                <div className="fadeUp fadeUpElements">
                    <div className={styles.mainText}>
                        <h1>Built for Your <span className={styles.redSpan}>Powerlifting</span> Lifestyle.</h1>
                        <p>Your goals, your pace, our proven programs — crafted to help you train
                            with purpose and transform with confidence.</p>
                        <button onClick={() => navigate('/programs')}>START NOW <GoTo/></button>
                    </div>
                </div>
                <div className="fadeUp fadeUpElements">
                    <div className={styles.mainImage}>
                        <img src={Belkin}/>
                    </div>
                </div>
            </section>
            <div className={styles.powerliftingTrack}>
                <div className={styles.track}>
                    <span>POWERLIFTING  POWERLIFTING  POWERLIFTING  POWERLIFTING  POWERLIFTING  POWERLIFTING  POWERLIFTING  POWERLIFTING  POWERLIFTING  POWERLIFTING  POWERLIFTING</span>
                    <span>POWERLIFTING  POWERLIFTING  POWERLIFTING  POWERLIFTING  POWERLIFTING  POWERLIFTING  POWERLIFTING  POWERLIFTING  POWERLIFTING  POWERLIFTING  POWERLIFTING</span>
                </div>
            </div>
            <section
                ref={(el) => scrollElement.current[0] = el}
                className={`${styles.miniAbout} fadeUpElements`}>
                <div className={`${styles.aboutTitle}`}>
                    <div className={styles.aboutMiniLogo}>About us</div>
                    <h1>Discover a Gym That Trains You to Be <span className={styles.redSpan}>Stronger</span>, <span className={styles.redSpan}>Fitter</span> and More <span className={styles.redSpan}>Focused</span></h1>
                </div>
                <div className={styles.bigLogo}>
                    <div className={styles.barbellLogo}>
                        <Barbell/>
                    </div>
                    <p>Trusted by All BSUIR Students</p>
                </div>
                <div className={styles.aboutText}>
                    <div className={styles.currentAboutText}>                    <p>At BSUIR gym, our community isn’t just showing up — they’re leveling up. From newcomers to elite athletes, every member pushes harder, lifts stronger, and supports one another through every rep.</p>
                    </div>
                    <button onClick={() => navigate('/about')}>
                        <p>Read More About Us</p>
                        <GoTo/>
                    </button>
                </div>
            </section>
            <section className={`${styles.sbdBlock} fadeUpElements`} ref={(el) => scrollElement.current[1] = el}>
               <div className={`${styles.sbdWrapper}`}>
                   <div className={styles.sbdHead}>
                       <div className={styles.aboutMiniLogo}>What We Offer</div>
                       <h1>Train <span className={styles.redSpan}>Smarter</span>. Perform <span className={styles.redSpan}>Better</span>. Grow <span className={styles.redSpan}>Stronger</span>.</h1>
                       <p>Whether you're just starting out or chasing peak performance,
                           our expert-led programs are built to push your limits.</p>
                       <span className={`${styles.redSpan} ${styles.bigSBD}`}>SBD</span>
                   </div>
                   <hr/>
                   <div className={styles.sbdBody}>
                       <div className={styles.ipfLogo}>
                           <img src={Ipf} alt="ipf logo"/>
                       </div>

                       <div className={styles.ipfMainText}>
                           <p>The International Powerlifting Federation (IPF) is the premier global governing body for powerlifting, officially recognized by the International Olympic Committee. Standing as the ultimate gold standard for strength sports, the IPF is defined by its strict compliance with WADA anti-doping regulations, ensuring a completely clean, fair, and drug-free competitive platform with uniform, rigorous rules for all athletes.</p>
                           <p>For the Belarusian State University of Informatics and Radioelectronics (BSUIR), choosing the IPF division is a deliberate decision rooted in official athletic progression and institutional excellence. We do not view powerlifting as a casual hobby, but rather treat it as a disciplined academic and physical pursuit. This alignment offers distinct, elite advantages for our student-athletes, providing them with the only legitimate pathway to official republic and international university championships, alongside the exclusive opportunity to earn legally recognized sports ranks and prestigious titles.</p>
                       </div>
                   </div>
                   <hr/>
               </div>
            </section>
            <footer ref={(el) => scrollElement.current[2] = el} className={`${styles.contactUs} fadeUpElements`}>
                <div className={`${styles.contactUsHeader}`}>
                    <h1>Ready to <span className={styles.redSpan}>Commit</span>? Let’s Build Your <span className={styles.redSpan}>Strongest</span> Self.</h1>
                    <div className={styles.bsuirLogo}>
                        <img src={Bsuir} alt="BSUIR Logo"/>
                    </div>
                </div>
                <div className={styles.contactUsBody}>
                    <div className={styles.contactUsInfo}>
                        <div className={styles.contactUsLogo}>
                            <Logo/>
                            <h3>BSUIR Power</h3>
                        </div>
                        <div>
                            <p>Train with Purpose.</p>
                            <p>Transform with Power.</p>
                        </div>
                    </div>
                    <div className={styles.contactUsWorkTime}>
                        <div><h3>Gym hours</h3></div>
                        <div>
                            <p>Everyday:</p>
                            <p>10:00 AM - 8:00 PM</p>
                        </div>
                    </div>
                    <div className={styles.contactUsLinks}>
                        <div><h3>Quick Links</h3></div>
                        <div>
                            <Link to="/BSUIRPowerLiftingPage">Home</Link>
                            <Link to="/about">About Us</Link>
                            <Link to="/programs">Programs</Link>
                        </div>
                    </div>
                </div>
                <div className={styles.contactUsFooter}>
                    <p>© 2026 BSUIR Power. All rights reserved.</p>
                </div>
            </footer>
        </div>
    )
}

export default MainPage;