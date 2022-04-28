import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loginAction } from '../actions';
import './Login.css';

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
    const emailRegEx = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

    this.setState({ isEmailValid: emailRegEx.test(email) });
    this.setState({ isPasswordValid: password.length >= minimumLength });
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value }, () => this.checkEmailAndPassword());
  }

  submit = () => {
    const { login, history } = this.props;
    const { email } = this.state;

    login(email);
    history.push('/carteira');
  }

  render() {
    const { isEmailValid, isPasswordValid } = this.state;
    const ifEmailOrPasswordInvalid = (!isEmailValid || !isPasswordValid);

    return (
      <main className="login">
        <form className="login-form border-orange">
          <h1>MyOwn Wallet</h1>

          <label htmlFor="input-email">
            Email:
            <input
              type="email"
              name="email"
              id="input-email"
              onChange={ this.handleChange }
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
              data-testid="password-input"
            />
          </label>

          <button
            type="button"
            disabled={ ifEmailOrPasswordInvalid }
            onClick={ this.submit }
          >
            Entrar
          </button>
        </form>
      </main>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  login: (email) => dispatch(loginAction(email)) });

Login.propTypes = {
  history: PropTypes.objectOf(PropTypes.any).isRequired,
  login: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Login);
