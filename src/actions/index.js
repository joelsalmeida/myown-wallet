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
