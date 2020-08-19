import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import{FormsModule, ReactiveFormsModule} from '@angular/forms'
import { MasterComponent } from './VisitorApp.MasterComponent';
import { MainRouting } from '../Routing/VisitorApp.MainRouting';
import{RouterModule} from '@angular/router';
import { VisitorComponent } from '../Visitorlog/VisitorApp.VisitorlogComponent';
import { NewsComponent } from '../LatestNews/VisitorApp.NewsComponent';
import { HttpClientModule } from '@angular/common/http';
import { AgGridModule } from 'ag-grid-angular';
import { MatToolbarModule, MatIconModule, MatSidenavModule, MatListModule, MatButtonModule, MatTableModule } from  '@angular/material';



@NgModule({
  declarations: [
    MasterComponent,VisitorComponent,NewsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(MainRouting),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AgGridModule.withComponents([]),
    MatTableModule,
    MatIconModule,
    MatToolbarModule,MatSidenavModule,MatListModule,MatButtonModule
    
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA ],
    providers: [],
  bootstrap: [MasterComponent]
})
export class VisitorMainModule {

 }
