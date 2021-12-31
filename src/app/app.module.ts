import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home/home.component';
import { SubmitComponent } from './submit/submit.component';
import { HttpClientModule } from '@angular/common/http';
import { SearchComponent } from './search/search.component';
import { AboutComponent } from './about/about.component';
import { GalleryComponent } from './gallery/gallery.component';
import { SubmitArtComponent } from './submit-art/submit-art.component';
import { PaymentComponent } from './payment/payment.component';
import { ContactComponent } from './contact/contact.component';
import { CreateProfileComponent } from './create-profile/create-profile.component';
import { LoginComponent } from './login/login.component';
import { MediaComponent } from './media/media.component';
import { PicturesComponent } from './pictures/pictures.component';
import { VideosComponent } from './videos/videos.component';
import { TourBoardComponent } from './tour-board/tour-board.component';
import { UserPageComponent } from './user-page/user-page.component';
import { SpecalistsComponent } from './specalists/specalists.component';
import { ProfileComponent } from './profile/profile.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SubmitComponent,
    SearchComponent,
    AboutComponent,
    GalleryComponent,
    SubmitArtComponent,
    PaymentComponent,
    ContactComponent,
    CreateProfileComponent,
    LoginComponent,
    MediaComponent,
    PicturesComponent,
    VideosComponent,
    TourBoardComponent,
    UserPageComponent,
    SpecalistsComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
