/// <reference types="react" />
import { DataTableCellProps } from 'DataTableCell';
import { TypedReactNode } from 'Types';
import { TableBorder, TableCellProps } from './TableCell';
export interface TableRowProps<TData> extends TableBorder {
    fontSize?: number | string;
    textAlign?: 'left' | 'center' | 'right';
    data?: TData;
    zebra?: boolean;
    even?: boolean;
    evenRowColor?: string;
    oddRowColor?: string;
    children?: TypedReactNode<TableCellProps | DataTableCellProps<TData>>;
}
export declare const TableRow: <TData>(props: TableRowProps<TData>) => JSX.Element;
