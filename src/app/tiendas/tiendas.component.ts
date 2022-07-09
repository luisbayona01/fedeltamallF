import { Component, OnInit } from '@angular/core';
import {Categoriastiendas} from '../interfaces/Categoriastiendas';
import {Tiendas} from '../interfaces/tiendas';
import {CategoriastiendasService} from '../services/Categoriastiendas.Service';
import {TiendasService} from '../services/tiendas.Service';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {Codigosp} from '../interfaces/codigosp';                       
import { Router } from '@angular/router';
@Component({
  selector: 'tiendas',
  templateUrl: './tiendas.component.html',
  styleUrls: ['./tiendas.component.css']
})
export class TiendasComponent implements OnInit {
  tiendas:Tiendas[];
  codigosp:Codigosp[];
  categoriastiendas: Categoriastiendas[];  
  
  public OC:any;
  iamgen0 :string;
  constructor(private TiendasService:TiendasService,private CategoriastiendasService:CategoriastiendasService,private httpClient:HttpClient,private router: Router ) { 
    this.router.navigate(['tiendas']);
    this.OC={
      categoriaT:'',
      }
      

  }


  ngOnInit(): void {
    this. getdataTiendas();
    this.getcategoriasTienda();
    this.getdatasliderP();
  }

  getdataTiendas():void{

    let elem: any;
    this.TiendasService.Getiendas().subscribe( (data:Tiendas[])=>{
      this.tiendas=data;
    
    
   
    },(error)=>{
        console.log(error)
      });
     
    
    
    }

    getdatasliderP():void{

      let elem: any;
      this.CategoriastiendasService.GetCodigosprocionales().subscribe( (data:Codigosp[])=>{
        this.iamgen0=data[0]['imagenprocional'];
        this.codigosp=data;
      
      
     
      
     
      },(error)=>{
          console.log(error)
        });
       
      
      
      }
    
getcategoriasTienda():void{

  let elem: any;
  this.CategoriastiendasService.GetCategoriastienda().subscribe( (data:Categoriastiendas[])=>{
  this.categoriastiendas=data;
  elem =   $("#categoriasT");
  $(document).ready(function(){
   
    elem.selectpicker();
  
 
   }) 
  
 
  },(error)=>{
      console.log(error)
    });

}

    
  
        }


