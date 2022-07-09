import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UsuariosService {




  Api='https://www.fedeltamall.digital/fedeltamall/public/index.php/api/';
  constructor(private htppClient:HttpClient) {}


  loginusuarios(param) {
    const headers=new HttpHeaders({'Content-Type':'application/x-www-form-urlencoded'});
    return this.htppClient.post(this.Api+'auth/login',param,{headers:headers});
  
  }

  registerusuarios(param) {
    const headers=new HttpHeaders(  {'Content-Type':'application/x-www-form-urlencoded'});
    return this.htppClient.post(this.Api+'auth/register',param,{headers:headers});
  }

  recoverypass(param) {
    //const headers=new HttpHeaders(  {'Content-Type':'application/x-www-form-urlencoded'});
    return this.htppClient.post(this.Api+'auth/recovery',param,
    //{headers:headers}
    );
  }

  resetypass(param) {
    //const headers=new HttpHeaders(  {'Content-Type':'application/x-www-form-urlencoded'});
    return this.htppClient.post(this.Api+'auth/resetpassword',param,
    //{headers:headers}
    );
  }
}
