import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
public  useradmin:any;
 estado:string;
  constructor() {
    
let dataestado= sessionStorage.getItem('estado');

        if (dataestado=='1') {
          this.estado='1';
          //this.router.navigate(['/dashboard']);
        }else{
          this.estado='0';
          //this.router.navigate(['']);
        }


   }


      ngOnInit() {}


		
}
