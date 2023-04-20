import * as React from 'react';
import { TableBodyProps } from './TableBody';
import { TableBorder } from './TableCell';
export interface TableRowProps extends TableBorder {
    fontSize?: number | string;
    textAlign?: 'left' | 'center' | 'right';
    data?: any;
    zebra?: boolean;
    even?: boolean;
    evenRowColor?: string;
    oddRowColor?: string;
}
export declare const TableRow: React.FC<Partial<TableBodyProps>>;
