import styles from "./ExerciseDay.module.scss"
import ExerciseBlock from "../ExerciseBlock/ExerciseBlock.jsx";
import {memo} from "react";

const ExerciseDay = props => {
    const {
        day
    } = props;
    return (
        <div className={styles.dayWrapper}>
            <h2>{day.day}</h2>
            <div className={styles.dayContent}>
                {day.exercises.length > 0 && day.exercises.map(exercise => (
                    <ExerciseBlock exercise={exercise}/>
                ))}
            </div>
        </div>
    )
}

export default memo(ExerciseDay)