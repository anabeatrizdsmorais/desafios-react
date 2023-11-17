import styled from 'styled-components';

const StyledButton = styled.button `
    background-color: #123456;
    color: #ff0;
`;

const StyledComponentExample = () => {
  return (
    <StyledButton>Clique em mim!</StyledButton>
  )
}

export default StyledComponentExample