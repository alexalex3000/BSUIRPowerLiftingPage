import styles from './TrainingPlanPage.module.scss';
import { useLocation, NavLink, Outlet, useNavigate, useParams } from "react-router";
import { useContext } from "react";
import { ProgramContext } from "../../context/ProgramContext.jsx";

const TrainingPlanPage = () => {
    const {
        traningPlans,
        deleteProgram,
    } = useContext(ProgramContext);
    const location = useLocation();
    const navigate = useNavigate();
    const { id: activeProgramId } = useParams();

    const isRoot = location.pathname === "/programs";

    const searchPlaceToNavigate = () => {
        if (traningPlans.length > 1) {
            return `/programs/${traningPlans[0].id}`;
        } else {
            return '/programs';
        }
    }
    const recommendedPlans = traningPlans.filter(plan => plan.recommended === true);
    const personalPlans = traningPlans.filter(plan => !plan.recommended);
    return (
        <div className="wrapper">
            <h1 className={styles.planTitle}>Our <span className="redSpan">Programs</span></h1>
            <div className={styles.redLight}></div>
            <div className={styles.traninigBlock}>
                <nav>
                    {
                        traningPlans.length > 0 && <div className={styles.navigatePrograms}>
                            {
                                recommendedPlans.length > 0 && <div className={styles.recommendedPlans}>
                                    <div className={styles.linksTitle}><h3>Recommended plans</h3></div>
                                    {
                                        recommendedPlans.map(plan => (
                                            <div key={plan.id} className={styles.linkToProgram}>
                                                <NavLink to={`${plan.id}`}>
                                                    <p>{plan.name}</p>
                                                </NavLink>
                                                <button onClick={(e) => {
                                                    e.preventDefault();
                                                    if (activeProgramId === plan.id) {
                                                        const placeToNavigate = searchPlaceToNavigate();
                                                        navigate(placeToNavigate);
                                                    }
                                                    deleteProgram(plan.id);
                                                }} type="button">−
                                                </button>
                                            </div>
                                        ))
                                    }
                                </div>
                            }
                            {
                                personalPlans.length > 0 && <div className={styles.personalPlans}>
                                    <div className={styles.linksTitle}><h3>Your personal plans</h3></div>
                                    {
                                        personalPlans.map(plan => (
                                            <div key={plan.id} className={styles.linkToProgram}>
                                                <NavLink to={`${plan.id}`}>
                                                    <p>{plan.name}</p>
                                                </NavLink>
                                                <button onClick={(e) => {
                                                    e.preventDefault();
                                                    if (activeProgramId === plan.id) {
                                                        const placeToNavigate = searchPlaceToNavigate();
                                                        navigate(placeToNavigate);
                                                    }
                                                    deleteProgram(plan.id);
                                                }} type="button">−
                                                </button>
                                            </div>
                                        ))
                                    }
                                </div>
                            }
                        </div>
                    }
                    <NavLink to="addPlan">Add your own program</NavLink>
                </nav>
                <div className={styles.programBlock}>
                    {isRoot ? <h3>CHOOSE OR CREATE YOUR POWERLIFTING PROGRAM</h3> : ""}
                    <Outlet/>
                </div>
            </div>
        </div>
    )
}

export default TrainingPlanPage;