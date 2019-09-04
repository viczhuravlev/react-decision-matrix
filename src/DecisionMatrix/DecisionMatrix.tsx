import React from 'react';

import * as T from './DecisionMatrix.types';
import * as S from './DecisionMatrix.styles';

function DecisionMatrix(props: T.DecisionMatrixProps) {
  const { children } = props;

  return <S.DecisionMatrix>{children}</S.DecisionMatrix>;
}

DecisionMatrix.defaultProps = {};

DecisionMatrix.displayName = 'DecisionMatrix';

export default DecisionMatrix;

// criteria
// weighting
// options

// const data = [
//   {
//     criteria: 'Цена',
//     weighting: 5
//   },
//   {
//     criteria: 'ДМС',
//     weighting: 3
//   }
// ];
//
// const options = [
//   {
//     name: 'Первая опция',
//     values: [1, 2]
//   },
//   {
//     name: 'Вторая опция',
//     values: [4, 5]
//   }
// ];
//
// const total: number[][] = [];
//
// console.log(
//   'Критерии | Вес |',
//   options.map(option => `${option.name}    `).join(' | ')
// );
// console.log('-----------------------------------------------');
//
// console.log(
//   `         |     |`,
//   options.map(_ => 'Оценка : Вывод  ').join(' | ')
// );
// console.log('-----------------------------------------------');
//
// data.forEach((item, index) => {
//   const { values } = options[index];
//
//   console.log(
//     `${index === 0 ? item.criteria : item.criteria + ' '}     | ${
//       item.weighting
//     }   |`,
//     values
//       .map(value => {
//         const totalScore = value * item.weighting;
//
//         if (total[index]) {
//           total[index].push(totalScore);
//         } else {
//           total[index] = [totalScore];
//         }
//
//         return `${value} : ${totalScore}`;
//       })
//       .join('           | ')
//   );
// });
//
// function sum2d(arr) {
//   let row, col;
//   const sum = arr[0].slice();
//   for (row = 1; row < arr.length; row++) {
//     for (col = 0; col < sum.length; col++) {
//       sum[col] += arr[row][col];
//     }
//   }
//   return sum;
// }
//
// console.log(
//   `         |     |`,
//   sum2d(total).map(item => `  : ${item}`).join('           | ')
// );
//
// console.log(String.fromCharCode(160));
// console.log(String.fromCharCode(160));
// console.log(String.fromCharCode(160));
