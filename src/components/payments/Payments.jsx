
const Payments = () => {
  return (
    <div className='home'>
        <section className="overview">
          <h1>Payments</h1>
          <p>All about your payments. Beware of spend more than you have.</p>
        </section>
        
        
        <section className='balance'>
          <article className="revenue">
            <h4>Monthly Outgoings</h4>
            <h3>$320.65</h3>
            <p className="change up">Change: <span>$24</span></p>
          </article>

          <article className="total dot-pattern-red">
            <h4>Weekly Outgoings</h4>
            <h3>$220.65</h3>
          </article>
        </section>

        <section className="create-payment">
            <h4>Submit Payment</h4>
            <div className="field">
                <label htmlFor="date">Date:</label>
                <input type={"date"} />
            </div>
            <div>
                <label htmlFor="description">Description:</label>
                <input type={"text"} />
            </div>
            <div>
                <label htmlFor="payment-method">Payment method:</label>
                <select name="payment-method">
                    <option value="card">Debit Card</option>
                    <option value="cash" selected>Cash</option>
                    <option value="bank-transfer">Bank transfer</option>
                </select>
            </div>
            <div>
                <label htmlFor="category">Category:</label>
                <select name="category">
                    <option value="food" selected>Food</option>
                    <option value="clothes">Clothes</option>
                    <option value="entreteiment">Entreteiment</option>
                    <option value="health">Health</option>
                    <option value="salary">Salary</option>
                    <option value="education">Education</option>
                    <option value="bills">Bills</option>
                    <option value="other">Other</option>
                </select>
            </div>
            <div>
                <label htmlFor="total">Total:</label>
                <input type={"text"} />
            </div>
            <div>
                <button className="btn-principal">Submit payment</button>
            </div>
        </section>

        <section className="transactions">
          <h4>Latest transactions</h4>
          <ul>
            <li>
              <p className="time">02.Jun</p>
              <p className="description">Queso</p>
              <p className="payment">Cash</p>
              <p className="category red">Food</p>
              <p className="total"> -$15,00  </p>
            </li>
            <li>
              <p className="time">01.Mar</p>
              <p className="description">Playera manga larga ojoi  asdoij</p>
              <p className="payment">Cash</p>
              <p className="category green">Clothes</p>
              <p className="total"> -$15,00  </p>
            </li>
            <li>
              <p className="time">16.Dec</p>
              <p className="description">Queso</p>
              <p className="payment">Debit Card</p>
              <p className="category blue">Entreteiment</p>
              <p className="total"> -$15,00  </p>
            </li>
            <li>
              <p className="time">24.Oct</p>
              <p className="description">Queso</p>
              <p className="payment">Bank Transfer</p>
              <p className="category pink">Health</p>
              <p className="total"> -$15,00  </p>
            </li>
            <li>
              <p className="time">16.Sep</p>
              <p className="description">Queso</p>
              <p className="payment">Cash</p>
              <p className="category cyan">Salary</p>
              <p className="total"> -$15,00  </p>
            </li>
            <li>
              <p className="time">03.Jan</p>
              <p className="description">Queso</p>
              <p className="payment">Cash</p>
              <p className="category orange">Education</p>
              <p className="total"> -$15,00  </p>
            </li>
            <li>
              <p className="time">24.Feb</p>
              <p className="description">Queso</p>
              <p className="payment">Cash</p>
              <p className="category brown">Other</p>
              <p className="total"> -$15,00  </p>
            </li>
            <li>
              <p className="time">18.May</p>
              <p className="description">Queso</p>
              <p className="payment">Cash</p>
              <p className="category purple">Bills</p>
              <p className="total"> -$15,00  </p>
            </li>
            <li>
              <p className="time">12.Jul</p>
              <p className="description">Queso</p>
              <p className="payment">Cash</p>
              <p className="category purple">Food</p>
              <p className="total"> -$15,00  </p>
            </li>
            <li>
              <p className="time">02.Nov</p>
              <p className="description">Queso</p>
              <p className="payment">Cash</p>
              <p className="category purple">Food</p>
              <p className="total"> -$15,00  </p>
            </li>
          </ul>
        </section>
      </div>
  )
}

export default Payments