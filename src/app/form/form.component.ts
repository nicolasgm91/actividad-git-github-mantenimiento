import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../api.service';
//import { ToastService } from 'ngx-toastr';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  nombreUsuario: string = '';
  password: string = '';
  responseApi: string = '';

  constructor(private apiService: ApiService) { }

  loginForm: FormGroup = new FormGroup({
    nombreUsuario: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });

  loginSuccess = false;
  loginError = false;

  onSubmit() {
    if (this.loginForm && this.loginForm.valid) {
      const formData = this.loginForm.value;
    };
    this.apiService.loginUser(this.nombreUsuario, this.password)
      .subscribe((response: string) => {
        this.responseApi = response || 'Respuesta vacía';
        alert('Respuesta API: ' + response);
      });
  }
}
