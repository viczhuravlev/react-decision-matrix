interface Criteria {
  name: string;
  weighting: number;
}

interface Option {
  name: string;
  values: number[];
}

export interface DecisionMatrixProps {
  criteria: Criteria[];
  options: Option[];
}
