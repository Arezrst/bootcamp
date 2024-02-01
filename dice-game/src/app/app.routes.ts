import { Routes } from '@angular/router';
import { FormComponent } from './form/form.component';
import { GameComponent } from './game/game.component';

export const routes: Routes = [
    {
        path: 'playersForm',
        component: FormComponent
    },
    {
        path: 'game',
        component: GameComponent
    },
];