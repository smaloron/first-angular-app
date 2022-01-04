import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HelloService } from './services/hello.service'
import { FormsModule } from '@angular/forms';
import { SecondPageComponent } from './pages/second-page/second-page.component';
import { RouterModule, Routes } from '@angular/router';
import { FirstPageComponent } from './pages/first-page/first-page.component';

const appRoutes: Routes = [
  { path: 'page1', component: FirstPageComponent },
  { path: 'page2', component: SecondPageComponent },
  { path: '', redirectTo: 'page1', pathMatch: 'full' },
];

@NgModule({
  declarations: [
    AppComponent,
    SecondPageComponent,
    FirstPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [HelloService],
  bootstrap: [AppComponent]
})
export class AppModule { }
