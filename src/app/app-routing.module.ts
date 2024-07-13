import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './features/home/home/home.component';
import { PostComponent } from './features/post/post.component';
import { CategoriesComponent } from './features/categories/categories.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'post/:id', component: PostComponent },
  { path: 'categories', component: CategoriesComponent },
  { path: 'auth', loadChildren: () => import('./features/auth/auth.module').then(m => m.AuthModule) },
  { path: 'admin', loadChildren: () => import('./features/admin/admin.module').then(m => m.AdminModule) },
  { path: '**', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
