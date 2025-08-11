import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
`;

export const InputWrapper = styled.div`
  position: relative;
  display: inline-flex;
  align-items: center;
`;

export const StyledInput = styled.input`
  background-color: #fff;
  padding: 8px 36px 8px 8px;
  border: 1px solid #ccc;
  border-radius: 6px;
  outline: none;
  font-size: 14px;

  &:focus {
    border-color: #888;
  }
`;

const BaseButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 14px;
  color: #888;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  line-height: 1;

  &:hover {
    color: #333;
  }
`;

export const IconButton = styled(BaseButton)`
  position: absolute;
  right: 8px;
  top: 50%;
  transform: translateY(-50%);
`;

export const ClearButton = styled(BaseButton)``;

export const StyledImg = styled.img`
  width: 20px;
  height: 20px;
`;
