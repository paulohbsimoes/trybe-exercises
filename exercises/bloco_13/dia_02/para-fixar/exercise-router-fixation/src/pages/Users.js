import React from 'react';

const Users = (props) => {
  const { greetingMessage = 'Hi There' } = props
  const { match: { params: { id } } } = props;
  return (
    <div>
      <h2> Users { id && `- ${id}` } </h2>
      <p> {greetingMessage}, this is my awesome Users component </p>
    </div>
  );
};

export default Users;
