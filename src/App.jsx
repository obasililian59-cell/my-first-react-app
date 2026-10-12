
import {useState} from 'react'
import './App.css'


function App() {

  const [currentScreen, setCurrentScreen] = useState('dashboard')
  const [customerName, setCustomerName] = useState("")

  if(currentScreen === 'add-sale') {
    return (
    <main className="dashboard">
      <h1>Record a Sale</h1>
      <label htmlFor="customerName">Customer Name</label>
      <input id="customerName" type="text" value={customerName} onChange={(event) => setCustomerName(event.target.value)} placeholder="Enter customer's name"/>
      <button onClick={()=>setCurrentScreen('dashboard')}>
        Back to Dashboard
      </button>
    </main>
    )
  }
  return (
    <main className="dashboard">
      <header className="dashboard-header">
        <div>
          <h1 className="page-title">Business Dashboard</h1>
          <p>Manage your customers, sales, payments and espenses.</p>
        </div>
      </header>

      <section className="summary-cards">

        <article className="summary-card">
          <h2>Today's sales</h2>
          <p>N0.00</p>
        </article>

        <article className="summary-card">
          <h2>Money Received</h2>
          <p>N0.00</p>
        </article>

        <article className="summary-card">
          <h2>Outstanding</h2>
          <p>N0.00</p>
        </article>

        <article className="summary-card">
          <h2>Expenses</h2>
          <p>N0.00</p>
        </article>

      </section>

      <section className="quick-actions">
        <h2>Quick Actions</h2>
        <div className="action-buttons">
          <button onClick={() =>setCurrentScreen('add-sale')}>Add Sale</button>
          <button>Add Expense</button>
          <button>Add Customer</button>
          <button>Add Product</button>
        </div>
      </section>
    </main>
  )
}

export default App 