import React from 'react';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      isEmailValid: false,
      isPasswordValid: false,
    };
  }

  checkEmailAndPassword = () => {
    const { email, password } = this.state;
    const minimumLength = 6;

    if (password.length >= minimumLength) {
      this.setState({ isPasswordValid: true });
    } else {
      this.setState({ isPasswordValid: false });
    }

    const validEmail = 'alguem@alguem.com';

    if (email === validEmail) {
      this.setState({ isEmailValid: true });
    } else {
      this.setState({ isEmailValid: false });
    }
  }

  handleChange = ({ target }) => {
    const { name, value } = target;

    this.setState({ [name]: value },
      () => this.checkEmailAndPassword());
  }

  render() {
    const { email, password } = this.state;

    return (
      <main>
        <label htmlFor="input-email">
          Email:
          <input
            type="email"
            name="email"
            id="input-email"
            onChange={ this.handleChange }
            value={ email }
            data-testid="email-input"
          />
        </label>

        <label htmlFor="input-password">
          Senha:
          <input
            type="password"
            name="password"
            id="input-password"
            onChange={ this.handleChange }
            value={ password }
            data-testid="password-input"
          />
        </label>

        <button type="submit">Entrar</button>
      </main>
    );
  }
}

export default Login;
