import React from 'react';

const verifyEmail = (email) => {
  const emailRegex = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/;
  return emailRegex.test(email);
};

const ValidEmail = (props) => {
  const { email } = props;
  const isValid = verifyEmail(email);
  const message = isValid ? 'Email Válido' : 'Email Inválido';
  return (
    <div>
      <h2 data-testid="id-email-user">{`Valor: ${email}`}</h2>
      { email && 
        <h3 
          style={{ color: `${isValid ? 'green' : 'red' }` }}
          data-testid="id-email-message"
        >
          { message }
        </h3> }
    </div>
  );
};

export default ValidEmail;
