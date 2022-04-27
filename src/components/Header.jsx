import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './Header.css';

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
        <h1>MyOwn Wallet</h1>

        <div className="header-expense">
          <span data-testid="email-field" className="email">{email}</span>

          <span data-testid="total-field" className="total">
            {expenseTotal.toFixed(2)}
          </span>

          <span data-testid="header-currency-field" className="currency">BRL</span>
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
