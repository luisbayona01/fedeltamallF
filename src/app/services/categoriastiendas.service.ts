import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CategoriastiendasService {

  Api='https://www.fedeltamall.digital/fedeltamall/public/index.php/api/';
  //Api="http://localhost/fedeltamall/public/index.php/api/";
  constructor(private htppClient:HttpClient) {}


  GetCategoriastienda() {
    return this.htppClient.get(this.Api+'tiendascategoria');
  }

  
  GetCodigosprocionales() {
    return this.htppClient.get(this.Api+'promociones');
  }
}
