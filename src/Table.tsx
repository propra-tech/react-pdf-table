import { View } from '@react-pdf/renderer';
import * as React from 'react';
import { TableBody } from './TableBody';
import { TableHeader } from './TableHeader';

export interface TableProps {
  data?: any[];
  zebra?: boolean;
  evenRowColor?: string;
  oddRowColor?: string;
  children?: React.ReactNode;
}

export const Table: React.FC<TableProps> = (props) => {
  let tableHeader: JSX.Element = null;
  let tableBody: JSX.Element = null;

  React.Children.forEach(props.children, (c: any) => {
    if (c?.type === TableHeader) {
      tableHeader = c;
    } else if (c?.type === TableBody) {
      tableBody = c;
    }
  });

  tableBody = React.cloneElement(tableBody, {
    data: tableBody.props.data ?? props.data ?? [],
    renderTopBorder: !tableHeader,
    zebra: tableBody.props.zebra ?? props.zebra ?? false,
    evenRowColor: tableBody.props.evenRowColor ?? props.evenRowColor ?? '',
    oddRowColor: tableBody.props.oddRowColor ?? props.oddRowColor ?? '',
  });

  return (
    <View
      style={{
        width: '100%',
      }}
    >
      {tableHeader}
      {tableBody}
    </View>
  );
};
