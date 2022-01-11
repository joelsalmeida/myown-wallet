import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchCurrencies } from '../actions';

class ExpenseForm extends Component {
  componentDidMount() {
    const { setCurrencies } = this.props;
    setCurrencies();
  }

  render() {
    return (
      <form>
        <label htmlFor="value-input">
          Valor da despesa:
          <input type="text" name="" id="value-input" data-testid="value-input" />
        </label>

        <label htmlFor="description-input">
          Descrição:
          <input
            type="text"
            name=""
            id="description-input"
            data-testid="description-input"
          />
        </label>

        <label htmlFor="currency-input">
          Moeda:
          <select name="" id="currency-input" data-testid="currency-input">
            <option value="usd">USD</option>
            <option value="cad">CAD</option>
            <option value="eur">EUR</option>
          </select>
        </label>

        <label htmlFor="method-input">
          Método de pagamento:
          <select name="" id="method-input" data-testid="method-input">
            <option value="dinheiro">Dinheiro</option>
            <option value="credito">Cartão de crédito</option>
            <option value="debito">Cartão de débito</option>
          </select>
        </label>

        <label htmlFor="tag-input">
          Tipo de despesa:
          <select name="" id="tag-input" data-testid="tag-input">
            <option value="alimentação">Alimentação</option>
            <option value="lazer">Lazer</option>
            <option value="trabalho">Trabalho</option>
            <option value="saúde">Saúde</option>
          </select>
        </label>

        <button type="button">Adicionar despesa</button>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  setCurrencies: () => dispatch(fetchCurrencies()) });

ExpenseForm.propTypes = {
  setCurrencies: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(ExpenseForm);
