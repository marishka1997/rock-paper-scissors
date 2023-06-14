import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { GameComponent } from './game/game.component';
import { RulesComponent } from './rules/rules.component';
import { FooterComponent } from './footer/footer.component';
import { PlaygroundComponent } from './playground/playground.component';
import { ScoreComponent } from './score/score.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    GameComponent,
    RulesComponent,
    FooterComponent,
    PlaygroundComponent,
    ScoreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
