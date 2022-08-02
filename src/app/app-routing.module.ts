import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommentsComponent } from './admin/comments/comments.component';
import { CreateCommentsComponent } from './admin/comments/create-comments/create-comments.component';
import { UpdateCommentsComponent } from './admin/comments/update-comments/update-comments.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { CreatePostComponent } from './admin/posts/create/create.component';
import { PostsComponent } from './admin/posts/posts.component';
import { UpdatePostsComponent } from './admin/posts/update-posts/update-posts.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { AboutComponent } from './public/about/about.component';
import { ContactComponent } from './public/contact/contact.component';
import { PageNotFoundComponent } from './public/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: '',
		component: LoginComponent
  },
  {
    path: 'login',
		component: LoginComponent
  },
  {
    path:'dashboard',
    component: DashboardComponent
  },
   {
    path:'about',
    component: AboutComponent
  },
   {
    path:'contact-us',
    component: ContactComponent
  },
  {
    path:'signup',
    component: SignupComponent
  },
  {
    path:'posts/update/:id',
    component: UpdatePostsComponent
  },
  {
    path:'posts/create',
    component: CreatePostComponent
  },
  {
    path:'posts',
    component: PostsComponent
  },
  {
    path:'comments/:postId',
    component: CommentsComponent
  },
  {
    path:'comments/:postId/create',
    component: CreateCommentsComponent
  },
  {
    path:'comments/update/:postId/:commentId',
    component: UpdateCommentsComponent
  },
  {
    path:'**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
