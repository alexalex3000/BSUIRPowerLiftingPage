import styles from "./AddExericiseSettings.module.scss";
import {useRef, useEffect, useState, useContext} from "react";
import {AddPlanContext} from "../../context/AddPlanContext.jsx";

const MAIN_EXERCISES = ["Приседания со штангой на спине", "Фронтальный присед", "Жим лёжа", "Жим под наклоном", "Становая тяга сумо", "Классическая становая тяга"];

const AddExerciseSettings = (props) => {
    const {
        day, setDefaultExercise, defaultExercise
    } = props;
    const [exericiseSettings, setExerciseSettings] = useState({
        id: crypto.randomUUID(), name: "", sets: 0, reps: 0, intensity: 0,
    });
    const [errors, setErrors] = useState({
        sets: false, reps: false, intensity: false,
    });
    const {addExercise} = useContext(AddPlanContext);
    const [showIntensity, setShowIntensity] = useState(true);

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);
    const inputBlockRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsDropdownOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);

        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    useEffect(() => {
        if (exericiseSettings.name.length === 0 || MAIN_EXERCISES.includes(exericiseSettings.name)) {
            setShowIntensity(true);
        } else {
            setShowIntensity(false);
        }
    }, [exericiseSettings.name]);

    useEffect(() => {
        setExerciseSettings({
            id: crypto.randomUUID(), name: defaultExercise[0], sets: "", reps: "", intensity: "",
        });
    }, [defaultExercise]);

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setExerciseSettings((prev) => ({
            ...prev, [name]: value,
        }));
        if (Object.values(errors).includes(true) && value != 0) {
            setErrors({
                sets: false, reps: false, intensity: false,
            })
        }
    };

    const addNewExercise = () => {
        const newErrors = {
            sets: Number(exericiseSettings.sets) === 0 || Number(exericiseSettings.sets) < 0,
            reps: Number(exericiseSettings.reps) === 0 || Number(exericiseSettings.reps) < 0,
            intensity: Number(exericiseSettings.intensity) === 0 || Number(exericiseSettings.intensity) < 0,
        }

        setErrors(newErrors);
        if (Object.values(newErrors).includes(true)) {
            return;
        }

        addExercise(day.id, exericiseSettings);
        setDefaultExercise((prev) => prev.filter((exercise) => exercise !== exericiseSettings.name));
    }

    const handleSelectOption = (exercise) => {
        setExerciseSettings((prev) => ({
            ...prev, name: exercise,
        }));
        setIsDropdownOpen(false);
    };

    return (<div className={styles.exerciseSettingsWrapper}>
            {defaultExercise.length > 0 && (<div className={styles.addExerciseBlock}>

                    <div className={styles.customSelectWrapper} ref={dropdownRef}>
                        <div
                            className={`${styles.customSelectTrigger} ${isDropdownOpen ? styles.open : ''}`}
                            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                        >
                            {exericiseSettings.name}
                        </div>

                        {isDropdownOpen && (<ul className={styles.customSelectOptions}>
                                {defaultExercise.map((exercise, index) => (<li
                                        key={`${exercise}-${index}`}
                                        className={`${styles.customOption} ${exericiseSettings.name === exercise ? styles.selected : ''}`}
                                        onClick={() => handleSelectOption(exercise)}
                                    >
                                        {exercise}
                                    </li>))}
                            </ul>)}
                    </div>

                    <div className={styles.allInputs} ref={inputBlockRef}>
                        <div className={`${styles.enterExerciseSets} ${errors.sets ? styles.errorInput : null}`}>
                            <label htmlFor="sets">Sets</label>
                            <input placeholder="0"
                                   onChange={handleChange} value={exericiseSettings.sets} name="sets" id="sets"
                                   type="number"/>
                        </div>
                        <div className={`${styles.enterExerciseReps} ${errors.reps ? styles.errorInput : null}`}>
                            <label htmlFor="reps">Reps</label>
                            <input placeholder="0"
                                   onChange={handleChange} value={exericiseSettings.reps} name="reps" id="reps"
                                   type="number"/>
                        </div>
                        {showIntensity && (
                            <div className={`${styles.enterIntensity} ${errors.intensity ? styles.errorInput : null}`}>
                                <label htmlFor="intensity">Intensity</label>
                                <input placeholder="0"
                                       onChange={handleChange} value={exericiseSettings.intensity} name="intensity"
                                       id="intensity" type="number"/>
                                <span>%</span>
                            </div>)}
                    </div>
                    <button
                        type="button"
                        onClick={addNewExercise}
                        className={styles.addExerciseButton}
                    >
                        +
                    </button>
                </div>)}
        </div>);
};

export default AddExerciseSettings;