export interface GraphsDTO {
    monthSalesGraph: GraphDTO;
    daySalesGraph: GraphDTO;
    shoesPopularityGraph: GraphDTO;
    workerSalesGraph: GraphDTO;
}

export interface GraphDTO {
    labels: String[];
    data: number[];
}
