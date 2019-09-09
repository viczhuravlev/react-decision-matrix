import React, { Fragment, useEffect, useState } from 'react';

import * as T from './DecisionMatrix.types';
import * as S from './DecisionMatrix.styles';

function TDEmpty() {
  return <S.TD>{String.fromCharCode(160)}</S.TD>;
}

function DecisionMatrix(props: T.DecisionMatrixProps) {
  const { criteria: defaultCriteria, options: defaultOptions } = props;

  if (!Array.isArray(defaultCriteria) || defaultCriteria.length === 0) {
    return null;
  }
  if (!Array.isArray(defaultOptions) || defaultOptions.length === 0) {
    return null;
  }

  const [criteria, setCriteria] = useState(defaultCriteria);
  const [options, setOptions] = useState(defaultOptions);

  const [isShow, setShow] = useState(false);

  const [clicked, setClicked] = useState<{
    optionIndex: number | null;
    criteriaIndex: number | null;
    criteriaType: 'name' | 'weighting' | 'score' | null;
  }>({
    criteriaIndex: null,
    optionIndex: null,
    criteriaType: null
  });

  useEffect(() => {}, [criteria, options]);

  const totals: number[] = new Array(options.length).fill(0);

  const TRForBody = criteria.map((item, criteriaIndex) => {
    const { name, weighting } = item;

    return (
      <S.TR key={criteriaIndex + 1}>
        <S.TD
          isCursor
          onDoubleClick={() => {
            setClicked({ ...clicked, criteriaIndex, criteriaType: 'name' });
          }}
        >
          {clicked.criteriaIndex === criteriaIndex &&
          clicked.criteriaType === 'name' ? (
            <S.Input
              defaultValue={name}
              autoFocus
              onBlur={event => {
                if (event.target.value) {
                  criteria[criteriaIndex].name = event.target.value;
                } else {
                  setCriteria(
                    criteriaIndex > 0
                      ? [
                          ...criteria.slice(0, criteriaIndex),
                          ...criteria.slice(criteriaIndex + 1, criteria.length)
                        ]
                      : [...criteria.slice(1, criteria.length)]
                  );
                }
                setClicked({
                  ...clicked,
                  criteriaIndex: null,
                  criteriaType: null
                });
              }}
            />
          ) : (
            name
          )}
        </S.TD>
        <S.TD
          isCursor
          onDoubleClick={() => {
            setClicked({
              ...clicked,
              criteriaIndex,
              criteriaType: 'weighting'
            });
          }}
        >
          {clicked.criteriaIndex === criteriaIndex &&
          clicked.criteriaType === 'weighting' ? (
            <S.Input
              defaultValue={String(weighting)}
              autoFocus
              onBlur={event => {
                // todo: real-time update
                criteria[criteriaIndex].weighting = Number(event.target.value);
                setClicked({
                  ...clicked,
                  criteriaIndex: null,
                  criteriaType: null
                });
              }}
            />
          ) : (
            weighting
          )}
        </S.TD>
        {options.map((option, optionIndex) => {
          const value = option.values[criteriaIndex] || 0;

          const total = value * weighting;

          totals[optionIndex] += total;

          return (
            <Fragment key={`${criteriaIndex}_${optionIndex}`}>
              <S.TD
                isCursor
                key={optionIndex}
                onDoubleClick={() => {
                  setClicked({
                    optionIndex,
                    criteriaIndex,
                    criteriaType: 'score'
                  });
                }}
              >
                {clicked.optionIndex === optionIndex &&
                clicked.criteriaIndex === criteriaIndex &&
                clicked.criteriaType === 'score' ? (
                  <S.Input
                    defaultValue={String(value)}
                    autoFocus
                    onBlur={event => {
                      // todo: real-time update
                      // eslint-disable-next-line no-param-reassign
                      option.values[criteriaIndex] = Number(event.target.value);
                      setClicked({
                        optionIndex: null,
                        criteriaIndex: null,
                        criteriaType: null
                      });
                    }}
                  />
                ) : (
                  value
                )}
              </S.TD>
              <S.TD>{total}</S.TD>
            </Fragment>
          );
        })}
        <TDEmpty />
        <TDEmpty />
      </S.TR>
    );
  });

  const min = Math.min(...totals);
  const max = Math.max(...totals);
  const isCoincidesMinAndMax = min === max;

  return (
    <S.DecisionMatrix>
      <S.Table>
        <S.Thead>
          <S.TR>
            <TDEmpty />
            <TDEmpty />
            <S.TH colSpan={options.length * 2 + 2}>OPTIONS</S.TH>
          </S.TR>
          <S.TR>
            <S.TH>Criteria</S.TH>
            <S.TH>Weighting</S.TH>
            {options.map((option, optionIndex) => (
              <S.TH
                isCursor
                key={option.name}
                colSpan={2}
                onDoubleClick={() => setClicked({ ...clicked, optionIndex })}
              >
                {clicked.optionIndex === optionIndex &&
                !clicked.criteriaType ? (
                  <S.Input
                    defaultValue={option.name}
                    autoFocus
                    onBlur={event => {
                      if (event.target.value.length) {
                        options[optionIndex].name = event.target.value;
                      } else {
                        setOptions(
                          optionIndex > 0
                            ? [
                                ...options.slice(0, optionIndex),
                                ...options.slice(
                                  optionIndex + 1,
                                  options.length
                                )
                              ]
                            : [...options.slice(1, options.length)]
                        );
                      }
                      setClicked({
                        ...clicked,
                        optionIndex: null
                      });
                    }}
                  />
                ) : (
                  option.name
                )}
              </S.TH>
            ))}
            <S.TH
              isCursor
              colSpan={2}
              onClick={() => {
                setOptions([
                  ...options,
                  {
                    name: 'New Option',
                    values: new Array(criteria.length).fill(1)
                  }
                ]);
              }}
            >
              <S.Add>Add option</S.Add>
            </S.TH>
          </S.TR>
        </S.Thead>

        <tfoot>
          <S.TR>
            <S.TD
              isCursor
              onClick={() => {
                setCriteria([
                  ...criteria,
                  { name: 'New criteria', weighting: 1 }
                ]);
              }}
            >
              <S.Add>Add criteria</S.Add>
            </S.TD>
            <TDEmpty />
            {options.map((_, index) => (
              <Fragment key={index}>
                <TDEmpty />
                <TDEmpty />
              </Fragment>
            ))}
            <TDEmpty />
            <TDEmpty />
          </S.TR>
          <S.TR>
            <TDEmpty />
            <S.TD>TOTAL: </S.TD>
            {totals.map((value, index) => (
              <Fragment key={index}>
                <TDEmpty />
                <S.TD
                  isMin={!isCoincidesMinAndMax && value === min}
                  isMax={!isCoincidesMinAndMax && value === max}
                >
                  {value}
                </S.TD>
              </Fragment>
            ))}
            <TDEmpty />
            <TDEmpty />
          </S.TR>
        </tfoot>

        <S.Tbody>
          <S.TR>
            <TDEmpty />
            <TDEmpty />
            {options.map((_, index) => (
              <Fragment key={index}>
                <S.TH>Score</S.TH>
                <S.TH>Total</S.TH>
              </Fragment>
            ))}
            <S.TH>
              <S.Add>Score</S.Add>
            </S.TH>
            <S.TH>
              <S.Add>Total</S.Add>
            </S.TH>
          </S.TR>
          {TRForBody}
        </S.Tbody>
      </S.Table>
      <S.DataShow onClick={() => setShow(!isShow)}>
        {isShow ? 'Скрыть данные' : 'Показать данные'}
      </S.DataShow>
      {isShow && (
        <S.Data>
          <pre>
            Options:
            <br />
            {JSON.stringify(options, undefined, 2)}
          </pre>
          <pre>
            Criteria:
            <br />
            {JSON.stringify(criteria, undefined, 2)}
          </pre>
          <pre>
            Totals:
            <br />
            {JSON.stringify(totals, undefined, 2)}
          </pre>
        </S.Data>
      )}
    </S.DecisionMatrix>
  );
}

DecisionMatrix.defaultProps = {
  criteria: [
    {
      name: 'First criterion',
      weighting: 5
    },
    {
      name: 'Second criterion',
      weighting: 5
    }
  ],
  options: [
    {
      name: 'First option',
      values: [1, 2]
    },
    {
      name: 'Second option',
      values: [4, 5]
    }
  ]
};

DecisionMatrix.displayName = 'DecisionMatrix';

export default DecisionMatrix;
