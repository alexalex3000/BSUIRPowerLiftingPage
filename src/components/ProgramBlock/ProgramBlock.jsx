import {useParams} from "react-router";
import styles from "./ProgramBlock.module.scss";
import ExerciseDay from "../ExerciseDay/ExerciseDay.jsx";
import {memo, useContext, useMemo} from "react";
import {ProgramContext} from "../../context/ProgramContext.jsx";
import ExerciseWeek from "../ExerciseWeek/ExerciseWeek.jsx";

const ProgramBlock = () => {
    const id = useParams();
    const {
        traningPlans,
    } = useContext(ProgramContext);
    console.log(traningPlans);
    const currPlan = useMemo(() => {
        return traningPlans.find(plan => plan.id == id.id)
    }, [id, traningPlans]);
    return (
        <div className={styles.programBlockWrapper} key={currPlan.id}>
            {currPlan.plan.weeks.map((week, num) => (
                <ExerciseWeek week={week} num={num} />
            ))}
        </div>
    )
}

export default memo(ProgramBlock);