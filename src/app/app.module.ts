import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './components/app/app.component';
import {FormsModule} from '@angular/forms';
import {AppRoutingModule} from './app-routing.module';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import {BsDropdownModule, CollapseModule} from 'ngx-bootstrap';
import { UsersComponent } from './components/users/users.component';
import { PostsComponent } from './components/posts/posts.component';
import { AlbumsComponent } from './components/albums/albums.component';
import { TodosComponent } from './components/todos/todos.component';
import { PhotosComponent } from './components/photos/photos.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import {AlbumService} from './services/album.service';
import {PostService} from './services/post.service';
import {UserService} from './services/user.service';
import {TodoService} from './services/todo.service';
import {HttpClientModule} from '@angular/common/http';
import { UserDetailComponent } from './components/user-detail/user-detail.component';
import { UserCreateModifyComponent } from './components/user-create-modify/user-create-modify.component';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    CollapseModule.forRoot(),
    BsDropdownModule.forRoot()
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    UsersComponent,
    PostsComponent,
    AlbumsComponent,
    TodosComponent,
    PhotosComponent,
    PageNotFoundComponent,
    UserDetailComponent,
    UserCreateModifyComponent
  ],
  providers: [PostService, AlbumService, UserService, TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
