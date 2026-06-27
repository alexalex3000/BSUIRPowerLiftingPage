import {useState, useEffect} from "react";

const generateDefaultPlans = () => [{
    id: crypto.randomUUID(),
    name: "Verhochancki Power Cycle",
    recommended: true,
    plan: {
        weeks: Array.from({ length: 8 }, (_, i) => ({
            weekNumber: i + 1,
            id: crypto.randomUUID(),
            days: [
                {
                    day: "Понедельник",
                    id: crypto.randomUUID(),
                    exercises: [
                        { id: crypto.randomUUID(), name: "Приседания", sets: 4, reps: 6, intensity: 70 + i * 2 },
                        { id: crypto.randomUUID(), name: "Жим ногами", sets: 3, reps: 10},
                        { id: crypto.randomUUID(), name: "Сгибания ног в тренажере", sets: 3, reps: 12},
                        { id: crypto.randomUUID(), name: "Пресс (скручивания)", sets: 3, reps: 15}
                    ]
                },
                {
                    day: "Среда",
                    id: crypto.randomUUID(),
                    exercises: [
                        { id: crypto.randomUUID(), name: "Жим лёжа", sets: 4, reps: 6, intensity: 65 + i * 2 },
                        { id: crypto.randomUUID(), name: "Жим гантелей под углом", sets: 3, reps: 10},
                        { id: crypto.randomUUID(), name: "Отжимания на брусьях", sets: 3, reps: 10},
                        { id: crypto.randomUUID(), name: "Тяга верхнего блока", sets: 3, reps: 10}
                    ]
                },
                {
                    day: "Пятница",
                    id: crypto.randomUUID(),
                    exercises: [
                        { id: crypto.randomUUID(), name: "Становая тяга", sets: 3, reps: 5, intensity: 75 + i * 1.5 },
                        { id: crypto.randomUUID(), name: "Гиперэкстензия", sets: 3, reps: 12},
                        { id: crypto.randomUUID(), name: "Тяга штанги в наклоне", sets: 3, reps: 8},
                        { id: crypto.randomUUID(), name: "Лицевая тяга (на заднюю дельту)", sets: 3, reps: 15}
                    ]
                }
            ]
        }))
    }
}];

export const useProgramPlan = () => {
    const [traningPlans, setTraningPlans] = useState(() => {
        const savedPlans = localStorage.getItem("traningPlans");
        const recommendedPlans = localStorage.getItem("recomendedPlans");
        let parsedSavedPlans = JSON.parse(savedPlans);
        let parsedRecommendedPlans = JSON.parse(recommendedPlans);

        if(recommendedPlans == null){
            const defaultPlans = generateDefaultPlans();
            localStorage.setItem("recomendedPlans", JSON.stringify(defaultPlans));
            parsedRecommendedPlans = defaultPlans;
        }

        if(savedPlans == null){
            return parsedRecommendedPlans;
        }
        if(parsedSavedPlans.length === 0){
            return parsedRecommendedPlans;
        }

        return [...parsedRecommendedPlans, ...parsedSavedPlans];
    });

    useEffect(() => {
        const onlyUserPlans = traningPlans.filter(plan => plan.recommended != true)
        localStorage.setItem("traningPlans", JSON.stringify(onlyUserPlans));
    }, [traningPlans]);

    const addPlan = (plan) => {
        setTraningPlans(prev => [...prev, plan]);
        console.log(traningPlans);
    }

    const deleteProgram = (id) => {
        setTraningPlans(prev => prev.filter(p => p.id !== id));
    }

    return {
        traningPlans,
        setTraningPlans,
        addPlan,
        deleteProgram
    };
}