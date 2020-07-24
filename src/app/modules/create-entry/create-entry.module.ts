import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateEntriesComponent } from 'src/app/entries/create-entries/create-entries.component';
import { MalihuScrollbarModule } from 'ngx-malihu-scrollbar';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CreateEntriesComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MalihuScrollbarModule.forRoot(),
  ]
})
export class CreateEntryModule { }
