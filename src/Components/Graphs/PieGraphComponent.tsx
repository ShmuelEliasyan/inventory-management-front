import {FC} from "react";
import {Pie} from 'react-chartjs-2';
import {GraphDTO} from "../../Types/DTO/Graphs";
import {getData, getOptions} from "./GraphsConstants";
import {Box} from "@mui/material";


const PieGraphComponent: FC<PieGraphComponentProperties> = (props: PieGraphComponentProperties) => {
    const {graph, label, title} = props;

    const data = getData(graph, label);

    const options = getOptions(title)

    return <Box sx={{
        display: 'flex',
        height: 550,
        justifyContent: 'space-evenly',
        mb: 6
    }}>
        <Pie
            data={data}
            options={options}
        />
    </Box>
}

interface PieGraphComponentProperties {
    graph: GraphDTO;
    label: string;
    title: string;
}

export default PieGraphComponent;