import styles from "./AddDay.module.scss"
import {useState, useContext} from "react";
import AddExercise from "../AddExercise/AddExercise.jsx";
import AddExerciseSettings from "../AddExericiseSettings/AddExerciseSettings.jsx";
import {AddPlanContext} from "../../context/AddPlanContext.jsx";

const ALL_EXERCISES = [
    "Приседания со штангой на спине",
    "Фронтальный присед",
    "Жим лёжа",
    "Жим под наклоном",
    "Французкий жим",
    "Становая тяга сумо",
    "Классическая становая тяга",
    "Румынская тяга"
];

const AddDay = (props) => {
    const {
        day,
        setFreeDays,
        setActiveDay,
        sortDays
    } = props;

    const {
        deleteDay
    } = useContext(AddPlanContext);

    const [defaultExercise, setDefaultExercise] = useState(ALL_EXERCISES);

    const deleteCurrentDay = (id) => {
        setFreeDays(prev => ([day.day, ...prev]));
        setActiveDay(day.day);
        sortDays();
        deleteDay(id);
    }

    return (
        <div className={styles.addDayWrapper}>
            <h2>{day.day}</h2>

            <div className={styles.exercisesList}>
                {
                    day.exercises.map((exercise, index) => (
                        <AddExercise
                            key={exercise.id || index}
                            setDefaultExercise={setDefaultExercise}
                            exercise={exercise}
                        />
                    ))
                }
            </div>

            <AddExerciseSettings
                defaultExercise={defaultExercise}
                setDefaultExercise={setDefaultExercise}
                day={day}
            />

            <div className={styles.deleteDayButton}>
                <button type="button" onClick={() => deleteCurrentDay(day.id)}>
                    −
                </button>
            </div>
        </div>
    )
}

export default AddDay;