import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Geocapitalizer: Angular 2 Application';
  countries = [
    {name: 'Bahrain', capital: 'Manama', population: 1781000},
    {name: 'Egypt', capital: 'Cairo', population: 90254000},
    {name: 'Iran', capital: 'Tehran', population: 78778000},
    {name: 'Iraq', capital: 'Baghdad', population: 36575000},
    {name: 'Israel', capital: 'Jerusalem', population: 8372000},
    {name: 'Jordan', capital: 'Amman', population: 6837000},
    {name: 'Kuwait', capital: 'Kuwait City', population: 4161000},
    {name: 'Lebanon', capital: 'Beirut', population: 6185000},
    {name: 'Oman', capital: 'Muscat', population: 4181000},
    {name: 'Qatar', capital: 'Doha', population: 2113000},
    {name: 'Saudi Arabia', capital: 'Riyadh', population: 31521000},
    {name: 'Syria', capital: 'Damascus', population: 23270000},
    {name: 'Turkey', capital: 'Ankara', population: 78214000},
    {name: 'UAE', capital: 'Abu Dhabi', population: 10000000},
    {name: 'Yemen', capital: 'Sanaa', population: 26745000},
  ]
  population() {
    return this.countries.reduce((a, b) => a + b.population, 0)
  }
}
