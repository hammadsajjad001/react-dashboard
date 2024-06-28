<<<<<<< HEAD
import React, { useState } from "react";
import { Chart as ChartJS, defaults } from "chart.js/auto";
import { Line } from "react-chartjs-2";
=======
import React from 'react';
import {Chart as ChartJS,defaults} from "chart.js/auto";
import {Line} from "react-chartjs-2";
>>>>>>> ccbb601011da5cbd7e2f9725e675d4d484af20c0

import sourceData from "./sourceData.json";

defaults.maintainAspectRatio = false;
<<<<<<< HEAD
defaults.responsive = true;

const verticalLinesPlugin = {
  id: "verticalLines",
  beforeDraw: (chart) => {
    const {
      ctx,
      chartArea: { top, bottom, left, right },
      scales: { x },
    } = chart;
    const xValues = [
      "FEB",
      "MAR",
      "APR",
      "MAY",
      "JUN",
      "JUL",
      "AUG",
      "SEP",
      "OCT",
      "NOV",
      "DEC",
    ];
    const offsetTop = 10;
    const offsetBottom = 10;

    ctx.save();
    ctx.strokeStyle = "#2f3669";
    ctx.lineWidth = 0.4;
    xValues.forEach((xValue) => {
      const xPosition = x.getPixelForValue(xValue);
      ctx.beginPath();
      ctx.moveTo(xPosition, top + offsetTop);
      ctx.lineTo(xPosition, bottom - offsetBottom);
      ctx.stroke();
    });
    ctx.restore();
  },
};
const yAxisValues = [60, 70, 80, 90, 100, 110, 120];

export default function PerformanceChart() {
  const [chartData, setChartData] = useState({
    labels: sourceData.map((data) => data.label),
    datasets: [
      {
        label: "Accounts Data",
        data: sourceData.map((data) => data.accountsValue), 
        borderColor: "#1f8ef1",
        borderWidth: 2,
        fill: false,
      },
    ],
  });

  const [activeButton, setActiveButton] = useState("accounts");

  const handleAccountsClick = () => {
    setChartData({
      labels: sourceData.map((data) => data.label),
      datasets: [
        {
          label: "Accounts Data",
          data: sourceData.map((data) => data.accountsValue),
          borderColor: "#1f8ef1",
          borderWidth: 2,
          fill: false,
        },
      ],
    });
    setActiveButton("accounts");
  };

  const handlePurchaseClick = () => {
    setChartData({
      labels: sourceData.map((data) => data.label),
      datasets: [
        {
          label: "Purchase Data",
          data: sourceData.map((data) => data.purchaseValue),
          borderColor: "#1f8ef1",
          borderWidth: 2,
          fill: false,
        },
      ],
    });
    setActiveButton("purchase");
  };

  const handleSessionsClick = () => {
    setChartData({
      labels: sourceData.map((data) => data.label),
      datasets: [
        {
          label: "Sessions Data",
          data: sourceData.map((data) => data.sessionsValue),
          borderColor: "#1f8ef1",
          borderWidth: 2,
          fill: false,
        },
      ],
    });
    setActiveButton("sessions");
  };

  const buttonClass = (button) =>
    `chart-btn ${activeButton === button ? "active" : ""}`;

  return (
    <div className="chart-container">
      {/* HEADER */}
      <div className="chart-header">
        <div className="chart-header-details">
          <h5 className="chart-detail-heading">Total Shipments</h5>
          <h2 className="chart-heading">Performance</h2>
        </div>
        <div className="chart-buttons">
          <button
            className={buttonClass("accounts")}
            onClick={handleAccountsClick}
          >
            Accounts
          </button>
          <button
            className={buttonClass("purchase")}
            onClick={handlePurchaseClick}
          >
            Purchase
          </button>
          <button
            className={buttonClass("sessions")}
            onClick={handleSessionsClick}
          >
            Sessions
          </button>
=======
defaults.responsive =true;

const verticalLinesPlugin = {
    id: 'verticalLines',
    beforeDraw: (chart) => {
      const { ctx, chartArea: { top, bottom, left, right }, scales: { x } } = chart;
      const xValues = [ 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC']; 
      const offsetTop = 10; 
      const offsetBottom = 10; 
  
      ctx.save();
      ctx.strokeStyle = '#2f3669'; 
      ctx.lineWidth = 0.4; 
      xValues.forEach(xValue => {
        const xPosition = x.getPixelForValue(xValue);
        ctx.beginPath();
        ctx.moveTo(xPosition, top + offsetTop); 
        ctx.lineTo(xPosition, bottom - offsetBottom);
        ctx.stroke();
      });
      ctx.restore();
    }
  };
  const yAxisValues = [60,70,80,90,100,110,120];

export default function PerformanceChart() {


  return (
    <div  className='chart-container'>
      {/* HEADER */}
      <div className='chart-header'>
        <div className='chart-header-details'>
        <h5 className='chart-detail-heading'>Total Shipments</h5>
        <h2 className='chart-heading'>Performance</h2>
        </div>
        <div className='chart-buttons'>
          <button className='chart-btn chart-btn1'>Accounts</button>
          <button className='chart-btn'>Purchase</button>
          <button className='chart-btn chart-btn3'>Sessions</button>
>>>>>>> ccbb601011da5cbd7e2f9725e675d4d484af20c0
        </div>
      </div>

      {/* CHART PERFORMANCE */}
<<<<<<< HEAD
      <div style={{ height: "230px" }}>
        <Line
          data={chartData}
          options={{
            elements: {
              line: {
                tension: 0.5,
              },
            },
            plugins: {
              legend: {
                display: false,
              },
            },
            scales: {
              x: {
                border: {
                  display: false,
                },
                grid: {
                  display: false,
                },
                ticks: {
                  padding: 20,
                  color: " rgba(255, 255, 255, 0.473)",
                },
              },
              y: {
                border: {
                  display: false,
                },
                grid: {
                  display: false,
                },
                ticks: {
                  padding: 5,
                  font: {
                    size: "12",
                  },
                  color: "rgba(255, 255, 255, 0.473)",
                  callback: function (yAxisValues) {
                    return yAxisValues + "     ";
                  },
                  values: yAxisValues,
                },
                suggestedMin: 60,
                suggestedMax: 120,
              },
            },
          }}
          plugins={[verticalLinesPlugin]}
        />
      </div>
    </div>
  );
=======
        <div style={{height: "230px"}}>
      <Line
      data={{                                                
        labels: sourceData.map((data) => data.label),
        datasets: [
            {
                data: sourceData.map((data) => data.value),
                Color:"#1f8ef1",
                borderWidth: 2,
                // fill: true,
            }
        ]
      }}
      options={{
        elements:{
            line:{
                tension:0.5,
            }
        },
        plugins:{
            legend:{
              display: false,
            },
        },
        scales: {
            x: {
              border :{
                display: false,
              },
              grid: {
                display: false,
              },
              ticks: {
                padding: 20, 
              color:" rgba(255, 255, 255, 0.473)"
              },
            },
            y: {
              border :{
                display: false,
              },
              grid: {
                display: false,
              },
              ticks: {
                padding: 5,
                font:{
                  size : "12",
                },
              color:"rgba(255, 255, 255, 0.473)",
                callback: function(yAxisValues) {
                  return yAxisValues + "     "; 
                },
                values: yAxisValues,
              },
              suggestedMin: 60, 
              suggestedMax: 120,
            },
          },
      }}
      plugins={[verticalLinesPlugin]}
      />
      </div>
    </div>
  )
>>>>>>> ccbb601011da5cbd7e2f9725e675d4d484af20c0
}
