import { Component, HostListener, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HttpService } from './services/http.service';
import { Constants } from './constants';

interface NavBar {
	options: {
		value: string,
		text: string,
	}[];
	mobile: boolean;
	folded: boolean;
}

@Component({
	selector: 'app-root',
	standalone: true,
	imports: [CommonModule, RouterOutlet, RouterLink],
	templateUrl: './app.component.html',
	styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
	companyName = Constants.companyInfo.name
	title = 'booking-management';
	nav: NavBar = {
		options: [],
		mobile: false,
		folded: false
	};

	constructor(private http: HttpService) {}

	ngOnInit() {
		// Fetch the menu options from database
		this.http.getData('./assets/navMenu.json').subscribe({
			next: (response) => {
				this.nav.options = response
			}
		})
		// Update this.mobileView for the first time
		this.onWindowResize()
	}

	@HostListener(
		'window:resize',
		['$event']
	)
	onWindowResize() {
		this.nav.mobile = window.innerWidth < 800
	}
}
