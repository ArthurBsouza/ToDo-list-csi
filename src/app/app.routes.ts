import { Routes } from '@angular/router';
import { Home } from './screens/home/home';
import { Tarefas } from './screens/tarefas/tarefas';

export const routes: Routes = [{
    path: '',
    component: Home
},
{
    path:'tarefas',
    component: Tarefas
}
];
