import { ApexOptions } from 'apexcharts';
import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import Chart from 'react-apexcharts';


// Данные с сервера
/*** 
  {
    name: string, // название графика
    width: 'full' | 'part', // ширина графика ( на весь экран или на часть экрана)
    dataLabels: boolean, // отображать значение для бара (визуально)
    categories: [string, string], // Значения по x (отсортированные)
    bar_width: number, // ширина всех баров на графике
    series: [  //  Группа бар для categories отображает массив бар для каждой categories ( для оси Y)
      { 
        name:  string // Название бара 1,
        data: [number, number], // массив  всех бар1 на графике с индексом categories ( categories.length == data.lenght)
        color: string, // цвет  в формате HEX для бара
      },
      { 
        name: string // Название бара 2,
        data: [number, number],// массив всех бар2 на графике с индексом categories ( categories.length == data.lenght)
        color: string,
      },
      ...
    ]
  }
]
***/


const ChartBar = () => {
  
  const chartData: ApexOptions = {
      chart: {
        id: 'bar-basic',
      },
      plotOptions: {
        bar: {
          borderRadius: 10,
          dataLabels: {
            position: 'top', // top, center, bottom
          },
        }
      },
      series: [
        {
          name: "Distance Traveled",
          type: "column",
          data: [440, 505, 414, 571, 227, 413, 201, 352, 652, 320, 257, 160]
        },
        {
          name: "Time Traveled",
          type: "column",
          data: [23, 42, 35, 27, 43, 22, 17, 31, 42, 22, 12, 16]
        }
      ],
      xaxis: {
        categories: [1991, 1992, 1993, 1994, 1995, 1996]
      },
      // fill:{
      //   colors: ['#F44336', '#E91E63', '#9C27B0'],
      // },
      fill: {
        type: 'gradient',
        gradient: {
          shade: 'light',
          type: "horizontal",
          shadeIntensity: 0.25,
          gradientToColors: undefined,
          inverseColors: true,
          opacityFrom: 0.85,
          opacityTo: 0.85,
          stops: [50, 0, 100]
        },
      },
  };
  return (
    <div className='chart_wrapper'>
      <Chart options={chartData} series={chartData.series} type="bar" width={500}/>
    </div>
  )
}

export default ChartBar