import { TableCellProps } from 'TableCell';
import { TypedReactNode } from 'Types';
import * as React from 'react';
import { TableRowProps } from './TableRow';
export interface TableHeaderProps extends Omit<TableRowProps<never>, 'children' | 'data'> {
    children?: TypedReactNode<TableCellProps>;
}
export declare const TableHeader: React.FC<TableHeaderProps>;
