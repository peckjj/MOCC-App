import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ArtistAccountComponent } from './artist-account/artist-account.component';
import { ArtistsComponent } from './artists/artists.component';
import { CardInfoComponent } from './card-info/card-info.component';
import { ContactComponent } from './contact/contact.component';
import { CreateProfileComponent } from './create-profile/create-profile.component';
import { GalleryComponent } from './gallery/gallery.component';
import { HomeComponent } from './home/home/home.component';
import { LoginComponent } from './login/login.component';
import { MediaComponent } from './media/media.component';
import { MusicMarketplaceComponent } from './music-marketplace/music-marketplace.component';
import { PaymentComponent } from './payment/payment.component';
import { PicturesComponent } from './pictures/pictures.component';
import { ProfileComponent } from './profile/profile.component';
import { ProspectComponent } from './prospect/prospect.component';
import { SearchComponent } from './search/search.component';
import { SpecalistsComponent } from './specalists/specalists.component';
import { SubmitArtComponent } from './submit-art/submit-art.component';
import { SubmitComponent } from './submit/submit.component';
import { TourBoardComponent } from './tour-board/tour-board.component';
import { ToursComponent } from './tours/tours.component';
import { TransactionComponent } from './transaction/transaction.component';
import { UserPageComponent } from './user-page/user-page.component';
import { UserPage1Component } from './user-page1/user-page1.component';
import { VideosComponent } from './videos/videos.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'submit', component: SubmitComponent},
  {path: 'search', component:  SearchComponent},
  {path: 'about', component: AboutComponent},
  {path: 'gallery', component: GalleryComponent},
  {path: 'submitart', component: SubmitArtComponent},
  {path: 'payment', component: PaymentComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'createprofile', component: CreateProfileComponent},
  {path: 'login', component: LoginComponent},
  {path: 'media', component: MediaComponent},
  {path: 'pictures', component: PicturesComponent},
  {path: 'videos', component: VideosComponent},
  {path: 'tourboard', component: TourBoardComponent},
  {path: 'userpage', component: UserPageComponent},
  {path: 'specalists', component: SpecalistsComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'userpage1', component: UserPage1Component},
  {path: 'prospect', component: ProspectComponent},
  {path: 'tours', component: ToursComponent},
  {path: 'cardinfo', component: CardInfoComponent},
  {path: 'artists', component: ArtistsComponent},
  {path: 'artistaccount', component: ArtistAccountComponent},
  {path: 'musicmarketplace', component: MusicMarketplaceComponent},
  {path: 'transaction', component: TransactionComponent},
  

  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
