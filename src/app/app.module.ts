import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './features/home/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidenavComponent } from './shared/components/sidenav/sidenav.component';
import { FormsModule } from '@angular/forms';
import { PostScrollComponent } from './features/home/post-scroll/post-scroll.component';
import { PostGridViewComponent } from './features/home/post-grid-view/post-grid-view.component';
import { PostCategoriesgridViewComponent } from './features/home/post-categoriesgrid-view/post-categoriesgrid-view.component';
import { PostModule } from './features/post/post.module';
import { SharedModule } from './shared/module/shared/shared.module';
import { MaterialModule } from './shared/module/material/material.module';
import { DataService } from './shared/services/data.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SidenavComponent,
    PostScrollComponent,
    PostGridViewComponent,
    PostCategoriesgridViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    BrowserAnimationsModule,
    PostModule,
    FormsModule,
    SharedModule,
    MaterialModule,
],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
