import { Component, OnInit } from '@angular/core'
import { ContactoService } from '../services/contacto.service'
import swal from 'sweetalert2'

@Component({
	selector: 'app-contacto',
	templateUrl: './contacto.component.html',
	styles: []
})
export class ContactoComponent implements OnInit {

	public name: String
	public email: String
	public subject: String
	public message: String
	public loading: Boolean = false

	constructor(
		public _contactoService: ContactoService
	) { }

	ngOnInit() {
	}

	sendEmail() {
		this.loading = true
		if(this.loading) {
			swal.fire({
				title: 'Enviando mensaje!',
				imageUrl: 'assets/images/load.gif',
				showConfirmButton: false
			  })
		}
		let data: Object = {
			name: this.name,
			email: this.email,
			subject: this.subject,
			message: this.message
		}
		this._contactoService._sendEmail(data)
		.subscribe((res: any) => {
			this.loading = false
			swal.fire('', res.response, 'success')
			this.clearFields()
		})
	}

	clearFields() {
		this.name = ''
		this.email = ''
		this.subject = ''
		this.message = ''
	}

}
