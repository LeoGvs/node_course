import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { MyFilterPipe } from './shared/my-filter.pipe';
import { AddPostComponent } from './add-post/add-post.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { UserReviewsComponent } from './user-reviews/user-reviews.component';
import { ReviewComponent } from './review/review.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    AddPostComponent,
    UserReviewsComponent,
    MyFilterPipe,
    ReviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
