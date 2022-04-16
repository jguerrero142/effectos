import { Injectable } from '@angular/core'
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { tap, mergeMap, map, catchError } from 'rxjs/operators';
import * as usuariosActions from '../actions/usuarios.actions';
import { UsuarioService } from '../../services/usuario.service';
import { of } from 'rxjs';


@Injectable()

export class UsuariosEffects {

    constructor(
        private actions$: Actions,
        private usuarioServies: UsuarioService
        ){}

        cargarUsuarios$ = createEffect(
            () => this.actions$.pipe(
                ofType( usuariosActions.cargarUsuarios),
                tap( data => console.log('effect tap', data)),
                mergeMap(
                    ()=> this.usuarioServies.getUser()
                    .pipe(
                        tap(data => console.log('getUser Effects', data)),
                        map( users => 
                        usuariosActions.cargarUsuariosSuccess({usuarios: users})),
                        catchError( err => of
                        (usuariosActions.cargarUsuariosError({payload: err})))
                        ),

                )
            )
        );
}