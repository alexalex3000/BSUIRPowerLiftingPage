import styles from './AddWeek.module.scss';
import {useState, useRef, useContext, useEffect} from "react";
import {AddPlanContext} from "../../context/AddPlanContext.jsx";
import AddDay from "../AddDay/AddDay.jsx";

const DEFAULT_DAY = ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"]

const AddWeek = (props) => {
    const {
        week,
        index,
    } = props;

    const {
        addDay,
        exerciseProgram,
        deleteWeek
    } = useContext(AddPlanContext)

    const currentWeek = exerciseProgram.plan.weeks[index];
    const fadeUpElem = useRef(null);
    const [showDaysList, setShowDaysList] = useState(false);
    const daysListRef = useRef(null);
    const [freeDays, setFreeDays] = useState(DEFAULT_DAY)
    const [activeDay, setActiveDay] = useState(freeDays[0]);


    const changeDay = (e) => {
        setActiveDay(`${e.target.innerHTML}`)
    }

    const sortDays = () => {
        setFreeDays(prev => prev.sort((a, b) => DEFAULT_DAY.indexOf(a) - DEFAULT_DAY.indexOf(b)));
    }

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("shortFadeUp");
                    observer.unobserve(entry.target);
                }
            })
        }, {threshold: 0.1})

        observer.observe(fadeUpElem.current);

        const handleShowList = (e) => {
            if (daysListRef.current && !daysListRef.current.contains(e.target)) {
                setShowDaysList(false);
            }
        }

        document.addEventListener("mousedown", handleShowList);

        return () => {
            observer.disconnect();
            document.removeEventListener("mousedown", handleShowList);
        }
    }, [])

    return (
        <div ref={fadeUpElem} className={styles.weekWrapper} style={{ zIndex: 100 - index, position: 'relative' }}>
            <h1>Week {index + 1}</h1>
            <div className={styles.allWeeksDays}>
                {
                    currentWeek.days.map(day => (
                        <AddDay sortDays={sortDays} setActiveDay={setActiveDay} setFreeDays={setFreeDays} day={day}/>
                    ))
                }
            </div>
            {freeDays.length > 0 &&
                <div className={styles.addWeekButton}>
                    <div className={`${styles.selectDays} ${showDaysList ? styles.open : ""}`} ref={daysListRef} onClick={() => {setShowDaysList(prev => !prev)}}>
                        <div>
                            {activeDay}
                        </div>
                        {showDaysList && <ul className={styles.daysListMain}>
                            {freeDays.map(day => (
                                <li onClick={changeDay} className={`${styles.customOption} ${day === activeDay ? styles.selected : ""}`} key={day} value={day}>{day}</li>
                            ))}
                        </ul>}
                    </div>
                    <button type="button"
                            onClick={() => {
                                addDay(index, activeDay)
                                setFreeDays(freeDays.filter(day => activeDay != day))
                                if(freeDays.length == 1){
                                    setActiveDay(freeDays[0]);
                                }
                                if(freeDays.length > 1){
                                    setActiveDay(freeDays[1]);
                                }
                            }}
                            className={styles.addWeekPlus}>
                        +
                    </button>
                </div>
            }
            <div className={styles.deleteWeekButton}>
                <button type="button" onClick={() => deleteWeek(week.id)}>−</button>
            </div>
        </div>
    )
}

export default AddWeek;