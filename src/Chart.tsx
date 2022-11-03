import { ApexOptions } from 'apexcharts';
import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import Chart from 'react-apexcharts';

// Данные отсортированы 
// const example = {
//   chart: [
//     /* ВАРИАНТ 1 два столбца */
//     // Поле на шкале массив объектов если две колонки и более на графике 
//     [{
//       value:34, // Значение поля для оси y на оси x  (продолжительность звонка)
//       title: 1901, // Имя промежутка по оси x (Дата звонка время звонка)  __1901__|__1902__|__1903__|__1904__
//     },
//     {
//       value:34, // Значение поля для оси y на оси x  (продолжительность звонка)
//       title: 1901, // Имя промежутка по оси x (Дата звонка время звонка)  __1901__|__1902__|__1903__|__1904__
//     }
//   ],
//   /* ВАРИАНТ 2 один столбец */
//   // Один объект если колонка на графике
//     {
//       value:34, // Значение поля для оси y на оси x  (продолжительность звонка)
//       title: 1901, // Имя промежутка по оси x (Дата звонка время звонка)  __1901__|__1902__|__1903__|__1904__
//     }
//   ] 
// }

// Ось X
// Список
// Название поля 
// Значение

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
      fill:{
        colors: ['#F44336', '#E91E63', '#9C27B0'],
      },
      // fill: {
      //   type: 'gradient',
      //   gradient: {
      //     shade: 'light',
      //     type: "horizontal",
      //     shadeIntensity: 0.25,
      //     gradientToColors: undefined,
      //     inverseColors: true,
      //     opacityFrom: 0.85,
      //     opacityTo: 0.85,
      //     stops: [50, 0, 100]
      //   },
      // },
  };
  return (
    <div className='chart_wrapper'>
      <Chart options={chartData} series={chartData.series} type="bar" width={500}/>
    </div>
  )
}

export default ChartBar