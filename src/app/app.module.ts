import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { MyFilterPipe } from './functions/filter.pipe'
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AddWordComponent } from './pages/add-word/add-word.component';
import { AllWordComponent, } from './pages/all-word/all-word.component';
import { DetailWordComponent } from './pages/detail-word/detail-word.component';
import { QuizComponent } from './pages/quiz/quiz.component'
import { CommonModule } from '@angular/common'; 
import { HttpClientModule  } from '@angular/common/http'; 
import { SortByPipe } from './functions/sort-by.pipe';

@NgModule({
  declarations: [AppComponent,AllWordComponent,MyFilterPipe,AddWordComponent,DetailWordComponent,QuizComponent,SortByPipe,MyFilterPipe],
  entryComponents: [],
  imports: [
    BrowserModule,
    CommonModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
