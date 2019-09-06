import React from 'react';

import * as T from './DecisionMatrix.types';
import * as S from './DecisionMatrix.styles';

function DecisionMatrix(props: T.DecisionMatrixProps) {
  const { criteria, options } = props;

  if (!Array.isArray(criteria) || criteria.length === 0) return null;
  if (!Array.isArray(options) || options.length === 0) return null;

  return (
    <S.DecisionMatrix>
      <S.Table>
        <S.Thead>
          <tr>
            <S.TD>{String.fromCharCode(160)}</S.TD>
            <S.TD>{String.fromCharCode(160)}</S.TD>
            <S.TH colSpan={options.length * 2}>Options</S.TH>
          </tr>
          <tr>
            <S.TH>Критерии</S.TH>
            <S.TH>Вес</S.TH>
            {options.map(option => (
              <S.TH key={option.name} colSpan={2}>
                {option.name}
              </S.TH>
            ))}
          </tr>
          <tr>
            <S.TD>{String.fromCharCode(160)}</S.TD>
            <S.TD>{String.fromCharCode(160)}</S.TD>
            {options.map(_ => (
              <>
                <S.TD>Оценка</S.TD>
                <S.TD>Вывод</S.TD>
              </>
            ))}
          </tr>
        </S.Thead>
        <tfoot>
          <tr>
            <S.TD>{String.fromCharCode(160)}</S.TD>
            <S.TD>Total</S.TD>
            <S.TD>_</S.TD>
            <S.TD>55</S.TD>
            <S.TD>_</S.TD>
            <S.TD>66</S.TD>
          </tr>
        </tfoot>
        <S.Tbody>
          {criteria.map((item, index) => {
            const { values } = options[index];

            if (!Array.isArray(values) || values.length === 0) {
              return null;
            }

            const { name, weighting } = item;

            return (
              <tr key={name + weighting}>
                <S.TH>{name}</S.TH>
                <S.TH>{weighting}</S.TH>
                {values.map(value => {
                  const total = value * weighting;

                  return (
                    <>
                      <S.TD>{value}</S.TD>
                      <S.TD>{total}</S.TD>
                    </>
                  );
                })}
              </tr>
            );
          })}
          <tr>
            <S.TD>{String.fromCharCode(160)}</S.TD>
            <S.TD>{String.fromCharCode(160)}</S.TD>
            {options.map(_ => (
              <>
                <S.TD>{String.fromCharCode(160)}</S.TD>
                <S.TD>{String.fromCharCode(160)}</S.TD>
              </>
            ))}
          </tr>
        </S.Tbody>
      </S.Table>
    </S.DecisionMatrix>
  );
}

DecisionMatrix.defaultProps = {
  criteria: [
    {
      name: 'Цена',
      weighting: 5
    },
    {
      name: 'ДМС',
      weighting: 3
    }
  ],
  options: [
    {
      name: 'Первая опция',
      values: [1, 2]
    },
    {
      name: 'Вторая опция',
      values: [4, 5]
    }
  ]
};

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
