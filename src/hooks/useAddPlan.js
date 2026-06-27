import {useState, useEffect, useRef} from "react";
import {useProgramPlan} from "./useProgramPlan.js";

export const useAddPlan = () => {
    const [exerciseProgram, setExerciseProgram] = useState({
        name: "",
        plan: {
            weeks: [],
        }
    });
    const addWeek = (week) => {
        setExerciseProgram(
            {
                ...exerciseProgram,
                plan: {
                    ...exerciseProgram.plan,
                    weeks: [
                        ...exerciseProgram.plan.weeks,
                        week,
                    ]
                }
            }
        )
    }

    const addDay = (weekNum, day) => {
        setExerciseProgram(
            {
                ...exerciseProgram,
                plan: {
                    ...exerciseProgram.plan,
                    weeks: exerciseProgram.plan.weeks.map((week, index) => {
                        if (index === weekNum) {
                            return {
                                ...week,
                                days: [...week.days, {
                                    day: day,
                                    id: crypto.randomUUID(),
                                    exercises: [],
                                }]
                            }
                        }
                        return week;
                    })
                }
            }
        )

    }

    const addExercise = (dayId, exercise) => {
        setExerciseProgram(
            {
                ...exerciseProgram,
                plan: {
                    ...exerciseProgram.plan,
                    weeks: exerciseProgram.plan.weeks.map((week, index) => {
                        if (week.days.find(day => day.id == dayId)) {
                            return {
                                ...week,
                                days: week.days.map(day => {
                                    if (day.id == dayId) {
                                        return {
                                            ...day,
                                            exercises: [...day.exercises, exercise]
                                        }
                                    }
                                    return day
                                })
                            }
                        }
                        return week;
                    })
                }
            }
        )
    }

    const deleteExercise = (id) => {
        setExerciseProgram((prev) => ({
            ...prev,
            plan: {
                ...prev.plan,
                weeks: prev.plan.weeks.map((week) => ({
                    ...week,
                    days: week.days.map((day) => ({
                        ...day,
                        exercises: day.exercises.filter((exercise) => exercise.id !== id)
                    }))
                }))
            }
        }));
    };

    const deleteDay = (id) => {
        setExerciseProgram({
            ...exerciseProgram,
            plan: {
                ...exerciseProgram.plan,
                weeks: exerciseProgram.plan.weeks.map((week) => ({
                    ...week,
                    days: week.days.filter((day) => day.id != id),
                }))
            }
        })
    }

    const deleteWeek = (id) => {
        setExerciseProgram({
            ...exerciseProgram,
            plan: {
                ...exerciseProgram.plan,
                weeks: exerciseProgram.plan.weeks.filter((week) => week.id != id),
            }
        })
    }


    return {
        exerciseProgram,
        setExerciseProgram,
        addWeek,
        addDay,
        addExercise,
        deleteExercise,
        deleteDay,
        deleteWeek,
    }
}


