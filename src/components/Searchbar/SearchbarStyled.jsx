import styled from 'styled-components';

const SearchbarWrap = styled.div`
  /* border-radius: 5px; */
  /* top: 0;
  left: 0;
  position: sticky;
  z-index: 1100;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 64px;
  padding-right: 24px;
  padding-left: 24px;
  padding-top: 12px;
  padding-bottom: 20px;
  color: #fff;
  background-color: #3f51b5;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12); */
`;

const Form = styled.form`
  display: flex;
  align-items: center;
  width: 300px;
  border: 1px solid #3f51b5;
  border-radius: 5px;
  overflow: hidden;
`;

const FormButton = styled.button`
  display: inline-block;
  width: 48px;
  height: 30px;
  border: 0;
  background-image: url('./icon-search.svg');
  background-size: 40%;
  background-repeat: no-repeat;
  background-position: center;
  background-color: #3f51b5;
  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;

  &:hover {
    opacity: 1;
  }
`;

const ButtonLabel = styled.span`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  clip-path: inset(50%);
  border: 0;
`;

const FormInput = styled.input`
  display: inline-block;
  width: 100%;
  font: inherit;
  font-size: 16px;
  border: none;
  outline: none;
  padding-left: 4px;
  padding-right: 4px;

  &::placeholder {
    font: inherit;
    font-size: 14px;
  }
`;

const styles = {
  SearchbarWrap,
  Form,
  FormButton,
  ButtonLabel,
  FormInput,
};

export default styles;
