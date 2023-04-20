import * as React from 'react';
import { TableRowProps } from './TableRow';
interface TableHeaderProps extends TableRowProps, React.PropsWithChildren {
}
export declare const TableHeader: React.FC<TableHeaderProps>;
export {};
