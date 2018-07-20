import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  keyframes
} from '@angular/animations';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  private turn: boolean = false;

  public date: Date = new Date();
  public chartData;
  public resultat;
  public point = 5;
  public k = 1;
  public donnees = [];
  public autoScale: boolean = true;

  //parametres graphe line----------------------------------------
  public lineChartOptions: any = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      yAxes: [{ id: 'y-axis-1', type: 'linear', position: 'left', ticks: { min: -20, max: 40, fontColor: '#03a9f4' } }],
      xAxes: [{
        display: false,
        gridLines: {
          display: true,
          color: "rgba(0, 0, 0, 1)",
        }
      }]
    }
  };
  public lineChartColors: Array<any> = [
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: '#03a9f4',
      pointBorderColor: '#03a9f4',
      pointHoverBackgroundColor: '#03a9f4',
      pointHoverBorderColor: '#03a9f4',
    },
    { // dark grey
      backgroundColor: 'rgba(77,83,96,0.2)',
      borderColor: 'rgba(77,83,96,1)',
      pointBackgroundColor: 'rgba(77,83,96,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)'
    },
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];
  public lineChartLegend: boolean = false;
  public lineChartType: string = 'line';


  public lineChartData: Array<any> = [
    {
      data: [],
      label: 'test'
    }
  ];
  public lineChartLabels: Array<any> = [];
  //------------------------------------------------------------

  constructor() { }

  ngOnInit() {
    this.chartData = {
      chart: {
        type: 'line'
      },
      xAxis: {
        categories: this.lineChartLabels
      },
      yAxes: {
        ticks: {
          min: 0, max: 100
        }
      },
      series: [
        {
          name: 'Mesures',
          data: this.donnees
        }]
    };

    this.addpoint(25);
    this.addpoint(2);
    this.addpoint(15);
    this.addpoint(-18);
    this.addpoint(18);
  }

  public addpoint(value: number) {

    let date = new Date(Date.now.toString())

    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();

    if (second < 10) {
      let second = "0" + date.getSeconds();
      this.resultat = hour.toString() + " h " + minute.toString() + " m " + second.toString() + " s ";
    }
    else {
      //this.resultat = hour.toString() + " h " + minute.toString() + " m " + second.toString() + " s ";
    }

    this.donnees.push(value);

    if (this.k <= 20) {

      this.lineChartLabels.push('20-07-2018 12:04');
      this.k++;
    }
    else {
      this.donnees.shift();
      this.lineChartLabels.shift();
      this.lineChartLabels.push('20-07-2018 12:04');
    }

    this.lineChartData = [
      {
        data: this.donnees,
        label: '# en °C'
      }
    ];
  }

}
