import { Injectable } from '@angular/core';
import { BaseControl } from '../components/forms/form/base-control';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { asyncScheduler, scheduled } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ControlService {
	group(controls: BaseControl<string>[]) {
		const group: any = {};

		controls.forEach(control => {
			group[control.name] = new FormControl(
				control.value,
				control.required ? Validators.required : null
			)
		});
		return new FormGroup(group)
	}

	sort(controls: BaseControl<string>[]) {
		return scheduled(controls.sort((a, b) => a.order - b.order), asyncScheduler)
	}
}
