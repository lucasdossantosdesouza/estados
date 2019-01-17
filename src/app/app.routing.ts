
import {Routes, RouterModule} from '@angular/router';
import { ModuleWithProviders } from '@angular/compiler/src/core';
import { ManterEstadosComponent } from './manter-estados/manter-estados.component';
import { ManterCidadesComponent } from './manter-cidades/manter-cidades.component';

const APP_ROUTS: Routes = [
    {path: 'estados', component: ManterEstadosComponent},
    {path: 'cidades', component: ManterCidadesComponent}
];

// tslint:disable-next-line:eofline
export const _routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTS);