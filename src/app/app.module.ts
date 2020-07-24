import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './modules/auth/auth.module';
import { AssetsModule } from './modules/assets/assets.module';
import { CategoriesModule } from './modules/categories/categories.module';
import { MainModule } from './modules/main/main.module';
import { EntriesModule } from './modules/entries/entries.module';
import { CreateEntryModule } from './modules/create-entry/create-entry.module';
import { AssetsService } from './services/assets.service';
import { CreateCategoryModule } from './modules/create-category/create-category.module';
import { CreateCategoryService } from './services/create-category.service';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    AssetsModule,
    CategoriesModule,
    MainModule,
    EntriesModule,
    CreateEntryModule,
    CreateCategoryModule
  ],
  providers: [AssetsService,CreateCategoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
