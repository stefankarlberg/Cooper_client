import React, { Component } from 'react';
import { getData } from '../Modules/PerformanceData';
import { Line } from 'react-chartjs-2';

class DisplayPerformanceData extends Component {
  constructor(props) {
    super(props)
    this.state = {
      performanceData: null
    }
  }
  componentDidMount() {
    this.getPerformanceData()
  }

  async getPerformanceData() {
    let result = await getData();
    this.setState({performanceData: result.data.entries}, () => {
    this.props.indexUpdated();
    })
  }



  render () {
    let dataIndex;
    let statisticsIndex;
    let distances = []
    let date = []
    


    if (this.props.updateIndex === true) {
      this.getPerformanceData();
    }

    if (this.state.performanceData != null) {
      statisticsIndex = (
        <div>
          {this.state.performanceData.map(item => {
            distances.push(item.data.distance)
            // console.log(this.state.performanceData)
            date.push(item.created_at)
          })}
        </div>
      )
    }

    if (this.state.performanceData != null) {
      dataIndex = (
        <div>
          {this.state.performanceData.map(item => {
            return <div key={item.id}>{item.data.message}</div>
          })}
        </div>
      )
    }

    let data = {
      labels: date,
      datasets: [
        {
          label: 'Cooper test over time',
          fill: false,
          lineTension: 0.1,
          backgroundColor: 'rgba(75,192,192,0.4)',
          borderColor: 'rgba(75,192,192,1)',
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: 'rgba(75,192,192,1)',
          pointBackgroundColor: '#fff',
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: 'rgba(75,192,192,1)',
          pointHoverBorderColor: 'rgba(220,220,220,1)',
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: distances
        }
      ]
    };

    return (
      <div>
        {dataIndex}
        <Line data={data} />
      </div>
    )
  }      
}

export default DisplayPerformanceData