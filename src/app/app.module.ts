import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouteReuseStrategy} from '@angular/router';

import {IonicModule, IonicRouteStrategy} from '@ionic/angular';
import {SplashScreen} from '@ionic-native/splash-screen/ngx';
import {StatusBar} from '@ionic-native/status-bar/ngx';
import {FilePath} from '@ionic-native/file-path/ngx';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {HomePageModule} from "./home/home.module";
import {TodoDonePageModule} from "./todo-done/todo-done.module";

@NgModule({
    declarations: [AppComponent],
    entryComponents: [],
    imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
    providers: [
        StatusBar,
        SplashScreen,
        FilePath,
        {provide: RouteReuseStrategy, useClass: IonicRouteStrategy}
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
