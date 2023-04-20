import { Page } from '@react-pdf/renderer';
import { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { DataTableCellProps, TableBodyProps, TableHeaderProps, TableProps, TypedReactNode } from '../src';
type Human = {
    firstName: string;
    lastName: string;
    dob: string;
    country: string;
    city: string;
    phoneNumber?: string;
    randomValues?: {
        one: number;
        two: number;
        three: number;
        four: number;
    };
};
type MetaProps = TableProps & {
    getLastContent: DataTableCellProps<Human>['getContent'];
    orientation: 'landscape' | 'portrait';
    pageSize: React.ComponentProps<typeof Page>['size'];
    firstColumnWeighting: number;
    secondColumnWeighting: number;
    fontSize: number;
    textAlign: 'left' | 'center' | 'right';
    showHeader: boolean;
    customHeader?: TypedReactNode<React.FC<TableHeaderProps>>;
} & Pick<TableBodyProps<Human>, 'includeTopBorder' | 'includeBottomBorder' | 'includeLeftBorder' | 'includeRightBorder'>;
type Story = StoryObj<MetaProps>;
declare const meta: Meta;
export default meta;
export declare const SimpleTable: Story;
export declare const NestedTables: Story;
export declare const SimpleTableWithWeighting: Story;
export declare const TableWithoutBorder: Story;
