// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas

import {
  ADD_EXPENSE,
  EDIT_EXPENSE,
  ENABLE_EXPENSE_EDITING,
  REMOVE_EXPENSE,
  SET_CURRENCIES,
} from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  editIsActive: false,
  indexAndExchangeToEdit: null,
};

function walletReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case SET_CURRENCIES:
    return {
      ...state,
      currencies: action.currencies,
    };
  case ADD_EXPENSE:
    return {
      ...state,
      expenses: [...state.expenses, action.expense],
    };
  case REMOVE_EXPENSE:
    return {
      ...state,
      expenses: state.expenses.filter(
        ((expense) => expense.id !== action.expenseId),
      ),
    };
  case ENABLE_EXPENSE_EDITING:
    return {
      ...state,
      editIsActive: true,
      indexAndExchangeToEdit: action.expenseId,
    };
  case EDIT_EXPENSE:
    return {
      ...state,
      expenses: state.expenses.map((expense) => {
        const targetId = state.indexAndExchangeToEdit.id;
        const exchangeRates = state.indexAndExchangeToEdit.exchange;
        const newExpense = { ...action.newExpense, exchangeRates };

        return (expense.id === targetId) ? newExpense : expense;
      }),
      editIsActive: false,
    };
  default:
    return state;
  }
}

export default walletReducer;
