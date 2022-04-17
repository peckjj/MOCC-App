import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { UserPage1Component } from './user-page1/user-page1.component';
import { ProspectComponent } from './prospect/prospect.component';
import { ToursComponent } from './tours/tours.component';
import { CardInfoComponent } from './card-info/card-info.component';
import { ArtistsComponent } from './artists/artists.component';
import { MusicMarketplaceComponent } from './music-marketplace/music-marketplace.component';
import { ArtistAccountComponent } from './artist-account/artist-account.component';
import { TransactionComponent } from './transaction/transaction.component';
import { BookClubComponent } from './book-club/book-club.component';
import { PostComponent } from './post/post.component';
import { EditArtistComponent } from './edit-artist/edit-artist.component';
import { EditBusinessComponent } from './edit-business/edit-business.component';
import { EditProspectComponent } from './edit-prospect/edit-prospect.component';


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
    ProfileComponent,
    UserPage1Component,
    ProspectComponent,
    ToursComponent,
    CardInfoComponent,
    ArtistsComponent,
    MusicMarketplaceComponent,
    ArtistAccountComponent,
    TransactionComponent,
    BookClubComponent,
    PostComponent,
    EditArtistComponent,
    EditBusinessComponent,
    EditProspectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
