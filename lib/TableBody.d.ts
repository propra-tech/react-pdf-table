import * as React from 'react';
import { TableRowProps } from './TableRow';
export interface TableBodyProps extends TableRowProps, React.PropsWithChildren {
    data?: any[];
    zebra?: boolean;
}
interface InternalBodyProps extends TableBodyProps {
    renderTopBorder?: boolean;
}
export declare const TableBody: React.FC<InternalBodyProps>;
export {};
