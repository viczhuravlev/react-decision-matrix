import { SFC } from 'react';
export declare type Kind = 'info' | 'positive' | 'negative' | 'warning';
export declare type KindMap = Record<Kind, string>;
export interface AlertProps {
    kind: 'info' | 'positive' | 'negative' | 'warning';
}
export declare const Alert: SFC<AlertProps>;
