import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgApexchartsModule } from 'ng-apexcharts';

import {
  ChartComponent as ApexChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexTooltip,
  ApexStroke,
  ApexTheme,
  ApexGrid,
  ApexFill,
  ApexYAxis,
  ApexLegend,
  ApexNonAxisChartSeries,
  ApexResponsive
} from 'ng-apexcharts';

export type AreaChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  stroke: ApexStroke;
  tooltip: ApexTooltip;
  dataLabels: ApexDataLabels;
  colors: string[];
  fill: ApexFill;
  grid: ApexGrid;
  theme: ApexTheme;
  yaxis: ApexYAxis;
};

export type DonutChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  labels: string[];
  theme: ApexTheme;
  responsive: ApexResponsive[];
  legend: ApexLegend;
  stroke: ApexStroke;
  colors: string[];
};

@Component({
  selector: 'app-charts',
  standalone: true,
  imports: [CommonModule, NgApexchartsModule],
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent {
  
  public areaChartOptions: AreaChartOptions;
  public donutChartOptions: DonutChartOptions;

  constructor() {
    this.areaChartOptions = {
      series: [
        {
          name: 'Revenue',
          data: [3100, 4000, 2800, 5100, 4200, 10900, 10000]
        },
        {
          name: 'Expenses',
          data: [1100, 3200, 4500, 3200, 3400, 5200, 4100]
        }
      ],
      chart: {
        height: 350,
        type: 'area',
        fontFamily: 'inherit',
        toolbar: { show: false },
        background: 'transparent'
      },
      colors: ['#3b82f6', '#10b981'], // blue-500, green-500
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'smooth',
        width: 3
      },
      fill: {
        type: 'gradient',
        gradient: {
          shadeIntensity: 1,
          opacityFrom: 0.4,
          opacityTo: 0.05,
          stops: [0, 90, 100]
        }
      },
      xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
        axisBorder: { show: false },
        axisTicks: { show: false },
        labels: {
          style: { cssClass: 'text-slate-500 fill-slate-500 text-xs' }
        }
      },
      yaxis: {
        labels: {
          style: { cssClass: 'text-slate-500 fill-slate-500 text-xs' },
          formatter: (value) => { return "$" + value }
        }
      },
      grid: {
        borderColor: 'rgba(148, 163, 184, 0.1)',
        strokeDashArray: 4,
        yaxis: { lines: { show: true } }
      },
      tooltip: {
        theme: 'dark' // Looks better overall
      },
      theme: {
        mode: 'light' // Can be adjusted dynamically in a real app based on state
      }
    };

    this.donutChartOptions = {
      series: [44, 55, 13, 33],
      labels: ['Direct', 'Social', 'Referral', 'Organic'],
      chart: {
        type: 'donut',
        height: 350,
        fontFamily: 'inherit',
        background: 'transparent'
      },
      colors: ['#6366f1', '#3b82f6', '#10b981', '#f59e0b'],
      stroke: {
        width: 0
      },
      legend: {
        position: 'bottom',
        fontSize: '14px',
        labels: { colors: '#64748b' }
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: { width: 200 },
            legend: { position: 'bottom' }
          }
        }
      ],
      theme: {
        mode: 'light'
      }
    };
  }
}
