import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends React.Component {
  render() {
    const { email } = this.props;
    return (
      <header>
        <div>
          <span>Email:</span>
          <span data-testid="email-field">{email}</span>
        </div>

        <div>
          <span>Despesa total:</span>
          <span data-testid="total-field"> 0 </span>
        </div>

        <div>
          <span>Cambio:</span>
          <span data-testid="header-currency-field">BRL</span>
        </div>
      </header>
    );
  }
}

Header.propTypes = {
  email: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  email: state.user.email });

export default connect(mapStateToProps)(Header);