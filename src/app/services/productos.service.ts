import { Injectable } from '@angular/core';

import {HttpClient,HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
 //const api = "http://localhost/workspace/fedeltamall/public/api/productostienda"
 Api='https://www.fedeltamall.digital/fedeltamall/public/index.php/api/';
  constructor(private htppClient:HttpClient) { }

  allproductos(param) {
    //const headers=new HttpHeaders({'Content-Type':'application/x-www-form-urlencoded'});
    return this.htppClient.post(this.Api+'productostienda',param
    //{headers:headers}
    );
  
  }
  categoriasproductos(param){
    //const headers=new HttpHeaders({'Content-Type':'application/x-www-form-urlencoded'});
    return this.htppClient.post(this.Api+'categoriasproductosTienda',param
    //{headers:headers}
    );
  }

  addcarrito(param){
    //const headers=new HttpHeaders({'Content-Type':'application/x-www-form-urlencoded'});
    return this.htppClient.post(this.Api+'addordencompra',param
    //{headers:headers}
    );
  }

  showcarrito(param){
    //const headers=new HttpHeaders({'Content-Type':'application/x-www-form-urlencoded'});
    return this.htppClient.post(this.Api+'showcarrito',param
    //{headers:headers}
    );
  }
  
  edidcantidad(param){
    //const headers=new HttpHeaders({'Content-Type':'application/x-www-form-urlencoded'});
    return this.htppClient.post(this.Api+'edidcantidad',param
    //{headers:headers}
    );
  }
  deleteproduct(param){
    //const headers=new HttpHeaders({'Content-Type':'application/x-www-form-urlencoded'});
    return this.htppClient.post(this.Api+'deleteproducord',param
    //{headers:headers}
    );
  }

}
