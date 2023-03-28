import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './pages/registration/registration.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import{ FormsModule} from '@angular/forms'
import { HttpClientModule} from '@angular/common/http';
import { UserDashboardComponent } from './pages/user/user-dashboard/user-dashboard.component';
import { OrganizerDashboardComponent } from './pages/organizer/organizer-dashboard/organizer-dashboard.component';
import { Navbar2Component } from './components/navbar2/navbar2.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { SidebarOrgComponent } from './components/sidebar-org/sidebar-org.component';
import { ManageVenueComponent } from './pages/organizer/manage-venue/manage-venue.component';
import { AddVenueComponent } from './pages/organizer/add-venue/add-venue.component';
import { AddEventComponent } from './pages/organizer/add-venue/add-event/add-event.component';
import { VenueDetailsComponent } from './pages/organizer/add-venue/venue-details/venue-details.component'
import Swal from 'sweetalert2';
import { ShowEventsComponent } from './pages/organizer/add-venue/venue-details/show-events/show-events.component';
import { UpdateEventComponent } from './pages/organizer/add-venue/update-event/update-event.component';
import { ViewVenuesComponent } from './pages/user/view-venues/view-venues.component';
import { VenueDetailUserComponent } from './pages/user/venue-detail-user/venue-detail-user.component';
import { EventsUserComponent } from './pages/user/venue-detail-user/events-user/events-user.component';
import { BookEventComponent } from './pages/user/book-event/book-event.component';
import { PayMessageComponent } from './pages/user/pay-message/pay-message.component';
import { BookingHistoryUserComponent } from './pages/user/booking-history-user/booking-history-user.component';
import { BookingDetailUserComponent } from './pages/user/booking-detail-user/booking-detail-user.component';
import { PaymentComponent } from './pages/user/payment/payment.component';
import { FutureBookingComponent } from './pages/organizer/future-booking/future-booking.component';
import { BookDetailComponent } from './pages/organizer/book-detail/book-detail.component';
import { PastBookingComponent } from './pages/organizer/past-booking/past-booking.component';
import { AvailabilityComponent } from './pages/user/availability/availability.component';
import { UserNotificationComponent } from './pages/user/user-notification/user-notification.component';
import { OrgNotificationsComponent } from './pages/organizer/org-notifications/org-notifications.component';
import { ViewUserComponent } from './pages/organizer/view-user/view-user.component';
import { OrgProfileComponent } from './pages/organizer/org-profile/org-profile.component';
import { UserProfileComponent } from './pages/user/user-profile/user-profile.component';
import { OrgHomeComponent } from './pages/organizer/org-home/org-home.component';
import { UserHomeComponent } from './pages/user/user-home/user-home.component';
import { BookDetailPastComponent } from './pages/organizer/book-detail-past/book-detail-past.component';


@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    NavbarComponent,
    LoginComponent,
    HomeComponent,
    UserDashboardComponent,
    OrganizerDashboardComponent,
    Navbar2Component,
    SidebarComponent,
    SidebarOrgComponent,
    ManageVenueComponent,
    AddVenueComponent,
    AddEventComponent,
    VenueDetailsComponent,
    ShowEventsComponent,
    UpdateEventComponent,
    ViewVenuesComponent,
    VenueDetailUserComponent,
    EventsUserComponent,
    BookEventComponent,
    PayMessageComponent,
    BookingHistoryUserComponent,
    BookingDetailUserComponent,
    PaymentComponent,
    FutureBookingComponent,
    BookDetailComponent,
    PastBookingComponent,
    AvailabilityComponent,
    UserNotificationComponent,
    OrgNotificationsComponent,
    ViewUserComponent,
    OrgProfileComponent,
    UserProfileComponent,
    OrgHomeComponent,
    UserHomeComponent,
    BookDetailPastComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
