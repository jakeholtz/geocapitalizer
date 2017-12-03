import { Component } from '@angular/core';
import { Country } from './country';
import { COUNTRIES } from './mocks';

@Component({
  selector: 'AppCountryComponent',
  templateUrl: './app.country.component.html',
  styleUrls: ['./app.country.component.css']
})
export class AppCountryComponent {
  countries: Country[];
  population() {
    return this.countries.reduce((a, b) => a + b.population, 0)
  }
  ngOnInit() {
    this.countries = COUNTRIES;
  }
}