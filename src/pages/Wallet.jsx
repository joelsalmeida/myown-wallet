import React from 'react';
import ExpenseForm from '../components/ExpenseForm';
import ExpenseTable from '../components/ExpenseTable';
import Header from '../components/Header';
import './Wallet.css';

class Wallet extends React.Component {
  render() {
    return (
      <main>
        <div className="wallet border-orange">
          <Header />
          <ExpenseForm />
          <ExpenseTable />
        </div>

      </main>
    );
  }
}

export default Wallet;
