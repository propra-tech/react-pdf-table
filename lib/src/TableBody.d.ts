/// <reference types="react" />
import { DataTableCellProps } from 'DataTableCell';
import { TypedReactNode } from 'Types';
import { TableRowProps } from './TableRow';
export interface TableBodyProps<TData> extends Omit<TableRowProps<TData>, 'data'> {
    data?: TData[];
    zebra?: boolean;
    children?: TypedReactNode<DataTableCellProps<TData>>;
}
interface InternalBodyProps<TData> extends TableBodyProps<TData> {
    renderTopBorder?: boolean;
}
export declare const TableBody: <TData = unknown>(props: InternalBodyProps<TData>) => JSX.Element;
export {};
