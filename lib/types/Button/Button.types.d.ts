import { ReactNode } from 'react';
export declare type Kind = 'primary' | 'secondary' | 'cancel' | 'dark' | 'gray';
export declare type Kinds = Record<Kind, string>;
export interface ButtonProps {
    scale?: 'small' | 'normal' | 'big';
    kind?: Kind;
    outline?: boolean;
    children: ReactNode;
}
