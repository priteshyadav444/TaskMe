import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PrimeNGConfig } from 'primeng/api';
import { DeclareComp, PrimeComp, OtherModules } from './prime/primecomp.module';
import { Router, RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './comp/about/about.component';
import { FooterComponent } from './comp/footer/footer.component';
import { HomeComponent } from './comp/view/home/home.component';
import { TasksComponent } from './comp/tasks/tasks.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent }
];
@NgModule({
  declarations: [AppComponent, DeclareComp, FooterComponent, TasksComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    PrimeComp,
    OtherModules,
    RouterModule.forRoot(appRoutes, { enableTracing: true }),
  ],
  providers: [],
  bootstrap: [AppComponent, PrimeNGConfig],
 
})

export class AppModule {}
