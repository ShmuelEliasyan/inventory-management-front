import {GraphDTO} from "../../Types/DTO/Graphs";

export const INITIAL_GRAPHS_STATE = {
    daySalesGraph: {
        labels: [],
        data: []
    }, shoesPopularityGraph: {
        labels: [],
        data: []
    }, workerSalesGraph: {
        labels: [],
        data: []
    },
    monthSalesGraph: {
        labels: [],
        data: []
    }
};


export const getData = (graph: GraphDTO, label: string) => {
    return {
        datasets: [{
            borderColor: 'black',
            backgroundColor: [...Array(10)].map((e, index) => generateRandomColor(index + 1)),
            data: graph.data, label
        }], labels: graph.labels
    };
}

export const getOptions = (title: string) => {
    return {
        plugins: {
            title: {
                display: true,
                text: title
            },
            legend: {
                display: false
            }
        }
    };
}

const generateRandomColor = (index: number) => {
    const x = Math.floor(Math.random() * index * 25.6);
    const y = Math.floor(Math.random() * index * 25.6);
    const z = Math.floor(Math.random() * index * 25.6);
    return "rgb(" + x + "," + y + "," + z + ")";
}

