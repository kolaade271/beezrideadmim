import React from "react";
import { Bar } from "react-chartjs-2";

/* eslint-disable no-unused-vars */

import { Chart as ChartJS } from "chart.js/auto";

/* eslint-enable no-unused-vars */


function TrafficData({ trafficData }) {
    return <Bar data={trafficData} />;
  }

export default TrafficData;