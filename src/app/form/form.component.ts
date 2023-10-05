import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../api.service';
import { HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
 
  nombreUsuario: string = '';
  password: string = '';
  responseApi: string = '';

  constructor(private apiService: ApiService) {}

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
    .subscribe((response: HttpResponse<any>) => {
      if (response.status === 200) {
        this.responseApi = response.body || 'Respuesta vacía';
      } else {
      console.log('Codigo de estad no valido: ', response.status);
      this.responseApi = 'Error en la solicitud';
      }
    });
  }
}
