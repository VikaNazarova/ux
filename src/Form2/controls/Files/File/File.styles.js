import styled, { css } from 'react-emotion';
import { Row } from '../../../../Grid';

export const containerStyle = css`
  padding: 12px;
  text-decoration: none;
  cursor: pointer;
  outline: none;
  display: block;
  transition: background-color .2s ease-out;
  &:hover,
  &:focus,
  &:active {
    text-decoration: none;
  }
  &:hover {
    background-color: #f5f5f5;
  }

  ${Row} {
    text-align: center;
    margin: 0 auto;
  }
`;

export const typeStyle = css`
  text-transform: uppercase;
  letter-spacing: 2px;
  line-height: 24px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  margin: 0 auto;
`;

export const urlStyle = css`
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;

export const CenterFile = css`
  text-align: center;
`;


export const FileInfo = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const RemoveButton = styled('button')`
  background: none;
  border: none;
  outline: none;
  opacity: 0.7;
  color: red;
  position: absolute;
  top: -6px;
  right: -6px;
  padding: 2px;
  margin: 0;
  font-size: 24px;
  display: flex;
  z-index: 2;
  cursor: pointer;
`;

export const PrewImage = styled('img')`
  width: 70px;
  height: 70px;
  object-fit: cover;
  display: flex;
  margin: 0 auto;
`;

