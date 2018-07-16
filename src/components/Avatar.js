import styled from 'styled-components';

export default styled.div`
  width: 60px;
  height: 60px;
  background-image: url(${props => props.src});
  background-size: contain;
  background-repeat: no-repeat;
`;
