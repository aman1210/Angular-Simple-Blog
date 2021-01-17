import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoute } from './app-route.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MainFormComponent } from './main-form/main-form.component';
import { StorageService } from './shared/storage.service';
import { HomePageComponent } from './home-page/home-page.component';
import { FamousGridComponent } from './home-page/famous-grid/famous-grid.component';
import { RecentComponent } from './home-page/recent/recent.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MainFormComponent,
    HomePageComponent,
    FamousGridComponent,
    RecentComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    AppRoute,
  ],
  providers: [StorageService],
  bootstrap: [AppComponent],
})
export class AppModule {}
