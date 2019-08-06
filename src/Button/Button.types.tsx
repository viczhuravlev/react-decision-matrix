import { ReactNode } from 'react';

export type Kind = 'primary' | 'secondary' | 'cancel' | 'dark' | 'gray';
export type Kinds = Record<Kind, string>;

export interface ButtonProps {
  scale?: 'small' | 'normal' | 'big';
  kind?: Kind;
  outline?: boolean;
  children: ReactNode;
}
