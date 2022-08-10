import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTooltipModule } from '@angular/material/tooltip';
import { AppRoutingModule } from '../app-routing.module';
import { SharedModule } from '../shared/shared.module';
import { CommentsComponent } from './comments/comments.component';
import { CreateCommentsComponent } from './comments/create-comments/create-comments.component';
import { UpdateCommentsComponent } from './comments/update-comments/update-comments.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CreatePostComponent } from './posts/create/create.component';
import { PostsComponent } from './posts/posts.component';
import { UpdatePostsComponent } from './posts/update-posts/update-posts.component';

@NgModule({
  declarations: [
    DashboardComponent,
    CommentsComponent,
    CreateCommentsComponent,
    UpdateCommentsComponent,
    PostsComponent,
    CreatePostComponent,
    UpdatePostsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    MatTooltipModule,
    SharedModule
  ],
  exports: [
    DashboardComponent,
    CommentsComponent,
    CreateCommentsComponent,
    UpdateCommentsComponent,
    PostsComponent,
    CreatePostComponent,
    UpdatePostsComponent
  ]
})
export class AdminModule { }
