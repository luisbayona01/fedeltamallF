import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {ProductosService} from '../services/productos.service';
import {Productos} from '../interfaces/productos';
import {Categoriaproductos} from '../interfaces/categoriaproductos';
import {Ordencompra} from '../interfaces/Ordencompra';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  productos:Productos[];
  ordencompra:Ordencompra[];
  categoriaproductos:Categoriaproductos[];
  cantidadtotal:number;
  valortotal:number;
  public OC:any;
  iduser:number
  constructor(private route: ActivatedRoute,private httpClient:HttpClient,private ProductosService:ProductosService,private router:Router) { 
    this.OC={
      categoriaP:'',
      cantidades:'',
      }
  }
 
  ngOnInit(): void {
    this.getproductos();
    this.getcategoriasproductos();
    this.showcarrito();
  }

 getproductos(){
  let id = this.route.snapshot.paramMap.get("id");
  //console.log(id);
  let  formData:any = new FormData();
  //let distribuidor= sessionStorage.getItem('distribuidor');

  

formData.append("idtienda",id);
//console.log(formData);
let elem: any;
this.ProductosService.allproductos(formData).subscribe( (data:Productos[])=>{
  this.productos=data;



},(error)=>{
    console.log(error)
  });

 } 


 getcategoriasproductos(){
  let id = this.route.snapshot.paramMap.get("id");
  //console.log(id);
  let  formData:any = new FormData();
  //let distribuidor= sessionStorage.getItem('distribuidor');

  

formData.append("idtienda",id);
//console.log(formData);
let elem: any;
this.ProductosService.categoriasproductos(formData).subscribe( (data:Categoriaproductos[])=>{
  this.categoriaproductos=data;
  elem =   $("#categoriasP");
  $(document).ready(function(){
   
    elem.selectpicker();
  
 
   }) 


},(error)=>{
    console.log(error)
  });

 } 


 AddOrdenC(idproductos,precio){

  let datos= JSON.parse(localStorage.getItem('user'))
  //console.log(datos.email);
 this.iduser=datos.id;

  let  formData:any = new FormData();
  //let distribuidor= sessionStorage.getItem('distribuidor');

formData.append("idproductos",idproductos);
formData.append("precio",precio);
formData.append("idusuario",this.iduser);
formData.append("cantidad",1);
this.ProductosService.addcarrito(formData).subscribe( (data)=>{
  //console.log(data);
  this.showcarrito();

},(error)=>{
    console.log(error)
  }); 
}

showcarrito(){
  let datos= JSON.parse(localStorage.getItem('user'))
  //console.log(datos.email);
  let  formData:any = new FormData();
 this.iduser=datos.id;
  formData.append("id",this.iduser)
this.ProductosService.showcarrito(formData).subscribe( (data:Ordencompra[])=>{
  //console.log(data.length);
this.ordencompra=data;
let totalcantidad=0;
let totalvalor=0;
for (let index = 0; index < data.length; index++) {
     //console.log(data[index]['cantidad']);
     totalcantidad+=parseInt(data[index]['cantidad']) + 0;
     totalvalor+=parseInt(data[index]['valor']) + 0;
}
//console.log(totalcantidad);
this.cantidadtotal=totalcantidad;
this.valortotal=totalvalor;
},(error)=>{
    console.log(error)
  }); 

} 

editcantidadO(idordendecompra,precio){
  let cantidad=$("#cantidad"+idordendecompra).val(); 
  let  formData:any = new FormData();
  formData.append("idordendecompra",idordendecompra)
  formData.append("precioU",precio)
  formData.append("cantidad",cantidad)
  this.ProductosService.edidcantidad(formData).subscribe( (data)=>{
 console.log(data); 
this.showcarrito();
  
  },(error)=>{
      console.log(error)
    });
} 

deleteO(idordendecompra){
console.log(idordendecompra);

  let  formData:any = new FormData();
  formData.append("idordendecompra",idordendecompra)

  this.ProductosService.deleteproduct(formData).subscribe( (data)=>{
 console.log(data); 
this.showcarrito();
  
  },(error)=>{
      console.log(error)
    });
}

RegresarTiendas(){
  this.router.navigate(['tiendas']);

}

}
