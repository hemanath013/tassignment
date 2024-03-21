import { Component } from '@angular/core';
import { UserService } from '../user.service';
import Chart from 'chart.js/auto';


@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.scss']
})

export class BarComponent {
  barChart: any;
  user: any[] = [];
  months: { [key: string]: number } = {};
  month: any;
  year: any;

  constructor(private data: UserService) {
    this.data.getUsersBetweenDates().subscribe(
      (res: any) => {
        this.user = res;
        this.countMonths(this.user);
        this.createBarChart(Object.keys(this.months), Object.values(this.months));
      },
      (error: any) => {
        console.error('Error fetching data:', error);
      }
    ); 
  }

  selectedMonth(event: Event) {
  
    this.month = (event.target as HTMLSelectElement).value;
    this.updateChart();
  }

  selectedYear(event: Event) {
    this.year = (event.target as HTMLSelectElement).value;
    this.updateChart();
  }

  updateChart() {
    if (this.year && this.month && this.user.length > 0) {
    
      const selectedMonth = Number(this.month) - 1;
      const startDate = new Date(`${this.year}-${this.pad(selectedMonth + 1)}-01T00:00:00Z`);
      const endDate = new Date(`${this.year}-${this.pad(selectedMonth + 2)}-01T00:00:00Z`);
      endDate.setDate(0);
      console.log(endDate);
      
      const filteredUsers = this.user.filter((user: {date: string }) => {
        const registrationDate = new Date(user.date);
        return registrationDate >= startDate && registrationDate < endDate;
      });
      console.log(filteredUsers);   

      const dateCounts = this.countDates(filteredUsers);
      
      this.createBarChart(Object.keys(dateCounts), Object.values(dateCounts));
    }
  }

  pad(num: number): string {
    return num.toString().padStart(2, '0');
  }

  countMonths(users: any[]): { [key: string]: number } {
    const months: { [key: string]: number } = {};
    users.forEach((user: any) => {
      const registrationDate = new Date(user.registration_date);
      const month = registrationDate.toLocaleString('default', { month: 'long' });
      months[month] = (months[month] || 0) + 1;
    });
    return months;
  }

  countDates(filteredUsers: any[]): { [key: string]: number } {
    const counts: { [key: string]: number } = {};

    filteredUsers.forEach((user: any) => {
      const registrationDate = new Date(user.date);
      const day = registrationDate.getDate().toString();
      counts[day] = (counts[day] || 0) + 1;
    });

    return counts;
  }

  createBarChart(labels: string[], data: number[]) {
    const ctx = document.getElementById('MyCharts') as HTMLCanvasElement;
    if (this.barChart) {
      this.barChart.destroy();
    }
    this.barChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: labels,
        datasets: [
          {
            label: 'Data',
            data: data,
            backgroundColor: 'rgba(54, 162, 235, 0.5)', 
            borderColor: 'rgba(54, 789, 235, 1)', 
            borderWidth: 1
          }
        ]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }
}
