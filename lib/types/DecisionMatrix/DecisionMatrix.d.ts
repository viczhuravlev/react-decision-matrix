import * as T from './DecisionMatrix.types';
declare function DecisionMatrix(
  props: T.DecisionMatrixProps
): JSX.Element | null;
declare namespace DecisionMatrix {
  var defaultProps: {
    criteria: {
      name: string;
      weighting: number;
    }[];
    options: {
      name: string;
      values: number[];
    }[];
  };
  var displayName: string;
}
export default DecisionMatrix;
