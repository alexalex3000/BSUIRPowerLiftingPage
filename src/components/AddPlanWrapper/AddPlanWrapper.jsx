import {AddPlanProvider} from "../../context/AddPlanContext.jsx";
import AddPlan from "../AddPlanMenu/AddPlan.jsx";

const AddPlanWrapper = () => {
    return (
        <AddPlanProvider>
            <AddPlan/>
        </AddPlanProvider>
    )
}

export default AddPlanWrapper;