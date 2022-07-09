import {ModuleWithProviders}  from '@angular/core';
import {Routes,RouterModule}  from '@angular/router';
import {LoginComponent}  from './login/login.component';
import { ProductosComponent } from './productos/productos.component';
import {TiendasComponent}  from './tiendas/tiendas.component';


const appRoutes:Routes=[
{path:'',component:LoginComponent},

{path:'tiendas',component:TiendasComponent},
{path:'productos/:id',component:ProductosComponent},
]

export const appRoutingProviders:any[]=[];
export const routing:ModuleWithProviders=RouterModule.forRoot(appRoutes);