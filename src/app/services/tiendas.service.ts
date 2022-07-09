import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class TiendasService {
  Api='https://www.fedeltamall.digital/fedeltamall/public/index.php/api/';
  constructor(private htppClient:HttpClient) { }
  
  Getiendas() {
    return this.htppClient.get(this.Api+'tiendas');
  }

}
