import { Estados } from '../manter-estados/estados';

export interface Page {
    content: Array<Estados>;
    totalPages: number;
    totalElements: number;
    last: boolean;
    size: number;
    number: number;
    sort?: any;
    numberOfElements: number;
    first: boolean;
}


