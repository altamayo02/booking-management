import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, asyncScheduler } from 'rxjs';
import { map, catchError, retry, of } from 'rxjs';
import { scheduled } from 'rxjs/internal/scheduled/scheduled';

interface Param {
	[key: string]: string
}

@Injectable({
  providedIn: 'root'
})
export class HttpService {
	gotData: Observable<any> = new Observable;
	postedData: Observable<any> = new Observable;
	
	constructor(private http: HttpClient) {}

	getData(url: string, _params?: object) {
		let params = new HttpParams()
		for (const param in _params) {
			if (Object.prototype.hasOwnProperty.call(_params, param)) {
				params.set(param, (_params as Param)[param])
			}
		}

		this.gotData = this.http.get<any>(url, { params })
		return scheduled(this.http.get<any>(url, { params }), asyncScheduler)
	}

	postData(url: string, payload: JSON) {
		this.postedData = this.http.post(url, payload)
			.pipe(retry(3), catchError((err: any) => {
				return scheduled(err, asyncScheduler)
			}))
	}

	putData(url: string, payload: JSON) {
		this.postedData = this.http.put(url, payload)
			.pipe(retry(3), catchError((err: any) => {
				return scheduled(err, asyncScheduler)
			}))
	}

	delData(url: string) {
		this.postedData = this.http.delete(url)
			.pipe(retry(3), catchError((err: any) => {
				return scheduled(err, asyncScheduler)
			}))
	}
}
