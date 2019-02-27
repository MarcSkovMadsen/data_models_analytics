import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppMaterialModule } from './modules/app-material/app-material.module';
import { AppRoutingModule } from './modules/app-routing/app-routing.module';

import { NavigationComponent } from './base/navigation/navigation.component';

import { HomeComponent } from './base/home/home.component';
import { PageNotFoundComponent } from './base/page-not-found/page-not-found.component';

import { BlogService } from './services/blog.service';
import { UserService } from './services/users/user.service';
import { PostListComponent } from './components/blog/post-list/post-list.component';
import { PostDetailComponent } from './components/blog/post-detail/post-detail.component';
import { ReadFileComponent } from './components/general/read-file/read-file.component';
import { PostUploadMarkdownComponent } from './components/blog/post-upload-markdown/post-upload-markdown.component';
import { AddPostComponent } from './components/blog/post-detail/add-post/add-post.component';
import { EditPostComponent } from './components/blog/post-detail/edit-post/edit-post.component';
import { ReadPostComponent } from './components/blog/post-detail/read-post/read-post.component';
import { LoginComponent } from './components/general/auth/login/login.component';
import { AboutComponent } from './base/about/about.component';
import { CreditsComponent } from './base/credits/credits.component';
import { FollowMeComponent } from './base/follow-me/follow-me.component';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    AppMaterialModule,
    AppRoutingModule,
  ],
  declarations: [
    AppComponent,
    NavigationComponent,
    HomeComponent,
    PageNotFoundComponent,
    PostListComponent,
    PostDetailComponent,
    ReadFileComponent,
    PostUploadMarkdownComponent,
    AddPostComponent,
    EditPostComponent,
    ReadPostComponent,
    LoginComponent,
    AboutComponent,
    CreditsComponent,
    FollowMeComponent,
  ],
  providers: [BlogService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
