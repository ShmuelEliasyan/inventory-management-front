import {FC} from "react";
import {GraphsDTO} from "../../Types/DTO/Graphs";
import LineGraphComponent from "./LineGraphComponent";
import BarGraphComponent from "./BarGraphComponent";
import PieGraphComponent from "./PieGraphComponent";
import {Box} from "@mui/material";

const GraphsComponent: FC<GraphsComponentProperties> = (props: GraphsComponentProperties) => {
    const {graphs} = props;

    return <>
        <Box sx={{
            display: 'flex',
            height: 280,
            justifyContent: 'space-evenly',
            mt: 6,
            mb: 8
        }}>
            <LineGraphComponent
                graph={graphs.daySalesGraph} label={'Daily Sales'} title={'Daily sales in the past week'}/>
            <LineGraphComponent
                graph={graphs.monthSalesGraph} label={'Monthly Sales'} title={'Monthly sales in the past 6 months'}/>
        </Box>
        <PieGraphComponent graph={graphs.shoesPopularityGraph} label={'Sold Pairs'}
                           title={'Shoes popularity in the last month'}/>
        <BarGraphComponent graph={graphs.workerSalesGraph} label={'Worker Sales'}
                           title={'Workers sales in the last month'}/>
    </>
}

interface GraphsComponentProperties {
    graphs: GraphsDTO;
}

export default GraphsComponent;