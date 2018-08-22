import React from 'react';
import '../css/ServiceButton.css'
import PropTypes from 'prop-types';

import {Line} from "react-chartjs-2";

class ChartBox extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            dummyData: {
                labels: ["January", "February", "March", "April", "May", "June", "July"],
                datasets: [
                    {
                        label: "Water Consumption 2018",
                        backgroundColor: "rgba(77,147,222,0.2)",
                        borderColor: "rgba(77,147,222,1)",
                        //
                        data: [65, 59, 56, 55, 60, 77, 126],
                    }
                ]
            }
        }
    }

    render() {

        const options = {
            scales: {
                yAxes: [{
                    ticks: {
                        userCallback: function (item) {
                            return `${item} KWh`;
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

ChartBox.propTypes = {
    name: PropTypes.string.isRequired,
};

export default ChartBox;
