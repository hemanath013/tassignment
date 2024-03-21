import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';
import { UserService } from '../user/user.service';


@Component({
  selector: 'app-pei',
  templateUrl: './pei.component.html',
  styleUrls: ['./pei.component.scss']
})
export class PeiComponent implements OnInit {
  pieChart: any;
  districtCounts: { [key: string]: number } = {};

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUsersBetweenDates().subscribe(
      (users: any[]) => {
        this.countDistricts(users);
        this.createPieChart();
      },
      (error: any) => {
        console.error('Error fetching data:', error);
      }
    );
  }

  countDistricts(users: any[]): void {
    this.districtCounts = {};
    users.forEach((user: any) => {
      const district = user.district;
      this.districtCounts[district] = (this.districtCounts[district] || 0) + 1;
    });
  }

  createPieChart(): void {
    const labels = Object.keys(this.districtCounts);
    const data = Object.values(this.districtCounts);

    const ctx = document.getElementById('pieChart') as HTMLCanvasElement;
    if (this.pieChart) {
      this.pieChart.destroy();
    }
    this.pieChart = new Chart(ctx, {
      type: 'pie',
      data: {
        labels: labels,
        datasets: [{
          label: 'Districts',
          data: data,
          backgroundColor: [
            'rgba(255, 99, 132, 0.5)',
            'rgba(54, 162, 235, 0.5)',
            'rgba(255, 206, 86, 0.5)',
            'rgba(75, 192, 192, 0.5)',
            'rgba(153, 102, 255, 0.5)',
            'rgba(255, 159, 64, 0.5)'
            // Add more colors if needed
          ],
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        aspectRatio: 1, // Ensure the chart is a square for better presentation
        plugins: {
          legend: {
            position: 'right',
          },
          title: {
            display: true,
            text: 'User Distribution by District'
          }
        }
      }
    });
  }
}
