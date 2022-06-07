
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
      </div>

  )
}

export default Home