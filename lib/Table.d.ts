import * as React from 'react';
export interface TableProps {
    data?: any[];
    zebra?: boolean;
    evenRowColor?: string;
    oddRowColor?: string;
    children?: React.ReactNode;
}
export declare const Table: React.FC<TableProps>;
