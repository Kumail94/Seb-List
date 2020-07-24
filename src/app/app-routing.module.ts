import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { MainComponent } from './main/main.component';
import { AssetsComponent } from './assets/assets.component';
import { CategoriesComponent } from './categories/categories.component';
import { EntriesComponent } from './entries/entries.component';
import { CreateEntriesComponent } from './entries/create-entries/create-entries.component';
import { CreateCategoryComponent } from './categories/create-category/create-category.component';

const routes: Routes = [
  { path: '', redirectTo: '/auth', pathMatch: 'full' },
  { path: 'auth', component: AuthComponent },
  { path: 'main', component: MainComponent },
  { path: 'entries', component: EntriesComponent },
  { path: 'new-entry', component: CreateEntriesComponent },
  { path: 'categories', component: CategoriesComponent },
  { path: 'new-category', component: CreateCategoryComponent },
  { path: 'assets', component: AssetsComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
