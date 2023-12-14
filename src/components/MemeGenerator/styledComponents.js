// Style your components here
import styled from 'styled-components'

export const MainContainer = styled.div`
  height: 100vh;
  padding: 42px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const CardContainer = styled.div`
  width: 50%;
  margin-right: 42px;
`

export const Heading = styled.h1`
  font-family: 'Open Sans';
  color: #35469c;
  margin-bottom: 6px;
  margin-top: 0px;
`

export const Form = styled.form`
  margin-top: 0px;
`

export const LabelCard = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 12px;
`

export const Label = styled.label`
  font-family: 'Open Sans';
  font-size: 12px;
  color: #7e858e;
  margin-bottom: 6px;
`

export const Input = styled.input`
  font-family: 'Open Sans';
  color: #5a7184;
  padding: 4px;
  padding-left: 10px;
  border: 1px solid #d7dfe9;
  border-radius: 4px;
  outline: none;
`
export const Select = styled.select`
  font-family: 'Open Sans';
  padding: 4px;
  padding-left: 10px;
  border: 1px solid #d7dfe9;
  border-radius: 4px;
  outline: none;
`
export const Option = styled.option`
  color: #1e293b;
`

export const Button = styled.button`
  font-family: 'Open Sans';
  color: #ffffff;
  background-color: #0b69ff;
  padding: 8px;
  width: 138px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  outline: none;
`
export const ImgContainer = styled.div`
  background-image: url(${props => props.bgUrl});
  height: 40%;
  width: 50%;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  text-align: center;
`

export const Text = styled.p`
  font-family: 'Open Sans';
  font-size: ${props => props.isFontSize}px;
  color: #ffffff;
  margin: 0px;
`
