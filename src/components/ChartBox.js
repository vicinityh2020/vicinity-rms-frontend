import React from 'react';
import PropTypes from 'prop-types';

import {Line} from "react-chartjs-2";

class ChartBox extends React.Component {

    static propTypes = {
        units: PropTypes.string.isRequired,
        labels: PropTypes.array.isRequired,
        data: PropTypes.array.isRequired
    };

    constructor(props) {
        super(props);

        this.state = {
            dummyData: {
                // TODO: retrieve real data from backend in the following format:
                labels: ["January", "February", "March", "April", "May", "June", "July"],
                datasets: [
                    {
                        label: "Power Consumption 2018",
                        backgroundColor: "rgba(77,147,222,0.2)",
                        borderColor: "rgba(77,147,222,1)",
                        // TODO: retrieve real data from backend in the following format:
                        data: [65, 59, 56, 55, 60, 77, 126],
                    }
                ]
            }
        }
    }

    render() {

        let units = this.props.units;

        const options = {
            scales: {
                yAxes: [{
                    ticks: {
                        userCallback: function (item) {
                            return `${item} ${units}`;
                        },
                    }
                }]
            }
        };

        return (
            <Line data={this.state.dummyData} options={options}/>
        );
    }
}

export default ChartBox;
