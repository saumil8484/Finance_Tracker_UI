import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TransactionListComponent } from './components/transaction-list/transaction-list.component';
import { HomeComponent } from './components/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { AddTransactionComponent } from './components/add-transaction/add-transaction.component';
import { FormsModule } from '@angular/forms';
import { EditTransactionComponent } from './edit-transaction/edit-transaction.component';

@NgModule({
  declarations: [
    AppComponent,
    TransactionListComponent,
    HomeComponent,
    AddTransactionComponent,
    EditTransactionComponent
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
