/// <reference types="react" />
import type ReactPDF from '@react-pdf/renderer';
export type Style = ReactPDF.Styles[string];
export type TypedReactNode<T> = React.ReactElement<T> | Array<TypedReactNode<T>> | null | undefined;
