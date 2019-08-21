import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GoalComponent } from './goal/goal.component';
import { GoalFormComponent } from './goal-form/goal-form.component';
import { GoalDetailsComponent } from './goal-details/goal-details.component';

@NgModule({
  declarations: [
    AppComponent,
    GoalComponent,
    GoalFormComponent,
    GoalDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
