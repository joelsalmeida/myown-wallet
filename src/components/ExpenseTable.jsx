import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class ExpenseTable extends Component {
  render() {
    const { expenses } = this.props;
    const roundNumber = (value) => Number(value).toFixed(2);

    return (
      <table>
        <thead>
          <tr>
            <th>Descrição</th>
            <th>Tag</th>
            <th>Método de pagamento</th>
            <th>Valor</th>
            <th>Moeda</th>
            <th>Câmbio utilizado</th>
            <th>Valor convertido</th>
            <th>Moeda de conversão</th>
            <th>Editar/Excluir</th>
          </tr>
        </thead>

        <tbody>

          {expenses.map((expense, index) => {
            const { currency, value } = expense;
            const expenseValue = expense.exchangeRates[currency].ask * value;
            const currencyName = expense.exchangeRates[currency].name;
            const exchangeValue = expense.exchangeRates[currency].ask;

            return (
              <tr key={ index }>
                <td key={ 1 }>{expense.description}</td>
                <td key={ 2 }>{expense.tag}</td>
                <td key={ 3 }>{expense.method}</td>
                <td key={ 4 }>{expense.value}</td>
                <td key={ 5 }>{currencyName}</td>
                <td key={ 6 }>{roundNumber(exchangeValue)}</td>
                <td key={ 7 }>{roundNumber(expenseValue)}</td>
                <td key={ 10 }>Real</td>
              </tr>);
          })}

        </tbody>
      </table>
    );
  }
}

ExpenseTable.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps)(ExpenseTable);
