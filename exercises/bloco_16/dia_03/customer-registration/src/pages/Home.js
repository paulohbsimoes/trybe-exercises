import { StyledHome, Menu, MenuItem } from '../styles/pages/Home';

const Home = () => {
  return (
    <StyledHome>
      <Menu>
        <MenuItem to="/login">Login</MenuItem>
        <MenuItem to="/signup">Cadastrar clientes</MenuItem>
        <MenuItem to="/signup">Listar clientes cadastrados</MenuItem>
      </Menu>
    </StyledHome>
  );
}
 
export default Home;
