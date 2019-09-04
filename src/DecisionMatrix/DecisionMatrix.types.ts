import { ReactNode } from 'react';

export interface DecisionMatrixProps {
  children: ReactNode;
  scale?: 'small' | 'normal' | 'big';
  test?: string;
}
