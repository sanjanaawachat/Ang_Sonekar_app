import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { CourseComponent } from './course/course.component';
import { EventComponent } from './event/event.component';
import { GallaryComponent } from './gallary/gallary.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { FacultyComponent } from './faculty/faculty.component';
import { CommiteeComponent } from './commitee/commitee.component';
import { AdmissionComponent } from './admission/admission.component';
import { AcademicComponent } from './academic/academic.component';
import { AluminiComponent } from './alumini/alumini.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutUsComponent,
    CourseComponent,
    EventComponent,
    GallaryComponent,
    ContactUsComponent,
    FacultyComponent,
    CommiteeComponent,
    AdmissionComponent,
    AcademicComponent,
    AluminiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
