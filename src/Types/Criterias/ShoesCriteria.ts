export interface ShoesCriteria {
    page?: number;
    pageSize?: number;
    sortBy?: string;
    sortDirection?: SORT_DIRECTION_TYPES;
    shoesSizes?: String;
}

export type SORT_DIRECTION_TYPES = 'ASC' | 'DESC';