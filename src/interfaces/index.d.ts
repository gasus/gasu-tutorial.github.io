export interface ICategory {
    id: string;
    title: string;
}

export interface IMoney {
    id: string;
    count: number;
    isIncome: boolean;
    categoryId: number;
    createdAt: string;
}