import { Component, Input } from '@angular/core';
import { Constants } from '../../constants';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
	companyName = Constants.companyInfo.name
}
