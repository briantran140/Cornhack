"use client"
import React, { useEffect } from 'react';

const ChartComponent: React.FC = () => {
  useEffect(() => {
    if (!window.google) {
      const script = document.createElement('script');
      script.src = 'https://www.gstatic.com/charts/loader.js';
      script.async = true;
      script.onload = () => {
        window.google.charts.load('current', { packages: ['corechart'] });
        window.google.charts.setOnLoadCallback(drawChart);
      };

      document.head.appendChild(script);
    } else {
      drawChart();
    }
  }, []);

  const drawChart = () => {
    const chartElement = document.getElementById('google-chart');
    console.log('chartElement:', chartElement);

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

      const options = {
        title: 'Key Findings from Mental Health Survey',
        bars: 'vertical',
        bar: { groupWidth: '90%' },
        chartArea: { width: '70%', height: '80%' },
        legend: { position: "none" },
      };

      const chart = new window.google.visualization.BarChart(chartElement);
      //@ts-ignore
      chart.draw(view, options);
    } else {
      console.error("Element with id 'google-chart' not found.");
    }
  };

  return <div id="google-chart" style={{ width: '100%', height: '400px' }}></div>;
};

export default ChartComponent;
