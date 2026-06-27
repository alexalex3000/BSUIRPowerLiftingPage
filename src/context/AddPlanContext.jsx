import {createContext} from "react";
import {useAddPlan} from "../hooks/useAddPlan.js";

export const AddPlanContext = createContext({});

export const AddPlanProvider = ({children}) => {
    const {
        exerciseProgram,
        addWeek,
        addDay,
        addExercise,
        deleteExercise,
        deleteDay,
        deleteWeek,
        setExerciseProgram,
    } = useAddPlan()

    return (
        <AddPlanContext.Provider value={
            {
                exerciseProgram,
                addWeek,
                addDay,
                addExercise,
                deleteExercise,
                deleteDay,
                deleteWeek,
                setExerciseProgram,
            }
        }>
            {children}
        </AddPlanContext.Provider>
    )
}