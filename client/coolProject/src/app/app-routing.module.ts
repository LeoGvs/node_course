import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AddPostComponent } from './add-post/add-post.component';
import { UserReviewsComponent } from './user-reviews/user-reviews.component';
import { ReviewComponent } from './review/review.component'

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'new/review', component: AddPostComponent },
  { path: 'user/reviews', component: UserReviewsComponent},
  { path: 'review/:id', component: ReviewComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
