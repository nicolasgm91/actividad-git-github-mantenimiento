import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../api.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  nombreUsuario: string = '';
  password: string = '';
  responseApi: string = '';

  constructor(private apiService: ApiService, public toast: ToastrService, private router: Router) { }

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
        if (response != "Autenticación Satisfactoria") {
          this.toast.warning('Respuesta API: ' + response, "¡Advertencia!", { timeOut: 1900 });
        } else {
          this.toast.success('Respuesta API: ' + response, "¡Exito!");
          //this.router.navigate(["G:\\Otros ordenadores\\Mi Ordenador\\Datos\\Varios\\Studio Code\\Siscon\\menu.html"])
        }
      },
        (error) => {
          console.error('Error en la llamada al servicio', error);
          this.toast.error('Hubo un error al procesar la solicitud.');
        });
  }
}
