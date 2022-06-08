import {ArrowRight, Droplet} from 'react-feather'

const Home = () => {
  return (
      <div className='home'>
        <section className="overview">
          <h1>Welcome Back, Ricardo Serrano</h1>
          <p>Here you can see a overview about your account.</p>
        </section>
        
        
        <section className='balance'>
          <article className="revenue">
            <h4>Monthly Revenue</h4>
            <h3>$243.65</h3>
            <p className="change up">Change: <span>$24</span></p>
          </article>

          <article className="total dot-pattern">
            <h4>Current Balance</h4>
            <h3>$18,443.65</h3>
          </article>
        </section>

        <section className="transactions">
          <h4>Latest transactions</h4>
          <ul>
            <li>
              <p className="time">Today</p>
              <p className="description">Queso</p>
              <p className="payment">Cash</p>
              <p className="category">Food</p>
              <p className="total"> -$15,00  </p>
            </li>
            <li>
              <p className="time">Today</p>
              <p className="description">Queso</p>
              <p className="payment">Cash</p>
              <p className="category">Food</p>
              <p className="total"> -$15,00  </p>
            </li>
            <li>
              <p className="time">Today</p>
              <p className="description">Queso</p>
              <p className="payment">Cash</p>
              <p className="category">Food</p>
              <p className="total"> -$15,00  </p>
            </li>
            <li>
              <p className="time">Today</p>
              <p className="description">Queso</p>
              <p className="payment">Cash</p>
              <p className="category">Food</p>
              <p className="total"> -$15,00  </p>
            </li>
          </ul>
          <h4 className='more'>See more <ArrowRight/> </h4>
        </section>
      </div>

  )
}

export default Home