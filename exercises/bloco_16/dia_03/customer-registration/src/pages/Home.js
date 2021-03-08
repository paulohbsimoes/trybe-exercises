import React from 'react';
import { StyledHome, Menu, MenuItem } from '../styles/pages/Home';

const Home = () => (
  <StyledHome>
    <Menu>
      <MenuItem to="/login">Login</MenuItem>
      <MenuItem to="/register">Cadastrar clientes</MenuItem>
      <MenuItem to="/customers">Listar clientes cadastrados</MenuItem>
    </Menu>
  </StyledHome>
);

export default Home;
