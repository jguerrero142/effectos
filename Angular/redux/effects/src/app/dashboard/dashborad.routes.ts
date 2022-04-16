import { Routes } from '@angular/router';
import { EstadisticaComponent } from '../ingre-egre/estadistica/estadistica.component';
import { IngreEgreComponent } from '../ingre-egre/ingre-egre.component';
import { DetalleComponent } from '../ingre-egre/detalle/detalle.component';


export const dashboardRoutes: Routes = [
    { path: '',  component: EstadisticaComponent },
    { path: 'inyeg',  component: IngreEgreComponent },
    { path: 'detalle',  component: DetalleComponent },
]