import {FC, useEffect, useState} from "react";
import GraphsComponent from "./GraphsComponent";
import {setErrorAlertMessage, setIsLoading} from "../../Services/Redux/applicationSlice";
import {GRAPHS_API} from "../../API/InventoryManagement/GraphsAPI";
import {useDispatch} from "react-redux";
import {GraphsDTO} from "../../Types/DTO/Graphs";
import {INITIAL_GRAPHS_STATE} from "./GraphsConstants";

const GraphsContainer: FC = () => {
    const dispatch = useDispatch();

    const [graphs, setGraphs] = useState<GraphsDTO>(INITIAL_GRAPHS_STATE);

    useEffect(() => {
        dispatch(setIsLoading(true));
        GRAPHS_API.get(`get-graphs`)
            .then(response => {
                let tempGraphs: GraphsDTO = response.data;
                setGraphs(tempGraphs)
                dispatch(setIsLoading(false));
            }).catch(error => {
            dispatch(setErrorAlertMessage('Error while trying to get graphs data'));
            console.error(error);
            dispatch(setIsLoading(false));
        });
    }, []);

    return <GraphsComponent graphs={graphs}/>
}

export default GraphsContainer;