export interface ShoesWithShoesAmount {
    shoes: Shoes;
    shoesAmount: ShoesAmount[];
}

export interface Shoes {
    barcode: string;
    sizes: string;
    imageUrl: string;
    name: string;
    cost: number;
}

export interface ShoesAmount {
    barcode: string;
    size: string;
    amount: number | '';
}