import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import {Usuarios} from '../interfaces/usuarios';
import {UsuariosService} from '../services/usuarios.service';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import { Router } from '@angular/router';
//import swal from 'sweetalert';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 //public  user:any;
  constructor(private toastr: ToastrService,private UsuariosService:UsuariosService,private httpClient:HttpClient,private router: Router) {
 

    $("#loading").hide();
    this.router.navigate(['']);
   }

  ngOnInit() {
  }

formlogin(){
   $("#login-form").delay(100).fadeIn(100);
    $("#register-form").fadeOut(100);
    $('#register-form-link').removeClass('active');
    $("#login-form-link").addClass('active');
    //e.preventDefault();

}

formregister(){
$("#register-form").delay(100).fadeIn(100);
    $("#login-form").fadeOut(100);
    $('#login-form-link').removeClass('active');
    $("#register-form-link").addClass('active');
   // e.preventDefault();

}

logear(){
  let selector: any;
  //document.querySelector('#formupdateiax')
  selector =  document.querySelector('#login-form');
  let isValid = selector.reportValidity();

  
  if (isValid==false) {
   $('#login-form').addClass('was-validated')
  //return false;
  }else{
  
     $("#login-form").removeClass('was-validated')

     var params=$("#login-form").serialize();
     this.UsuariosService.loginusuarios(params).subscribe((data)=>{ 
     
      if(data['ok']==false){
         //console.log('entro en false')
         $("#loading2").hide();
        this.toastr.error(data['user'])

      }
      if(data['ok']==true){
        $("#loading2").hide();
        //this.toastr.success(data['user'])
        //console.log(data['user'].email);
        localStorage.setItem('token', data['token']);
        localStorage.setItem('user', JSON.stringify(data['user']));
       
        this.router.navigate(['tiendas']);
       
      }
      //this.toastr.success(data[0])
       
    /*var dirtyFormID = 'register-form';
    var resetForm = <HTMLFormElement>document.getElementById(dirtyFormID);
    resetForm.reset();*/

  }); 

  }

}
register(){
  $("#loading").show();
  let selector: any;
  //document.querySelector('#formupdateiax')
  selector =  document.querySelector('#register-form');
  let isValid = selector.reportValidity();

  
  if (isValid==false) {
   $('#register-form').addClass('was-validated')
  //return false;
  }else{
  
     $("#register-form").removeClass('was-validated')
     var params=$("#register-form").serialize();
     this.UsuariosService.registerusuarios(params).subscribe((data)=>{ 
     
      if(data['ok']==false){
         //console.log('entro en false')
         $("#loading").hide();
        this.toastr.error(data['menssage'])

      }
      if(data['ok']==true){
        $("#loading").hide();
        this.toastr.success(data['menssage'])

      }
      //this.toastr.success(data[0])
       
    var dirtyFormID = 'register-form';
    var resetForm = <HTMLFormElement>document.getElementById(dirtyFormID);
    resetForm.reset();

  }); 
  }
  }

  recorderpass(){

    $("#loadingr").show();
    let  formData:any = new FormData();
    formData.append("email",$("#emailrecovery").val())
    this.UsuariosService.recoverypass(formData).subscribe((data)=>{ 
     
    //console.log(data);
    this.enviomail(data);
      //this.toastr.success(data[0])
   

  }); 
  }

  enviomail(parametros){
  let url="https://campushumax.com/wp-admin/reporte2/correos.php"
  //console.log(parametros);
  $.post(url,parametros)
  .done(function( data ) {
    if(data==1){
    $("#loadingr").hide();  
    $("#msgrecovery").show();
    }
    $("#emailrecovery").val('');
    $("#emailrecovery").focus();
    $("#msgrecovery").fadeOut(10000);
    //alert( "Data Loaded: " + data );
  });

  }



}
