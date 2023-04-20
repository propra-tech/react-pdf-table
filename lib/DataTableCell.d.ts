import * as React from 'react';
import { TableCellProps } from './TableCell';
export interface DataTableCellProps<TData> extends TableCellProps {
    data?: TData;
    getContent: (data: TData) => React.ReactNode | JSX.Element | string | number;
}
export declare const DataTableCell: <TData = unknown>(props: DataTableCellProps<TData>) => JSX.Element;
