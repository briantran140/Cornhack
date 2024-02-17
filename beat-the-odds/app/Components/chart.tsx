"use client"
import React, { useEffect } from 'react';
import { Chart } from 'react-google-charts';

const ChartComponent: React.FC = () => {
  useEffect(() => {
    // Check if the Google Charts library is already loaded
    if (!window.google) {
      const script = document.createElement('script');
      script.src = 'https://www.gstatic.com/charts/loader.js';
      script.async = true;
      script.onload = () => {
        // Load the Google Charts library and callback function
        window.google.charts.load('current', { packages: ['corechart'] });
        window.google.charts.setOnLoadCallback(drawChart);
      };

      // Append the script to the document
      document.head.appendChild(script);
    } else {
      // If Google Charts library is already loaded, directly call the callback
      drawChart();
    }
  }, []);

  const drawChart = () => {
    const chartElement = document.getElementById('google-chart');
  
    // Check if the element exists
    if (chartElement) {
      const data = window.google.visualization.arrayToDataTable([
        ['Task', 'Hours per Day'],
        ['Work', 11],
        ['Eat', 2],
        ['Commute', 2],
        ['Watch TV', 2],
        ['Sleep', 7],
      ]);
  
      const options = {
        title: 'My Daily Activities',
      };
  
      const chart = new window.google.visualization.PieChart(chartElement);
  
      chart.draw(data, options);
    } else {
      console.error("Element with id 'google-chart' not found.");
    }
  };

  return <Chart chartType="PieChart" data={[['Task', 'Hours per Day'], ['Work', 11], ['Eat', 2], ['Commute', 2], ['Watch TV', 2], ['Sleep', 7]]} width="100%" height="400px" />;
};

export default ChartComponent;
