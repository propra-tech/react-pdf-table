import * as React from "react";
import { Style } from '@react-pdf/types';
export interface TableBorder {
    includeTopBorder?: boolean;
    includeRightBorder?: boolean;
    includeBottomBorder?: boolean;
    includeLeftBorder?: boolean;
}
export interface TableCellProps extends TableBorder {
    weighting?: number;
    style?: Style | Style[];
    textAlign?: "left" | "center" | "right";
    isHeader?: boolean;
    fontSize?: number | string;
    children?: any;
}
export declare class TableCell extends React.PureComponent<TableCellProps> {
    render(): JSX.Element;
}
