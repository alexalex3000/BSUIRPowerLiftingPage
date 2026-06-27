import styles from "./ExerciseBlock.module.scss"

const ExerciseBlock = props => {
    const {
        exercise,
    } = props;
    return (
        <div key={exercise.id} className={styles.exerciseWrapper}>
            <p>{exercise.name}: </p>
            <p>Sets: <span>{exercise.sets}</span></p>
            <p>Reps: <span>{exercise.sets}</span></p>
            {
                exercise.intensity && <p>Intensity: <span>{exercise.intensity}</span>%</p>
            }
        </div>
    )
}

export default ExerciseBlock