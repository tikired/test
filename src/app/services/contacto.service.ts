import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { URL_SERVICIOS } from '../config/config'
import { map } from 'rxjs/operators'

@Injectable({
  	providedIn: 'root'
})
export class ContactoService {

  	constructor(
		public http: HttpClient
	) { }

	_sendEmail(data: Object) {
		let url = URL_SERVICIOS + 'sendemail';
		return this.http.post(url, data)
		.pipe(map((resp: any) => {
			return resp	
		}))
	}
}
