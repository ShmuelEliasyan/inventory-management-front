import {FC} from "react";
import {Line} from 'react-chartjs-2';
import {GraphDTO} from "../../Types/DTO/Graphs";
import {getData, getOptions} from "./GraphsConstants";

const LineGraphComponent: FC<LineGraphComponentProperties> = (props: LineGraphComponentProperties) => {
    const {graph, label, title} = props;

    const data = getData(graph, label);

    const options = getOptions(title)

    return <Line
        data={data}
        options={options}
    />

}

interface LineGraphComponentProperties {
    graph: GraphDTO;
    label: string;
    title: string;
}

export default LineGraphComponent;