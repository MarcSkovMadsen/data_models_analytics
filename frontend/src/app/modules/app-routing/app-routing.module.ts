import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../../base/home/home.component';
import { PageNotFoundComponent } from '../../base/page-not-found/page-not-found.component';
import { PostListComponent } from '../../components/blog/post-list/post-list.component'
import { AddPostComponent } from '../../components/blog/post-detail/add-post/add-post.component'
import { ReadPostComponent } from '../../components/blog/post-detail/read-post/read-post.component'
import { EditPostComponent } from '../../components/blog/post-detail/edit-post/edit-post.component'
import { LoginComponent } from '../../components/general/auth/login/login.component'

const appRoutes: Routes = [
  { path: 'posts', component: PostListComponent },
  { path: 'posts/add', component: AddPostComponent },
  { path: 'posts/edit/:id', component: EditPostComponent },
  { path: 'posts/:id', component: ReadPostComponent },
  { path: 'login', component: LoginComponent },
  { path: '', component: HomeComponent },
  { path: '**', component: PageNotFoundComponent },
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
export class AppRoutingModule { }

