import { Routes } from '@angular/router';
import { TodoappComponent } from './todoapp/todoapp.component';
import { FormComponent } from './form/form.component';
import { UserComponent } from './form/user/user.component';
import { UserDetailComponent } from './form/user-detail/user-detail.component';
import { MemoriesComponent } from './memories/memories.component';
import { PicturesComponent } from './pictures/pictures.component';

export const routes: Routes = [
        {
            path: "todoapp",
            component: TodoappComponent,
        },
        {
            path: "form",
            component: FormComponent,
            children: [
              {
                path: "user",
                component: UserComponent,
              }, 
              {
                path: "user-detail",
                component: UserDetailComponent,
              },]
        },
        {
          path:"memories",
          component: MemoriesComponent
        },
        { path: 'memories',
           component: MemoriesComponent,
            children: [
              {
                path: "username",
                component: MemoriesComponent,
              }, 
              {
                path: "password",
                component: MemoriesComponent,
              },
            ],
          },
          {
            path : "pictures",
            component : PicturesComponent,
          }

    ]
