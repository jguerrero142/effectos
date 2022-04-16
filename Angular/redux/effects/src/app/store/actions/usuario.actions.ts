import { createAction, props } from "@ngrx/store";
import { Usuario } from '../../models/usuario.model';

export const cargarUsuario = createAction(
    '[]Counter Component CargarUsuario',
    props<{ id: string }>()
    );

export const cargarUsuarioSuccess = createAction(
'[]Counter Component CargarUsuario Success',
props<{ usuario: Usuario }>()
);

export const cargarUsuarioError = createAction(
'[]Counter Component ErrorUsuario Success',
props<{ payload: any }>()
);