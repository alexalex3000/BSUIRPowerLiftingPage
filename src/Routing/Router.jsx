import MainPage from "../pages/MainPage/MainPage.jsx";
import {Routes, Route} from "react-router";
import Header from "../components/Header/Header.jsx";
import ArrowUp from "../components/ArrowUp/ArrowUp.jsx";
import TrainingPlanPage from "../pages/TrainingPlanPage/TrainingPlanPage.jsx";
import ProgramBlock from "../components/ProgramBlock/ProgramBlock.jsx";
import {ProgramProvider} from "../context/ProgramContext.jsx";
import AboutUsPage from "../pages/AboutUsPage/AboutUsPage.jsx";
import AddPlanWrapper from "../components/AddPlanWrapper/AddPlanWrapper.jsx";

const Router = () => {
    return (
        <ProgramProvider>
            <Header/>
            <Routes>
                <Route path="/" element={<MainPage/>} />
                <Route path="about" element={<AboutUsPage/>}/>
                <Route path="programs" element={<TrainingPlanPage/>}>
                    <Route path=":id" element={<ProgramBlock/>}/>
                    <Route path="addPlan" element={<AddPlanWrapper/>}/>
                </Route>
            </Routes>
            <ArrowUp/>
        </ProgramProvider>
    )
}

export default Router