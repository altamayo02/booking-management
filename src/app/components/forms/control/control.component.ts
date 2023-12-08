import { Component, Input } from '@angular/core';
import { BaseControl } from '../form/base-control';
import { FormGroup } from '@angular/forms';

@Component({
	selector: 'app-control',
	standalone: true,
	imports: [],
	templateUrl: './control.component.html',
	styleUrl: './control.component.css'
})
export class ControlComponent {
	@Input() control!: BaseControl<string>;
	@Input() form!: FormGroup;
	formGroup: any;

	
	public get isValid(): boolean {
		return this.form.controls[this.control.name].valid;
	}
	
}
