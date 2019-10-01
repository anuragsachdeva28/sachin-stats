import React, { Component } from "react";
import Chart from "react-apexcharts";

class MixedCharts extends Component {
  constructor(props) {
    super(props);

    this.state = {
      optionsMixedChart: {
        chart: {
          id: "basic-bar",

          stacked: true
        },
        stroke: {
          width: [3, 3, 3]
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
        markers: {
          size: 6,
          strokeWidth: 3,
          fillOpacity: 0,
          strokeOpacity: 0,
          hover: {
            size: 8
          }
        }
      },
      seriesMixedChart: [
        {
          name: "series-1",
          type: "column",
          data: [30, 40, 25, 50, 49, 21, 70, 51]
        },
        {
          name: "series-2",
          type: "column",
          data: [23, 12, 54, 61, 32, 56, 81, 19]
        }
      ]
    };
  }
  componentWillReceiveProps(nextProps, nextContext) {
    // console.log(nextProps);
    this.setState({
      optionsMixedChart: {
        chart: {
          id: "basic-bar",

          stacked: nextProps.type === "a" ? true : false
        }
      },
      seriesMixedChart: [
        {
          name: nextProps.type === "a" ? "4s" : "Half Century",
          type: "column",
          data: nextProps.y_a
        },
        {
          name: nextProps.type === "a" ? "6s" : "Century",
          type: "column",
          data: nextProps.y_b
        }
      ]
    });
  }
  render() {
    return (
      <div className="temp">
        <Chart
          options={this.state.optionsMixedChart}
          series={this.state.seriesMixedChart}
          type="line"
          width="100%"
          height="400"
        />
      </div>
    );
  }
}

export default MixedCharts;
