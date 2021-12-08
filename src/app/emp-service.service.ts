import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmpServiceService {

  constructor(private _http: HttpClient) { }

  login(body:any){
    return this._http.post('http://localhost:3000/users/login', body,{
      observe:'body'
    });
  }

  getUserName() {
    return this._http.get('http://localhost:3000/users/username', {
      observe: 'body',
    });
    
  }
}
