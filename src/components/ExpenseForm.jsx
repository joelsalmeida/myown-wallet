import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { editExpense, fetchCurrencies, getCurrencyAddExpense } from '../actions';

class ExpenseForm extends Component {
  constructor() {
    super();
    this.state = {
      id: 0,
      value: '',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
      exchangeRates: {},
    };
  }

  componentDidMount() {
    const { setCurrencies } = this.props;
    setCurrencies();
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  addExpense = () => {
    const { addExpense } = this.props;

    addExpense(this.state);
    this.setState((prevState) => ({ id: prevState.id + 1, value: '', description: '' }));
  }

  render() {
    const { currencies, editIsActive, edit } = this.props;
    const { value, description } = this.state;
    const buttonValue = editIsActive ? 'Editar despesa' : 'Adicionar despesa';
    return (
      <form>
        <label htmlFor="value-input">
          Valor da despesa:
          <input
            type="text"
            name="value"
            id="value-input"
            onChange={ this.handleChange }
            value={ value }
            data-testid="value-input"
          />
        </label>

        <label htmlFor="description-input">
          Descrição:
          <input
            type="text"
            name="description"
            id="description-input"
            onChange={ this.handleChange }
            value={ description }
            data-testid="description-input"
          />
        </label>

        <label htmlFor="currency-input">
          Moeda:
          <select
            name="currency"
            id="currency-input"
            onChange={ this.handleChange }
            data-testid="currency-input"
          >
            {currencies.map((currency, index) => (
              <option
                value={ currency }
                key={ index }
                data-testid={ currency }
              >
                {currency}
              </option>
            ))}
          </select>
        </label>

        <label htmlFor="method-input">
          Método de pagamento:
          <select
            name="method"
            id="method-input"
            onChange={ this.handleChange }
            data-testid="method-input"
          >
            <option value="Dinheiro">Dinheiro</option>
            <option value="Cartão de crédito">Cartão de crédito</option>
            <option value="Cartão de débito">Cartão de débito</option>
          </select>
        </label>

        <label htmlFor="tag-input">
          Tipo de despesa:
          <select
            name="tag"
            id="tag-input"
            onChange={ this.handleChange }
            data-testid="tag-input"
          >
            <option value="Alimentação">Alimentação</option>
            <option value="Lazer">Lazer</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Saúde">Saúde</option>
            <option value="Transporte">Transporte</option>
          </select>
        </label>

        <button
          type="button"
          onClick={ editIsActive ? () => edit(this.state) : this.addExpense }
        >
          {buttonValue}
        </button>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  setCurrencies: () => dispatch(fetchCurrencies()),
  addExpense: (expense) => dispatch(getCurrencyAddExpense(expense)),
  edit: (newExpense) => dispatch(editExpense(newExpense)),
});

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
  editIsActive: state.wallet.editIsActive,
  indexToEdit: state.wallet.indexToEdit,
});

ExpenseForm.propTypes = {
  setCurrencies: PropTypes.func.isRequired,
  addExpense: PropTypes.func.isRequired,
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  editIsActive: PropTypes.bool,
  edit: PropTypes.func.isRequired,
};

ExpenseForm.defaultProps = {
  editIsActive: false,
};

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseForm);
