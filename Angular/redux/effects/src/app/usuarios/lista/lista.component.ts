import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import { Usuario } from '../../models/usuario.model';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/app.reducers';
import { cargarUsuarios } from '../../store/actions/usuarios.actions';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {
  usuarios: Usuario[] = []
  loading: boolean = false
  error: any;

  constructor( private store: Store<AppState> ) { }

  ngOnInit(): void {
    this.store.select('usuarios').subscribe(({ users, loading, error }) =>{
      this.usuarios = users;
      this.loading = loading,
      this.error = error;

    });
    this.store.dispatch( cargarUsuarios())
    // this.usuarioService.getUser()
    // .subscribe( users =>{
    //   console.log(users);
    //   this.usuarios = users;
    // })
  }

}
