import {FC} from "react";
import {Bar} from 'react-chartjs-2';
import {GraphDTO} from "../../Types/DTO/Graphs";
import {getData, getOptions} from "./GraphsConstants";
import {Box} from "@mui/material";


const BarGraphComponent: FC<BarGraphComponentProperties> = (props: BarGraphComponentProperties) => {
    const {graph, label, title} = props;

    const data = getData(graph, label);

    const options = getOptions(title)

    return <Box sx={{
        display: 'flex',
        height: 400,
        justifyContent: 'space-evenly',
        mb: 2
    }}>
        <Bar
            data={data}
            options={options}
        />
    </Box>
}

interface BarGraphComponentProperties {
    graph: GraphDTO;
    label: string;
    title: string;
}

export default BarGraphComponent;