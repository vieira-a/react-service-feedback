import styled from "styled-components";
import { color } from '../../UI/Colors';
import { fs } from '../../UI/Tipography';

export const UserInfoMain = styled.section`
  padding: 44px;
`
export const Heading = styled.section`
  margin-top: 24px;
  margin-bottom: 48px;
  text-align: center;
`

export const UserInfoLabel = styled.label`
  display: flex;
  flex-direction: column;
  gap: 8px;
`

export const UserInfoInput = styled.input`
  width: 100%;
  height: 48px;
  padding: 14px;
  margin-bottom: 24px;
  border: none;
  outline: none;
  border-radius: 4px;
  background-color: ${color.zinc['700']};
  color: ${color.zinc['200']};
  &:hover {
    background: ${color.zinc['900']};
    border: 1px solid ${color.fuchsia['600']} !important;
    transition: 0.3s;
    &:focus {
      outline: none;
      border-color: 1px solid ${color.fuchsia['600']} !important;
      transition: 0.3s;
    }
  }
`

export const Text = styled.p`
  font-size: ${props => props.sm ? fs.paragraph['sm'] : fs.paragraph['md']};
  font-weight: ${props => props.bold ? 700 : props.semibold ? 500 : 400};
  color: ${color.zinc['200']};
`