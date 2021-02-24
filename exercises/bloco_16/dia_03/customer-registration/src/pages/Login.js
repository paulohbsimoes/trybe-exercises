import { StyledForm, StyledLogin } from '../styles/pages/Login';

const Login = () => {
  return (
    <StyledLogin>
      <h1>Login</h1>  
      <StyledForm onSubmit={ (event) => event.preventDefault() }>
        <label htmlFor="user-email">
          Email
          <input name="user-email" id="user-email" type="email" />
        </label>
        <label htmlFor="user-password">
          Senha
          <input name="user-password" id="user-password" type="password" />
        </label>
        <button>Entrar</button>
      </StyledForm>
    </StyledLogin>
  );
}
 
export default Login;
