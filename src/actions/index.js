// Coloque aqui suas actions

export const LOGIN = 'LOGIN';
export const loginAction = (email) => ({ type: LOGIN, email });

export const SET_CURRENCIES = 'SET_CURRENCIES';
export const setCurrenciesAction = (currencies) => ({ type: SET_CURRENCIES, currencies });

const END_POINT = 'https://economia.awesomeapi.com.br/json/all';

export const fetchCurrencies = () => (dispatch) => {
  try {
    fetch(END_POINT)
      .then((response) => response.json())
      .then((data) => dispatch(setCurrenciesAction(
        Object.keys(data).filter((currency) => currency !== 'USDT'),
      )));
  } catch (error) {
    console.error(error);
  }
};

export const ADD_EXPENSE = 'ADD_EXPENSE';
export const addExpenseAction = (expense) => ({ type: ADD_EXPENSE, expense });

export const getCurrencyAddExpense = (expense) => (dispatch) => {
  try {
    fetch(END_POINT)
      .then((response) => response.json())
      .then((data) => dispatch(addExpenseAction({ ...expense, exchangeRates: data })));
  } catch (error) {
    console.error(error);
  }
};

export const REMOVE_EXPENSE = 'REMOVE_EXPENSE';
export const removeExpense = (expenseId) => ({ type: REMOVE_EXPENSE, expenseId });
