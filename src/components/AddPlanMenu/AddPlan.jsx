import {useContext, useEffect, useRef, useState} from "react";
import styles from "./AddPlan.module.scss"
import AddField from "../AddField/AddField.jsx";
import {AddPlanContext} from "../../context/AddPlanContext.jsx";
import {ProgramContext, ProgramProvider} from "../../context/ProgramContext.jsx";
import SubmitButton from "../SubmitButton/SubmitButton.jsx";

const AddPlan = () => {
    const formRef = useRef(null);
    const [badPlan, setBadPlan] = useState(false);
    const {
        addPlan
    } = useContext(ProgramContext);

    const {
        exerciseProgram,
        setExerciseProgram
    } = useContext(AddPlanContext);

    const checkEmptyPlan = (verifiablePlan) => {
        return verifiablePlan?.plan?.weeks[0]?.days[0]?.exercises.length > 0 && verifiablePlan.name.length > 0 ? true : false;
    }

    const formSubmit = (e, formRef) => {
        e.preventDefault();
        const boolPlan = checkEmptyPlan({
            ...exerciseProgram,
            id: crypto.randomUUID(),
            name: new FormData(formRef.current).get("programName")
        });
        if(!boolPlan) {
            setBadPlan(true);
            console.log(123);
            setTimeout(() => {
                setBadPlan(false);
            }, 300)
            return;
        }
        addPlan({
            ...exerciseProgram,
            id: crypto.randomUUID(),
            name: new FormData(formRef.current).get("programName")
        })
        setExerciseProgram({
            name: "",
            plan: {
                weeks: [],
            }
        })
        formRef.current.elements.programName.value = "";
    }
    return (
        <form ref={formRef} className={`${styles.addForm} ${badPlan ? styles.errorShake : ''}`}>
            <div className={styles.setNameInput}>
                <label htmlFor="programName">Program name: </label>
                <input placeholder="Enter program name"
                       type="text"
                       id="programName"
                       name="programName"
                />
            </div>
            <AddField/>
            <SubmitButton formSubmit={formSubmit} formRef={formRef}/>
        </form>
    )
}
export default AddPlan