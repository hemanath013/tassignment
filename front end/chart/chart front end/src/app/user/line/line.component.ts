import { Component } from '@angular/core';
import Chart from 'chart.js/auto';
import { UserService } from '../user.service';


@Component({
  selector: 'app-line',
  templateUrl: './line.component.html',
  styleUrls: ['./line.component.scss']
})

export class LineComponent {
  lineChart: any;
  user: any[] = [];
  hoursCount: number[] = Array.from({ length: 24 }, () => 0); // Initialize array with 24 zeros

  constructor(private data: UserService) {
    this.data.getUsersBetweenDates().subscribe(
      (res: any) => {

        this.user = res;
        this.countHours(this.user);
        this.createLineChart();
      },
      (error: any) => {
        console.error('Error fetching data:', error);
      }
    );
  }

  countHours(users: any[]) {
    users.forEach(user => {
      const registeredTime = new Date(user.date);
      const registeredHour = registeredTime.getUTCHours();
      this.hoursCount[registeredHour]++;
    });
  }

  createLineChart() {
    const labels = Array.from({ length: 24 }, (_, i) => `${i}:00`);
    const data = this.hoursCount;

    const ctx = document.getElementById('MyLineChart') as HTMLCanvasElement;
    if (this.lineChart) {
      this.lineChart.destroy();
    }
    this.lineChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: labels,
        datasets: [
          {
            label: 'Hour of Registration',
            data: data,
            backgroundColor: 'blue'
          },
        ]
      },
      options: {
        aspectRatio: 2.5
      }
    });
  }

}


