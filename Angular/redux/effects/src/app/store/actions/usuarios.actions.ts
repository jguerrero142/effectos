import { createAction, props } from "@ngrx/store";
import { Usuario } from '../../models/usuario.model';

export const cargarUsuarios = createAction('[]Counter Component CargarUsuarios');

export const cargarUsuariosSuccess = createAction('[]Counter Component CargarUsuarios Success',
props<{ usuarios: Usuario[] }>()
);

export const cargarUsuariosError = createAction('[]Counter Component ErrorUsuarios Success',
props<{ payload: any }>()
);