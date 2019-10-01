import React, { Component } from 'react';
import Chart from 'react-apexcharts'

class Charts extends Component {

    constructor(props) {
        super(props);

        // this.updateCharts = this.updateCharts.bind(this)

        this.state = {
            optionsMixedChart: {
                chart: {
                    id: 'basic-bar',
                    stacked: true,
                    toolbar: {
                        show: false
                    }
                },
                stroke: {
                    width: [5, 5, 5],
                },
                xaxis: {
                    categories: [1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012],
                    labels: {
                        show: true,
                        rotate: -45,
                        rotateAlways: false,
                        hideOverlappingLabels: true,
                        trim: true,
                        minHeight: undefined,
                        maxHeight: 120,
                        showDuplicates: false,
                        style: {
                            colors: [],
                            fontSize: '12px',
                            fontFamily: undefined,
                            cssClass: 'apexcharts-xaxis-label'
                        },
                        offsetX: 0,
                        offsetY: 0,
                        format: undefined,
                        formatter: undefined, // custom formatter function which will override format
                        datetimeFormatter: {
                            year: 'yyyy',
                            month: 'MMM \'yy',
                            day: 'dd MMM',
                            hour: 'HH:mm',
                            minute: 'HH:mm:ss'
                        }
                    }
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
            seriesMixedChart: [{
                name: 'Strike rate',
                type: 'line',
                data: []
            }, {
                name: 'Highest score',
                type: 'line',
                data: []
            }]
        }
    }

    componentWillReceiveProps(nextProps, nextContext) {
        this.setState({
            seriesMixedChart: [{
                name: 'Strike rate',
                type: 'line',
                data: nextProps.a
            }, {
                name: 'Highest score',
                type: 'line',
                data: nextProps.b
            }]
        })
    }

    // updateCharts() {
    //     const max = 90;
    //     const min = 30;
    //     const newMixedSeries = [];
    //     const newBarSeries = [];
    //
    //     this.state.seriesMixedChart.map((s) => {
    //         const data = s.data.map(() => {
    //             return Math.floor(Math.random() * (max - min + 1)) + min
    //         })
    //         newMixedSeries.push({ data: data, type: s.type })
    //     })
    //
    //     this.state.seriesBar.map((s) => {
    //         const data = s.data.map(() => {
    //             return Math.floor(Math.random() * (180 - min + 1)) + min
    //         })
    //         newBarSeries.push({ data, name: s.name })
    //     })
    //
    //
    //     this.setState({
    //         seriesMixedChart: newMixedSeries,
    //         seriesBar: newBarSeries,
    //         seriesRadial: [Math.floor(Math.random() * (90 - 50 + 1)) + 50]
    //     })
    // }

    render() {

        return (
                    <div className="temp">
                        <Chart options={this.state.optionsMixedChart} series={this.state.seriesMixedChart} type="line" width="100%" height="400" />
                    </div>
        );
    }
}

export default Charts;
