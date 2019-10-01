import React, { Component } from 'react';
import Chart from 'react-apexcharts'

class MixedCharts extends Component {

    constructor(props) {
        super(props);

        this.updateCharts = this.updateCharts.bind(this)

        this.state = {
            optionsMixedChart: {
                chart: {
                    id: 'basic-bar',

                    stacked: true
                },
                stroke: {
                    width: [3, 3, 3],
                },
                xaxis: {
                    categories: [1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012]
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
            seriesMixedChart: [{
                name: 'series-1',
                type: 'column',
                data: [30, 40, 25, 50, 49, 21, 70, 51]
            }, {
                name: 'series-2',
                type: 'column',
                data: [23, 12, 54, 61, 32, 56, 81, 19]
            }],



        }
    }
    componentWillReceiveProps(nextProps, nextContext) {
        // console.log(nextProps);
        this.setState({
            optionsMixedChart: {
                chart: {
                    id: 'basic-bar',

                    stacked: (nextProps.type==="a")?true:false
                }
            },
            seriesMixedChart: [{
                name: (nextProps.type==="a")?"4s":"Half Century",
                type: 'column',
                data: nextProps.y_a
            }, {
                name: (nextProps.type==="a")?"6s":"Century",
                type: 'column',
                data: nextProps.y_b
            }],
        })
    }

    updateCharts() {
        const max = 90;
        const min = 30;
        const newMixedSeries = [];
        const newBarSeries = [];

        this.state.seriesMixedChart.map((s) => {
            const data = s.data.map(() => {
                return Math.floor(Math.random() * (max - min + 1)) + min
            })
            newMixedSeries.push({ data: data, type: s.type })
        })

        this.state.seriesBar.map((s) => {
            const data = s.data.map(() => {
                return Math.floor(Math.random() * (180 - min + 1)) + min
            })
            newBarSeries.push({ data, name: s.name })
        })


        this.setState({
            seriesMixedChart: newMixedSeries,
            seriesBar: newBarSeries,
            seriesRadial: [Math.floor(Math.random() * (90 - 50 + 1)) + 50]
        })
    }

    render() {

        return (
            <div className="temp">
                <Chart options={this.state.optionsMixedChart} series={this.state.seriesMixedChart} type="line" width="100%" height="400" />
            </div>
        );
    }
}

export default MixedCharts;
