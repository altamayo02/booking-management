import { Component } from '@angular/core';
import { HttpService } from '../../../services/http.service';
import { Constants } from '../../../constants';
import { TitleCasePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ModalComponent } from '../../modal/modal.component';

interface User {
	identificacion: string;
	nombres: string;
	apellidos: string;
	perfil: string;
}

interface Mode {
	value: string;
	display: string;
}

/* interface Pagination {
	pages: Array<Array<User>>,
	pageLength: number,
	currentPage: number,
	totalPages: number
} */

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [TitleCasePipe, ModalComponent, FormsModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
	companyName = Constants.companyInfo.name
	users: User[] = [];
	modalMode: Mode | any = {
		value: '',
		display: ''
	};
	/* pagination: Pagination = {
		pages: [],
		pageLength: 5,
		currentPage: 0,
		totalPages: 0
	}; */

	constructor(private http: HttpService) {}

	ngOnInit() {
		this.http.getData(`${Constants.apiUrl}/usuarios/todos`).subscribe({
			next: (response) => {
				this.users = response.data;				
				/* for (let i = 0; i < this.users.length; i++) {
					if (this.pagination.pages.length)
					this.paginate(i)
				} */
			}
		})
	}

	openModal(value: string, display: string) {
		this.modalMode = {
			value: value,
			display: display
		}
	}

	/* paginate(i: number) {
		console.log('hi');
		
		let page = Math.floor(i / this.pagination.pageLength)
		this.pagination.pages[page].push(this.users[i])
	} */
}
