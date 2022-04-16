import { Injectable } from '@angular/core'
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { tap, mergeMap, map, catchError } from 'rxjs/operators';
import * as usuariosActions from '../actions';
import { UsuarioService } from '../../services/usuario.service';
import { of } from 'rxjs';


@Injectable()

export class UsuarioEffects {

    constructor(
        private actions$: Actions,
        private usuarioServies: UsuarioService
        ){}

        cargarUsuario$ = createEffect(
            () => this.actions$.pipe(
                ofType( usuariosActions.cargarUsuario ),
                tap( data => console.log('effect tap', data)),
                mergeMap(
                    ( action )=> this.usuarioServies.getUserById( action.id )
                    .pipe(
                    tap(data => console.log('getUser Effects', data)),
                    map( user => 
                    usuariosActions.cargarUsuarioSuccess({ usuario: user })),
                    catchError( err => of
                    (usuariosActions.cargarUsuarioError({ payload: err })))
                    ),

                )
            )
        );
}