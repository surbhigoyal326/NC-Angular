import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BASE_URL} from '../shared/constants'

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private _http: HttpClient) { }

  login(body:any){
    return this._http.post(`${BASE_URL}/users/login`, body,{
      observe:'body'
    });
  }

  getUserName() {
    return this._http.get(`${BASE_URL}/users/username`, {
      observe: 'body',
    });
    
  }
}
