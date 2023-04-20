import type ReactPDF from '@react-pdf/renderer';

/**
 * Re-exported here to avoid adding a peer dependency on @react-pdf/types
 */
export type Style = ReactPDF.Styles[string];

/**
 * Allows stricter typing for child elements
 */
export type TypedReactNode<T> = React.ReactElement<T> | Array<TypedReactNode<T>> | null | undefined;
