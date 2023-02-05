import {Shoes} from "../Shoes";

export interface ShoesCatalogDTO {
    shoes: Shoes[];
    totalShoesAmount: number;
    totalPagesCount: number;
    sizes: string[];
}