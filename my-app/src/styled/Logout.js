import styled from 'styled-components';

const Logout = styled.button`
  background: linear-gradient(to bottom, #e93f3f 5%, #cb0039 100%);
  cursor: pointer;
  color: white;
  font-family: 'Roboto Slab', serif;
  font-size: 14px;
  letter-spacing: 2px;
  font-weight: bold;
  text-decoration: none;
  height: 5vh;
  margin-right: 0.5%;
  &:hover {
    background: linear-gradient(to bottom, #cb0039 5%, #e93f3f 100%);
  }
`;

export default Logout;