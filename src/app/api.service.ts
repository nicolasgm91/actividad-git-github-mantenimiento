import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormComponent } from './form/form.component';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'http://localhost:8080/SisconAPI/Api/usuario/login'
  
  constructor(private http: HttpClient) { }

  loginUser(nombreUsuario: string, password: string){
    const body = {
      nombreUsuario: nombreUsuario,
      password: password
    };

    return this.http.post(this.apiUrl, body,{responseType:'text'});
  }
}
