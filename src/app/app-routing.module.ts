import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {PhotosComponent} from './components/photos/photos.component';
import {TodosComponent} from './components/todos/todos.component';
import {AlbumsComponent} from './components/albums/albums.component';
import {PostsComponent} from './components/posts/posts.component';
import {UsersComponent} from './components/users/users.component';
import {PageNotFoundComponent} from './components/page-not-found/page-not-found.component';
import {UserDetailComponent} from './components/user-detail/user-detail.component';
import {UserCreateModifyComponent} from './components/user-create-modify/user-create-modify.component';
import {CalendarComponent} from './components/calendar/calendar.component';

const appRoutes: Routes = [
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'users', component: UsersComponent },
  { path: 'users/:idUser', component: UsersComponent },
  { path: 'update-user/:idUser', component: UserCreateModifyComponent },
  { path: 'create-user', component: UserCreateModifyComponent },
  { path: 'posts', component: PostsComponent },
  { path: 'albums', component: AlbumsComponent },
  { path: 'albums/:idAlbum', component: PhotosComponent },
  { path: 'todos', component: TodosComponent },
  { path: 'calendar', component: CalendarComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      // { enableTracing: true } // <-- debugging purposes only
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
