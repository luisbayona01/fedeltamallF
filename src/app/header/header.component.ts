import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {UsuariosService} from '../services/usuarios.service';
@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  emailuser: string;
  constructor(private router: Router, private UsuariosService:UsuariosService ) { 
    let datos= JSON.parse(localStorage.getItem('user'))
     //console.log(datos.email);
    this.emailuser=datos.email;

  }

  ngOnInit(): void {
  }

  logaout(){
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    this.router.navigate(['/']);
  }

 
  resetingpass(){
    let datos= JSON.parse(localStorage.getItem('user'))
    let  formData:any = new FormData();
    formData.append("iduser",datos.id);
    formData.append("Password",$("#passwordReset").val());
    
    this.UsuariosService.resetypass(formData).subscribe((data)=>{ 
     //console.log(data);
     $("#loadingresetpass").show();
     if (data['ok']==true){

      //
      $("#msgresetingpass").show();
      $("#loadingresetpass").hide();
     }
     
     $("#msgresetingpass").fadeOut(1000)
     $("#passwordReset").val('');
     $("#passwordReset").focus();

      //this.toastr.success(data[0])
       
    /*var dirtyFormID = 'register-form';
    var resetForm = <HTMLFormElement>document.getElementById(dirtyFormID);
    resetForm.reset();*/

  }); 

  }
  
}
