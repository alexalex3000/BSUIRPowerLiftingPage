import styles from "./AboutUsPage.module.scss"
import GoTo from "../../assets/goTo.svg?react"
import Barbell from "../../assets/barbell.svg?react"
import {useEffect, useRef} from "react";
import SquatImg from "../../assets/squat-comp.jpg";
import BenchImg from "../../assets/bench-comp.jpg";
import DeadliftImg from "../../assets/deadlift-comp.jpg";

const AboutUs = () => {
    const scrollElement = useRef([]);
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('fadeUp');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.2 });

        scrollElement.current.forEach(el => {
            if (el) observer.observe(el);
        });

        return () => {
            observer.disconnect();
        };
    }, []);
    return (
        <div className="wrapper">
            <section className={styles.topHero}>
                <div className="fadeUp fadeUpElements">
                    <div className={styles.heroText}>
                        <div className={styles.miniTag}>EST. 2024 • BSUIR TEAM</div>
                        <h1>The <span className={styles.redSpan}>Iron</span> Core of BSUIR.</h1>
                        <p>More than just a gym. We are a community of student-athletes dedicated to the relentless pursuit of strength, discipline, and excellence.</p>
                    </div>
                </div>
                <div className="fadeUp fadeUpElements">
                    <div className={styles.sbdVisualCards}>
                        <div className={styles.card}>
                            <div
                                className={`${styles.cardBg} ${styles.bgSquat}`}
                                style={{ backgroundImage: `url(${SquatImg})` }}
                            ></div>
                            <div className={styles.cardContent}>
                                <h3>SQUAT</h3>
                                <p>Foundation of Strength</p>
                            </div>
                        </div>

                        <div className={styles.card}>
                            <div
                                className={`${styles.cardBg} ${styles.bgBench}`}
                                style={{ backgroundImage: `url(${BenchImg})` }}
                            ></div>
                            <div className={styles.cardContent}>
                                <h3>BENCH</h3>
                                <p>Raw Upper Power</p>
                            </div>
                        </div>

                        <div className={styles.card}>
                            <div
                                className={`${styles.cardBg} ${styles.bgDeadlift}`}
                                style={{ backgroundImage: `url(${DeadliftImg})` }}
                            ></div>
                            <div className={styles.cardContent}>
                                <h3>DEADLIFT</h3>
                                <p>Pure Willpower</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section ref={(el) => scrollElement.current[0] = el} className={`${styles.historyBlock} fadeUpElements`}>
                <div className={styles.historyWrapper}>
                    <div className={styles.sectionBadge}>Our Legacy</div>
                    <div className={styles.historyContent}>
                        <h2>Forged in <span className={styles.redSpan}>Discipline</span></h2>
                        <p>Founded on the principles of the IPF, the BSUIR Powerlifting team represents the highest standard of collegiate strength sports. We train with purpose, balancing rigorous academic demands with elite physical preparation.</p>
                        <p>Our facility is equipped with competition-grade combo racks, calibrated plates, and specialized bars to ensure every lift meets strict international standards.</p>
                    </div>
                    <div className={`${styles.historyStats} fadeUpElements`} ref={(el) => scrollElement.current[1] = el}>
                        <div className={styles.statBox}>
                            <span className={styles.redSpan}>15+</span>
                            <p>Active Lifters</p>
                        </div>
                        <div className={styles.statBox}>
                            <span className={styles.redSpan}>IPF</span>
                            <p>We prefer only official federations</p>
                        </div>
                        <div className={styles.statBox}>
                            <span className={styles.redSpan}>#5</span>
                            <p>University Team in Belarus</p>
                        </div>
                    </div>
                </div>
            </section>

            <div className={styles.powerliftingTrack}>
                <div className={styles.track}>
                    <span>SQUAT BENCH DEADLIFT  SQUAT BENCH DEADLIFT  SQUAT BENCH DEADLIFT  SQUAT BENCH DEADLIFT  SQUAT BENCH DEADLIFT  SQUAT BENCH DEADLIFT</span>
                    <span>SQUAT BENCH DEADLIFT  SQUAT BENCH DEADLIFT  SQUAT BENCH DEADLIFT  SQUAT BENCH DEADLIFT  SQUAT BENCH DEADLIFT  SQUAT BENCH DEADLIFT</span>
                </div>
            </div>

            <section className={styles.missionBlock}>
                <div ref={(el) => scrollElement.current[2] = el} className={`${styles.missionCard} fadeUpElements`}>
                    <div className={styles.iconWrapper}>
                        <Barbell />
                    </div>
                    <h2>Our Mission</h2>
                    <p>To cultivate physical and mental resilience through the discipline of powerlifting, providing students with a platform to achieve competitive excellence and personal growth on and off the platform.</p>
                    <button>
                        JOIN THE ROSTER <GoTo/>
                    </button>
                </div>
            </section>
        </div>
    )
}

export default AboutUs;