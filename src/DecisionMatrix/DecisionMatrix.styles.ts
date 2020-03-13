import styled from '@emotion/styled';

import * as T from './DecisionMatrix.types';

export const DecisionMatrix = styled.div``;

export const TR = styled.tr``;

export const TH = styled.th<T.THProps>`
  position: relative;
  background: #f5f6f7;
  min-height: 35px;
  border: 1px solid #13161f;
  cursor: ${props => (props.isCursor ? 'pointer' : 'default')};
`;

export const TD = styled.td<T.TDProps>`
  position: relative;
  min-height: 35px;
  border-top: 1px solid #e1e1e1;
  border-left: 1px solid #e1e1e1;
  background-color: ${props => {
    if (props.isMin) {
      return '#ffd4d4';
    }

    if (props.isMax) {
      return '#e2ffe2';
    }

    return 'transparent';
  }};
  text-align: center;
  cursor: ${props => (props.isCursor ? 'pointer' : 'default')};

  &:nth-of-type(2n + 1) {
    border-left: 1px solid #13161f;
  }

  &:first-of-type {
    border-right: 1px solid #13161f;
  }
`;

export const Thead = styled.thead`
  ${TD} {
    border: 1px solid #13161f;
  }
`;

export const Tbody = styled.tbody`
  ${TR}:not(:first-of-type):hover {
    background-color: #f5f6f7;
  }
`;

export const Table = styled.table`
  width: 100%;
  overflow: hidden;
  color: #13161f;
  border: 1px solid #13161f;
  border-collapse: collapse;
`;

export const Input = styled.input`
  display: inline-block;
  width: calc(100% - 30px);
  max-width: 100px;
  margin: 5px 15px;
  text-align: center;
  font-size: 14px;
  border-top: none;
  border-right: none;
  border-left: none;
  border-bottom: 1px solid #ced4de;
  background-color: transparent;

  &:focus {
    outline: none;
  }
`;

export const Add = styled.span`
  color: #e1e1e1;
`;

export const DataShow = styled.p`
  display: inline-block;
  color: #03a9f4;
  cursor: pointer;
  border-bottom: 1px dashed #03a9f4;
`;

export const Data = styled.div`
  display: flex;
  width: 100%;

  pre {
    width: 42%;
    padding: 10px;
    margin-right: 3%;
    background-color: #f5f6f7;
    border-radius: 8px;
    overflow-y: hidden;
    overflow-x: auto;

    &:last-of-type {
      width: 10%;
      margin-right: 0;
    }
  }
`;
