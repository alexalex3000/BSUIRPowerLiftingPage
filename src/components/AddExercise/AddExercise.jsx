import styles from "./AddExercise.module.scss";
import {useContext} from "react";
import {AddPlanContext} from "../../context/AddPlanContext.jsx";

const AddExercise = (props) => {
    const {
        exercise,
        setDefaultExercise
    } = props;

    const {
        deleteExercise
    } = useContext(AddPlanContext);

    return (
        <div key={exercise.id} className={styles.exerciseWrapper}>
            <div className={styles.infoBlock}>
                <p>{exercise.name}: </p>
                <p>Sets: <span>{exercise.sets}</span></p>
                <p>Reps: <span>{exercise.sets}</span></p>
                <p>Intensity: <span>{exercise.intensity}</span></p>
            </div>
            <button type="button" onClick={() => {
                setDefaultExercise(prev => [...prev, exercise.name]);
                deleteExercise(exercise.id)
            }} className={styles.deleteExercise}>−
            </button>
        </div>
    )
}

export default AddExercise