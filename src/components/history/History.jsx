import { Download } from 'react-feather'
import { Bar, Line } from 'react-chartjs-2'
import { Chart, registerables } from 'chart.js';  
Chart.register(...registerables);

const History = () => {


    const state = {
        labels: [],
        datasets: [
          {
            label: 'Outgoings',
            pointBorderColor: 'rgba(139,0,0,1)',
            fill: true,
            lineTension: 0.1,
            backgroundColor: 'rgba(139,0,0,0.1)',
            borderColor: 'rgba(139,0,0,1)',
            borderWidth: 2,
            data: []
          },
          {
            label: 'Revenue',
            fill: true,
            lineTension: 0.1,
            backgroundColor: 'rgba(0, 107, 50, 0.1)',
            borderColor: 'rgba(0, 107, 50, 1)',
            borderWidth: 2,
            data: []
          },
        ]
      }

      const state2 = {
        labels: ['One', 'Two', 'Three'],
        datasets: [
          {
            label: 'Outgoings',
            pointBorderColor: 'rgba(139,0,0,1)',
            fill: true,
            lineTension: 0.1,
            backgroundColor: 'rgba(139,0,0,1)',
            borderColor: 'rgba(255, 255, 255, 1)',
            borderWidth: 1,
            data: [1,2,3]
          },
          {
            label: 'Revenue',
            fill: true,
            lineTension: 0.1,
            backgroundColor: 'rgba(0, 107, 50, 1)',
            borderColor: 'rgba(255, 255, 255, 1)',
            borderWidth: 1,
            data: [1,2,3]
          },
          {
            label: 'Revenue',
            fill: true,
            lineTension: 0.1,
            backgroundColor: 'rgba(0, 107, 50, 1)',
            borderColor: 'rgba(255, 255, 255, 1)',
            borderWidth: 1,
            data: [1,2,3]
          },
          {
            label: 'Revenue',
            fill: true,
            lineTension: 0.1,
            backgroundColor: 'rgba(0, 107, 50, 1)',
            borderColor: 'rgba(255, 255, 255, 1)',
            borderWidth: 1,
            data: [1,2,3]
          }
        ]
      }

    return (
      <div className='home'>
          <section className="overview">
            <h1>History</h1>
            <p>All about your history. All the information about your finances.</p>
          </section>
          
          
          <section className="resume">
                <div className="balance">
                    <h4>Current balance</h4>
                    <p className="balance">$16,584</p>
                </div>
                <div className="report">
                    <p>Export report</p>
                    <div className='icon'>
                        <Download />
                    </div>
                </div>
          </section>
  
            <section className="summary">
                <p>Total summary in: </p>
                <select name="category">
                    <option value="day" selected>Day</option>
                    <option value="week">Week</option>
                    <option value="month">Month</option>
                    <option value="year">Year</option>
                    <option value="total">Total</option>
                </select>
            </section>

            <section className="linear-bar">
              <Line data={state}
                options={{
                  responsive: true,
                  maintainAspectRatio: false
                }}
              />
            </section>
            <section className="linear-bar">
              <Bar data={state2}
                options={{
                  responsive: true,
                  maintainAspectRatio: false,
                  scales: {
                    x: {
                      stacked: true,
                    },
                    y: {
                      stacked: true
                    }
                  }
                }}
              />
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
  
  export default History