import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends React.Component {
  render() {
    const { email, expenses } = this.props;

    const expenseTotal = expenses.map((expense) => {
      const { currency, value } = expense;
      const expenseValue = expense.exchangeRates[currency].ask * value;
      return Number(expenseValue);
    }).reduce((acc, curr) => acc + curr, 0);

    return (
      <header>
        <div>
          <span>Email:</span>
          <span data-testid="email-field">{email}</span>
        </div>

        <div>
          <span>Despesa total:</span>
          <span data-testid="total-field">
            {expenseTotal}
          </span>
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
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps)(Header);
