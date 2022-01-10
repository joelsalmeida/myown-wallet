import React from 'react';

class Login extends React.Component {
  render() {
    return (
      <main>
        <label htmlFor="input-email">
          Email:
          <input
            type="email"
            name="input-email"
            id="input-email"
            data-testid="email-input"
          />
        </label>

        <label htmlFor="input-password">
          Senha:
          <input
            type="password"
            name="input-password"
            id="input-password"
            data-testid="password-input"
          />
        </label>

        <button type="submit">Entrar</button>
      </main>
    );
  }
}

export default Login;
