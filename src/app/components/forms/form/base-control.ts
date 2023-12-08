export class BaseControl<T> {
	value: T | undefined;
	name: string;
	label: string;
	required: boolean;
	order: number;
	type: string;
	options: {key: string, value: string}[];
	alias: string;

	constructor(control: {
		value?: T;
		key?: string;
		label?: string;
		required?: boolean;
		order?: number;
		type?: string;
		options?: {key: string, value: string}[];
		alias?: string;
	} = {}) {
		this.value = control.value;
		this.name = control.key as string;
		this.label = control.label as string;
		this.required = control.required as boolean;
		this.order = control.order === undefined ? 1 : control.order;
		this.type = control.type as string;
		this.options = control.options as { key: string; value: string; }[];
		this.alias = control.type as string;
	}
}