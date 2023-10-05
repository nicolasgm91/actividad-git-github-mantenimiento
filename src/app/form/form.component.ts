import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
 
  loginForm: FormGroup = new FormGroup({
    nombreUsuario: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });

  loginSuccess = false;
  loginError = false;
  
  onSubmit() {
    if (this.loginForm && this.loginForm.valid) {
      const formData = this.loginForm.value;  
    }
  }
}
