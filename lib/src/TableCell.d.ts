import { Style } from 'Types';
import * as React from 'react';
export interface TableBorder {
    includeTopBorder?: boolean;
    includeRightBorder?: boolean;
    includeBottomBorder?: boolean;
    includeLeftBorder?: boolean;
}
export interface TableCellProps extends TableBorder, React.PropsWithChildren {
    weighting?: number;
    style?: Style | Style[];
    textAlign?: 'left' | 'center' | 'right';
    isHeader?: boolean;
    fontSize?: number | string;
}
export declare const TableCell: React.FC<TableCellProps>;
