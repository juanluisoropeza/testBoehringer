import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { DetallePostComponent } from './components/detalle-post/detalle-post.component';
import { NewPostComponent } from './components/new-post/new-post.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'post/:id',
    component: DetallePostComponent
  },
  {
    path: 'new-post',
    component: NewPostComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload', useHash: true})],
  exports: [RouterModule]
})

export class AppRoutingModule { }