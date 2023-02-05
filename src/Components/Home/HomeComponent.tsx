import React, {FC} from 'react';
import {Line} from 'react-chartjs-2';
import {
    CategoryScale,
    Chart as ChartJS,
    Legend,
    LinearScale,
    LineElement,
    PointElement,
    Title,
    Tooltip,
} from 'chart.js';
import {DATA, OPTIONS} from "./HomeConstants";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);
const HomeComponent: FC = () => {
    return <Line options={OPTIONS} data={DATA}/>;
};

export default HomeComponent;
