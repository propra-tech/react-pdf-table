import { View } from '@react-pdf/renderer';
import { TypedReactNode } from 'Types';
import * as React from 'react';
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

export const Table = (props: TableProps) => {
  let tableHeader: JSX.Element = null;
  let tableBody: JSX.Element = null;

  React.Children.forEach(props.children, (c: any) => {
    if (React.isValidElement(c)) {
      if (c?.type === TableHeader) {
        tableHeader = c;
      } else if (c?.type === TableBody) {
        tableBody = c;
      }
    }
  });

  tableBody = React.cloneElement(tableBody, {
    data: tableBody.props.data ?? props.data ?? [],
    renderTopBorder: !tableHeader && (props.topBorderWhenNoHeader ?? true),
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
