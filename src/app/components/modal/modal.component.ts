import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormComponent } from '../forms/form/form.component';
import { UserComponent } from '../admin-view/user/user.component';
import { BaseControl } from '../forms/form/base-control';
import { HttpClient } from '@angular/common/http';
import { Constants } from '../../constants';

interface Mode {
	value: string;
	display: string;
}

@Component({
	selector: 'app-modal',
	standalone: true,
	imports: [FormComponent, UserComponent],
	templateUrl: './modal.component.html',
	styleUrl: './modal.component.css'
})
export class ModalComponent {
	@Input() mode: Mode | any = {
		value: '',
		display: ''
	};
	@Output() modeChange = new EventEmitter<object>();
	formControls: BaseControl<string>[] = [];

	constructor(private http: HttpClient) {}

	closeModal() {
		this.modeChange.emit({
			value: '',
			display: this.mode.display
		})
	}

	submitData() {
		switch (this.mode.value) {
			case 'add':
				this.http.post(`${Constants.apiUrl}/usuarios`, {
					// TODO
					identificacion: '',
					nombres: '',
					apellidos: '',
					perfil: '',
					password: '',
				})
				break;

			case 'edit':
				this.http.put(`${Constants.apiUrl}/usuarios/${null}`, {
					// TODO
					identificacion: '',
					nombres: '',
					apellidos: '',
					perfil: '',
					password: '',
				})
				break;

			case 'delete':
				this.http.delete(`${Constants.apiUrl}/usuarios/${null}`)
		}
	}
}
