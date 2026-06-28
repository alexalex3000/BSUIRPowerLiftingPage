import styles from './ExerciseWeek.module.scss';
import ExerciseDay from "../ExerciseDay/ExerciseDay.jsx";
import { useEffect, useRef, useState } from "react";
import { memo } from "react";

const ExerciseWeek = (props) => {
    const {
        week,
        num,
    } = props;
    const [showWeek, setShowWeek] = useState(false);
    const fadeUpElem = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("shortFadeUp");
                    observer.unobserve(entry.target);
                }
            })
        }, { threshold: 0.2 })

        observer.observe(fadeUpElem.current);

        return () => {
            observer.disconnect();
        }
    }, [])

    return (
        <div ref={fadeUpElem} className={styles.weekWrapper}
             style={{ animationDuration: `${(num > 4 ? 50 : 100) * num + 1}ms` }}>
            <h1>Week {num + 1}</h1>
            <div onClick={() => setShowWeek(prev => !prev)}
                 className={`${styles.rotateArrow} ${showWeek ? styles.rotating : ""}`}>▲
            </div>
            <div className={`${styles.weekContent} ${showWeek ? styles.visibleHandler : ""}`}>
                <div className={styles.gapBlock}>
                    {
                        week.days.map(day => (
                            <ExerciseDay key={day.id} day={day} />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default memo(ExerciseWeek);