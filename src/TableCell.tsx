import { Text, View } from '@react-pdf/renderer';
import { Style } from 'Types';
import * as React from 'react';
import { getDefaultBorderIncludes, transformToArray } from './Utils';
/**
 * Whether to include borders or not.
 * Depending on the context some toggles will not have any effect.
 */
export interface TableBorder {
  /**
   * Include the top border. Default true.
   */
  includeTopBorder?: boolean;

  /**
   * Include the right border. Default true.
   */
  includeRightBorder?: boolean;

  /**
   * Include the bottom border. Default true.
   */
  includeBottomBorder?: boolean;

  /**
   * Include the left border. Default true.
   */
  includeLeftBorder?: boolean;
}

export interface TableCellProps extends TableBorder, React.PropsWithChildren {
  /**
   * The weighting of a cell based on the flex layout style.
   * This value is between 0..1, if not specified 1 is assumed, this will take up the remaining available space.
   */
  weighting?: number;

  /**
   * Extra styling to apply. These will override existing style with the same key.
   */
  style?: Style | Style[];

  /**
   * How to align the text
   */
  textAlign?: 'left' | 'center' | 'right';

  /**
   * Whether this is a header cell or not. If not defined it will be false.
   */
  isHeader?: boolean;

  /**
   * The font-size to apply to the cell.
   */
  fontSize?: number | string;
}

/**
 * This component displays the associated content of it's children.
 */
export const TableCell: React.FC<TableCellProps> = (props: TableCellProps) => {
  let content: TableCellProps['children'];

  if (typeof props.children === 'string') {
    content = <Text>{props.children}</Text>;
  } else if (typeof props.children === 'number') {
    content = <Text>{props.children.toString()}</Text>;
  } else {
    content = props.children;
  }

  const { includeRightBorder } = getDefaultBorderIncludes(props);
  const defaultStyle: Style = {
    flex: props.weighting ?? 1,
    // @ts-ignore
    justifyContent: 'stretch',
    textAlign: props.textAlign ?? 'left',
    fontSize: props.fontSize ?? (props.isHeader === true ? 14 : 12),
    borderRight: includeRightBorder && '1pt solid black',
    wordWrap: 'break-word',
    whiteSpace: 'pre-wrap',
    overflow: 'hidden',
  };

  const mergedStyles: Style[] = [defaultStyle, ...transformToArray(props.style)];

  return (
    <View style={mergedStyles} wrap={true}>
      {content}
    </View>
  );
};
