import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { UserComponent } from './components/admin-view/user/user.component';
import { ModalComponent } from './components/modal/modal.component';

export const routes: Routes = [
	{
		path: '',
		pathMatch: 'full',
		redirectTo: 'home'
	},
	{
		path: 'home',
		title: 'Reservas',
		component: HomeComponent
	},
	{
		path: 'admin',
		title: 'Administrador',
		component: UserComponent
	},
	{
		path: 'test',
		title: 'Testing Component',
		component: ModalComponent
	}
];
