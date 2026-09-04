import { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [expenses, setExpenses] = useState([]);

  const addExpense = () => {
    if (name === "" || amount === "") {
      return;
    }

    const newExpense = {
      id: Date.now(),
      name: name,
      amount: Number(amount),
    };

    setExpenses([...expenses, newExpense]);

    setName("");
    setAmount("");
  };

  const deleteExpense = (id) => {
    setExpenses(expenses.filter((expense) => expense.id !== id));
  };

  const total = expenses.reduce((sum, expense) => sum + expense.amount, 0);

  return (
    <div className="container">
      <h1>💰 Expense Tracker</h1>

      <div className="form">
        <input
          type="text"
          placeholder="Expense name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />

        <button onClick={addExpense}>Add Expense</button>
      </div>

      <h2>Total: ₹{total}</h2>

      <div className="expense-list">
        {expenses.map((expense) => (
          <div className="expense" key={expense.id}>
            <span>{expense.name}</span>

            <span>₹{expense.amount}</span>

            <button onClick={() => deleteExpense(expense.id)}>❌</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
