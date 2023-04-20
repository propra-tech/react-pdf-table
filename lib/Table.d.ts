/// <reference types="react" />
import { TypedReactNode } from 'Types';
import { TableBody } from './TableBody';
import { TableHeader } from './TableHeader';
export interface TableProps {
    data?: any[];
    zebra?: boolean;
    evenRowColor?: string;
    oddRowColor?: string;
    topBorderWhenNoHeader?: boolean;
    children?: TypedReactNode<typeof TableHeader> | TypedReactNode<typeof TableBody>;
}
export declare const Table: (props: TableProps) => JSX.Element;
