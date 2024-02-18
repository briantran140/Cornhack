"use client"

import React, { useEffect, useState } from 'react';

const ChartComponent: React.FC = () => {
  const [chartData, setChartData] = useState<google.visualization.DataTable | null>(null);
  const [chartOptions, setChartOptions] = useState<google.visualization.BarChartOptions | null>(null);

  useEffect(() => {
    if (!window.google) {
      const script = document.createElement('script');
      script.src = 'https://www.gstatic.com/charts/loader.js';
      script.async = true;
      script.onload = () => {
        window.google.charts.load('current', { packages: ['corechart'] });
        window.google.charts.setOnLoadCallback(initializeChart);
      };

      document.head.appendChild(script);
    } else {
      initializeChart();
    }

    // Cleanup function to remove the event listener
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if (chartData && chartOptions) {
      window.addEventListener('resize', handleResize);
    }
  }, [chartData, chartOptions]);

  const initializeChart = () => {
    const chartElement = document.getElementById('google-chart');

    if (chartElement) {
      const data = window.google.visualization.arrayToDataTable([
        ['Measure', 'Percentage of Students', { role: "style" }],
        ['Depression overall', 41, "color: #BE84C5" ],
        ['Anxiety disorder', 34, "color: #BE84C5"],
        ['Eating disorder', 12, "color: #BE84C5"],
        ['Non-suicidal self-injury (past year)', 23, "color: #BE84C5"],
        ['Suicidal ideation (past year)', 13, "color: #BE84C5"],
        ['Mental health therapy/counseling (past year)', 30, "color: #BE84C5"],
      ]);

      const view = new window.google.visualization.DataView(data);
        view.setColumns([
        0,
        1,
        {
            calc: (dt: any, row: any) => dt.getFormattedValue(row, 1) + '%', // Add '%' after the numbers
            sourceColumn: 1,
            type: 'string',
            role: 'annotation',
        },
        2,
    ]);

      const options: google.visualization.BarChartOptions = {
        title: 'Key Findings from Mental Health Survey, in %',
        titlePosition: 'center',
        bar: { groupWidth: '90%' },
        chartArea: {
            width: '70%',
            height: '80%',
            backgroundColor: {
              stroke: '#000', // Border color for the chart area
              strokeWidth: 1,  // Border width for the chart area
              fill: '#FFFEF7', // Background color for the chart area
            },
        },
        legend: { position: 'none' },
        hAxis: {
          viewWindow: {
            max: 50, 
          },
        },
        backgroundColor: 'transparent',
      };
      const newChart = new window.google.visualization.BarChart(chartElement);
      newChart.draw(view, options);
      // @ts-ignore
      setChartData(view);
      setChartOptions(options);
    } else {
      console.error("Element with id 'google-chart' not found.");
    }
  };

  const handleResize = () => {
    if (chartData && chartOptions) {
      const chartElement = document.getElementById('google-chart');
      if (chartElement) {
        const newChart = new window.google.visualization.BarChart(chartElement);
        newChart.draw(chartData, chartOptions);
      }
    }
  };

  return <div id="google-chart" style={{ width: '100%', height: '400px' }}></div>;
};

export default ChartComponent;
