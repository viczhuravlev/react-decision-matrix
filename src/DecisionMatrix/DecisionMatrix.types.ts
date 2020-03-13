export interface THProps {
  isCursor?: boolean;
}

export interface TDProps {
  isCursor?: boolean;
  isMin?: boolean;
  isMax?: boolean;
}

export interface Criteria {
  name: string;
  weighting: number;
}

export interface Option {
  name: string;
  values: number[];
}

export interface DecisionMatrixProps {
  criteria: Criteria[];
  options: Option[];
}
