import { BookDetailPastComponent } from './pages/organizer/book-detail-past/book-detail-past.component';
import { UserHomeComponent } from './pages/user/user-home/user-home.component';
import { OrgHomeComponent } from './pages/organizer/org-home/org-home.component';
import { OrgProfileComponent } from './pages/organizer/org-profile/org-profile.component';
import { ViewUserComponent } from './pages/organizer/view-user/view-user.component';
import { UserNotificationComponent } from './pages/user/user-notification/user-notification.component';
import { AvailabilityComponent } from './pages/user/availability/availability.component';
import { BookDetailComponent } from './pages/organizer/book-detail/book-detail.component';
import { FutureBookingComponent } from './pages/organizer/future-booking/future-booking.component';
import { PaymentComponent } from './pages/user/payment/payment.component';
import { BookingDetailUserComponent } from './pages/user/booking-detail-user/booking-detail-user.component';
import { BookingHistoryUserComponent } from './pages/user/booking-history-user/booking-history-user.component';
import { PayMessageComponent } from './pages/user/pay-message/pay-message.component';
import { BookEventComponent } from './pages/user/book-event/book-event.component';
import { VenueDetailUserComponent } from './pages/user/venue-detail-user/venue-detail-user.component';
import { ViewVenuesComponent } from './pages/user/view-venues/view-venues.component';
import { ShowEventsComponent } from './pages/organizer/add-venue/venue-details/show-events/show-events.component';
import { VenueDetailsComponent } from './pages/organizer/add-venue/venue-details/venue-details.component';
import { AddEventComponent } from './pages/organizer/add-venue/add-event/add-event.component';
import { AddVenueComponent } from './pages/organizer/add-venue/add-venue.component';
import { ManageVenueComponent } from './pages/organizer/manage-venue/manage-venue.component';
import { OrganizerGuard } from './services/organizerService/organizer.guard';
import { OrganizerDashboardComponent } from './pages/organizer/organizer-dashboard/organizer-dashboard.component';
import { UserDashboardComponent } from './pages/user/user-dashboard/user-dashboard.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from './pages/registration/registration.component';
import { UserGuard } from './services/userService/user.guard';
import { UpdateEventComponent } from './pages/organizer/add-venue/update-event/update-event.component';
import { EventsUserComponent } from './pages/user/venue-detail-user/events-user/events-user.component';
import { PastBookingComponent } from './pages/organizer/past-booking/past-booking.component';
import { OrgNotificationsComponent } from './pages/organizer/org-notifications/org-notifications.component';
import { UserProfileComponent } from './pages/user/user-profile/user-profile.component';

const routes: Routes = [
  
  {
    path:"registration",
    component:RegistrationComponent
  },
 

  {
    path:"",
    component:HomeComponent
  },
  

  {
    path:"login",
    component:LoginComponent,  
  },

  {
    path:"user",
    component:UserDashboardComponent,
    canActivate:[UserGuard],
    children:[
      {
        path:"",
        component:UserHomeComponent,
      },

      {
        path:"viewVenues",
        component:ViewVenuesComponent,
      },
      {
        path:"venueDetails/:venueId",
        component:VenueDetailUserComponent,
        children:[
          {
            path:"events/:venueId",
            component:EventsUserComponent,
          },
        ]        
      },
      {
        path:"availability/:venueId",
        component:AvailabilityComponent,
      },
      {
        path:"bookEvent",
        component:BookEventComponent,
      },
      {
        path:"payMessage",
        component:PayMessageComponent,

      },
      {
        path:"bookingHistory",
        component:BookingHistoryUserComponent,
      },
      {
        path:"bookingDetail/:bookingId",
        component:BookingDetailUserComponent,
      },
      {
        path:"payment/:bookingId",
        component:PaymentComponent,
      },
      {
        path:"notifications",
        component:UserNotificationComponent,
      },
      {
        path:"userProfile",
        component:UserProfileComponent,
      },
  ]
  },

  {
    path:"organizer",
    component:OrganizerDashboardComponent,
    canActivate:[OrganizerGuard],
    children:[
      {
        path:"",
        component:OrgHomeComponent,
      },

    {
      path:"manageVenue",
      component:ManageVenueComponent,
    },
    {
      path:"addVenue",
      component:AddVenueComponent,
    },


    { path:"venueDetails/:venueId",
      component:VenueDetailsComponent,
      children:[
        {
          path:"showEvents/:venueId",
          component:ShowEventsComponent,
        },

        {
          path:"addEvent/:venueId",
          component:AddEventComponent,
        },


        {
          path:"updateEvent/:eventId",
          component:UpdateEventComponent,
        },

      ]
    },
    {
      path:"viewBookings",
      component:FutureBookingComponent,
    },
    {
      path:"pastBookings",
      component:PastBookingComponent,
    },
    {
      path:"bookDetailsF/:bookingId",
      component:BookDetailComponent,
    },
    {
      path:"bookDetailsP/:bookingId",
      component:BookDetailPastComponent,
    },
    {
      path:"allUsers",
      component:ViewUserComponent,
    },
    {
      path:"notifications",
      component:OrgNotificationsComponent,
    },
    {
      path:"orgProfile",
      component:OrgProfileComponent,
    },
    
  ],
  },
  {
    path:"home",
    component:HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
