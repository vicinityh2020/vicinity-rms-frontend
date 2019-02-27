import React from 'react';
import PropTypes from 'prop-types';

import {Line} from "react-chartjs-2";

class ChartBox extends React.Component {

    static propTypes = {
        units: PropTypes.string.isRequired,
        labels: PropTypes.array.isRequired,
        data: PropTypes.array.isRequired,
        device: PropTypes.string.isRequired
    };

    constructor(props) {
        super(props);

        this.state = {
            dummyData: {
                // TODO: retrieve real data from backend in the following format:
                labels: [
                    "00:00", "01:00", "02:00", "03:00", "04:00", "05:00", "06:00", "07:00",
                    "08:00", "09:00", "10:00", "11:00", "12:00", "13:00", "14:00"],
                datasets: [
                    {

                        label: `${this.props.device} ${(() => {
                            
                            let dt = new Date();
                            
                            return `${dt.getMonth() + 1}/${dt.getDate()}/${dt.getFullYear()}`;
                        })()}`,

                        backgroundColor: "rgba(77,147,222,0.2)",
                        borderColor: "rgba(77,147,222,1)",
                        // TODO: retrieve real data from backend in the following format:
                        data: ((size, min, max) => {
                            return new Array(size).fill(0).map(() => {
                                return Math.round(Math.random() * (max - min) + min);
                            });
                        })(15, 2, 5),
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
