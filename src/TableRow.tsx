import { View } from '@react-pdf/renderer';
import { DataTableCellProps } from 'DataTableCell';
import { TypedReactNode } from 'Types';
import * as React from 'react';
import { TableBorder, TableCellProps } from './TableCell';
import { getDefaultBorderIncludes } from './Utils';

export interface TableRowProps<TData> extends TableBorder {
  /**
   * The font size as a valid unit defined in react-pdf.
   */
  fontSize?: number | string;

  /**
   * Whether to align the text. Defaults to left.
   */
  textAlign?: 'left' | 'center' | 'right';

  /**
   * Any data associated, relevant if the parent is a {@see DataTableCell}.
   */
  data?: TData;

  /**
   * Whether rows have alternating styles
   */
  zebra?: boolean;

  /**
   * Whether this row is even (true) or odd (false)
   */
  even?: boolean;

  /**
   * Specify the color of even rows
   */
  evenRowColor?: string;

  /**
   * Specify the color of odd rows
   */
  oddRowColor?: string;

  /**
   * Only {@see DataTableCell} or {@see TableCell} elements are valid children
   */
  children?: TypedReactNode<TableCellProps | DataTableCellProps<TData>>;
}

/**
 * This component describes how to display a row.
 */
export const TableRow = <TData,>(props: TableRowProps<TData>) => {
  const rowCells = React.Children.toArray(props.children);
  const { includeLeftBorder, includeBottomBorder, includeRightBorder, includeTopBorder } = getDefaultBorderIncludes(props);

  const { numberOfWeightingsDefined, remainingWeighting } = rowCells.reduce(
    (result, child) =>
      React.isValidElement<{ weighting?: number }>(child) && child.props.weighting !== undefined
        ? {
            numberOfWeightingsDefined: result.numberOfWeightingsDefined + 1,
            remainingWeighting: result.remainingWeighting - child.props.weighting,
          }
        : result,
    {
      numberOfWeightingsDefined: 0,
      remainingWeighting: 1,
    }
  );

  const weightingsPerNotSpecified = Math.ceil(remainingWeighting / (rowCells.length - numberOfWeightingsDefined));

  const rowColor = (props.zebra || props.evenRowColor) && props.even ? props.evenRowColor || 'lightgray' : props.oddRowColor || '';

  return (
    <View
      style={{
        borderBottom: includeBottomBorder && '1pt solid black',
        borderRight: includeRightBorder && '1pt solid black',
        borderLeft: includeLeftBorder && '1pt solid black',
        borderTop: includeTopBorder && '1pt solid black',
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: rowColor,
        marginTop: -1,
      }}
    >
      {React.Children.map(props.children, (rc, columnIndex) =>
        React.isValidElement(rc)
          ? React.cloneElement(rc, {
              weighting: rc.props.weighting ?? weightingsPerNotSpecified,
              ...(props.data && { data: props.data as TData }),
              key: columnIndex,
              fontSize: props.fontSize,
              textAlign: props.textAlign,
              includeLeftBorder: includeLeftBorder && columnIndex === 0,
              includeRightBorder: includeRightBorder && columnIndex !== rowCells.length - 1,
            })
          : null
      )}
    </View>
  );
};
