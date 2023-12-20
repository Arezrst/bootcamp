import { Routes } from '@angular/router';
import { GameComponent } from './game/game.component';
import { EndComponent } from './end/end.component';

export const routes: Routes = [
    {
        path : "game",
        component: GameComponent,
    },
    {
        path : "",
        component: EndComponent
    },
];