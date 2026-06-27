import {createContext} from "react";
import {useProgramPlan} from "../hooks/useProgramPlan.js";

export const ProgramContext = createContext();

export const ProgramProvider = ({ children }) => {
    const {
        traningPlans,
        setTraningPlans,
        addPlan,
        deleteProgram,
    } = useProgramPlan()

    return (
        <ProgramContext.Provider value={{
            traningPlans,
            setTraningPlans,
            addPlan,
            deleteProgram,
        }}>
            {children}
        </ProgramContext.Provider>
    )
}