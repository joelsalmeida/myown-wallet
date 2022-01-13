import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { removeExpense } from '../actions';

class ExpenseTable extends Component {
  render() {
    const { expenses, delExpense } = this.props;
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

          {expenses.map((expense) => {
            const { currency, value, id } = expense;
            const expenseValue = expense.exchangeRates[currency].ask * value;
            const currencyName = expense.exchangeRates[currency].name;
            const exchangeValue = expense.exchangeRates[currency].ask;

            return (
              <tr key={ id }>
                <td>{expense.description}</td>
                <td>{expense.tag}</td>
                <td>{expense.method}</td>
                <td>{expense.value}</td>
                <td>{currencyName}</td>
                <td>{roundNumber(exchangeValue)}</td>
                <td>{roundNumber(expenseValue)}</td>
                <td>Real</td>
                <td>
                  <button
                    type="button"
                    data-testid="edit-btn"
                    name={ id }
                  >
                    Editar despesa
                  </button>

                  <button
                    type="button"
                    onClick={ () => delExpense(id) }
                    data-testid="delete-btn"
                  >
                    Delete
                  </button>
                </td>
              </tr>);
          })}

        </tbody>
      </table>
    );
  }
}

ExpenseTable.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
  delExpense: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  delExpense: (expenseId) => dispatch(removeExpense(expenseId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseTable);
