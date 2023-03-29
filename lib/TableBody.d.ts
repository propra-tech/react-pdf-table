import { TableRowProps } from "./TableRow";
import * as React from "react";
export interface TableBodyProps extends TableRowProps {
    children: any;
    data?: any[];
    zebra?: boolean;
}
interface InternalBodyProps extends TableBodyProps {
    renderTopBorder?: boolean;
    children: any;
}
export declare class TableBody extends React.PureComponent<InternalBodyProps> {
    render(): JSX.Element[];
}
export {};
