import styles from "./AddField.module.scss"
import AddWeek from "../AddWeek/AddWeek.jsx";
import {useContext, memo} from "react";
import {AddPlanContext} from "../../context/AddPlanContext.jsx";

const AddField = () => {
    const {
        exerciseProgram,
        addWeek,
    } = useContext(AddPlanContext);
    return (
        <>
            <div className={styles.allWeeks}>
                {exerciseProgram.plan.weeks.map((week, index) => (
                    <AddWeek week={week} index={index}/>
                ))}
            </div>
            <div className={styles.addWeekButton} style={{zIndex: 0, position: 'relative'}}>
                <h1>Week {exerciseProgram.plan.weeks.length + 1}</h1>
                <div onClick={() => addWeek({
                    weekNumber: exerciseProgram.plan.weeks.length + 1,
                    id: crypto.randomUUID(),
                    days: [],
                })} className={styles.addWeekPlus}>+
                </div>
            </div>
        </>
    )
}

export default memo(AddField)