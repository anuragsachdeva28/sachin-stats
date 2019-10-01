import React, { Component } from "react";
import Chart from "react-apexcharts";

class BarCharts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      options: {
        chart: {
          id: "basic-bar"
        },
        responsive: [
          {
            breakpoint: 480,
            options: {
              legend: {
                position: "bottom",
                offsetX: -10,
                offsetY: 0
              }
            }
          }
        ],
        stroke: {
          width: [5]
        },
        xaxis: {
          categories: [
            1990,
            1991,
            1992,
            1993,
            1994,
            1995,
            1996,
            1997,
            1998,
            1999,
            2000,
            2001,
            2002,
            2003,
            2004,
            2005,
            2006,
            2007,
            2008,
            2009,
            2010,
            2011,
            2012
          ]
        },
        fill: {
          opacity: 1
        },
        legend: {
          position: "right",
          offsetX: 0,
          offsetY: 50
        }
      },
      markers: {
        size: 6,
        strokeWidth: 3,
        fillOpacity: 0,
        strokeOpacity: 0,
        hover: {
          size: 8
        }
      },
      series: [
        {
          name: "Runs Scored",
          type: "column",
          data: this.props.y
        }
      ]
    };
  }
  componentWillReceiveProps(nextProps, nextContext) {
    this.setState({
      series: [{ data: nextProps.y }]
    });
  }

  render() {
    return (
      <div className="temp">
        <Chart
          options={this.state.options}
          series={this.state.series}
          type="line"
          width="100%"
          height="400"
        />
      </div>
    );
  }
}

export default BarCharts;
