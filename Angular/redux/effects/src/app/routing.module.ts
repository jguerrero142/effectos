import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { ListaComponent } from './usuarios/lista/lista.component';
import { UsuarioComponent } from './usuarios/usuario/usuario.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { dashboardRoutes } from './dashboard/dashborad.routes';


const routes: Routes =[
  { 
    path: '', 
    component: DashboardComponent,
    children: dashboardRoutes
  },
  { path: 'home', component: ListaComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },  
  { path: 'usuario/:id', component: UsuarioComponent },
  { path: '**', redirectTo: '' },
]


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot( routes )
  ],
  exports: [
    RouterModule
  ]
})
export class RoutingModule { }
