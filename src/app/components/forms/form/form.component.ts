import { Component, Input } from '@angular/core';
import { BaseControl } from './base-control';
import { ControlComponent } from '../control/control.component';
import { FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Constants } from '../../../constants';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [ControlComponent],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
	@Input() controls: BaseControl<string>[] = [];
	form!: FormGroup;
	payload: string = '';

	// TODO - Controls based on API response
}
