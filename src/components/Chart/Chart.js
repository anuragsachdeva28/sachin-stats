import React, { Component } from "react";
import Chart from "react-apexcharts";

class Charts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      optionsMixedChart: {
        chart: {
          id: "basic-bar",
          stacked: true,
          toolbar: {
            show: false
          }
        },
        stroke: {
          width: [5, 5, 5]
        },
        xaxis: {
          type: "category",
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
          ],
          labels: {
            show: true,
            rotate: -45,
            rotateAlways: false,
            hideOverlappingLabels: true,
            trim: true,
            minHeight: undefined,
            maxHeight: 120,
            showDuplicates: false
          },
          tickAmount: 10,
          min: 1990,
          max: 2012
        },
        markers: {
          size: 6,
          strokeWidth: 3,
          fillOpacity: 0,
          strokeOpacity: 0,
          hover: {
            size: 15
          }
        }
      },
      seriesMixedChart: [
        {
          name: "Strike rate",
          type: "line",
          data: []
        },
        {
          name: "Highest score",
          type: "line",
          data: []
        }
      ]
    };
  }

  componentWillReceiveProps(nextProps, nextContext) {
    this.setState({
      seriesMixedChart: [
        {
          name: "Strike rate",
          type: "line",
          data: nextProps.a
        },
        {
          name: "Highest score",
          type: "line",
          data: nextProps.b
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

export default Charts;
