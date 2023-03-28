import { HistoryService } from 'src/app/services/userService/history.service';
import { MemberService } from 'src/app/services/member.service';
import { OrganizerService } from 'src/app/services/organizerService/organizer.service';
import { VenueUserService } from 'src/app/services/userService/venuesUser/venue-user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-org-home',
  templateUrl: './org-home.component.html',
  styleUrls: ['./org-home.component.css']
})
export class OrgHomeComponent implements OnInit {

  users:any;
  useNum:any;
  venues:any;
  numVenue:any;
  UpBookings:any;
  numUpBookings:any;
  notifications:any;
  numNoti:any;
  pastBookings:any;
  numPast:any;

  constructor(private memberService : MemberService,
    private orgService:OrganizerService,
              private historyService:HistoryService) { }

  ngOnInit(): void {

    this.memberService.getAllUsers().subscribe(
      (data)=>{ this.users = data; this.useNum=this.users.length;},
      (error)=>{ console.log(error);}
    );
          // Number of Upcoming Bookings
          this.orgService.getFutureBookingsByOrgId().subscribe(
            (data)=>{
              this.UpBookings = data;
              this.numUpBookings = this.UpBookings.length;


              // Number of Past Bookings
             this.orgService.getPastBookingsByOrgId().subscribe(
              (data)=>{
               this.pastBookings = data;
               this.numPast = this.pastBookings.length;
              },
             (error)=>{
               console.log(error);
               }
              );

              
            },
            (error)=>{
              console.log(error);
            }
          );

    // Number of Venues 
    this.orgService.getVenueByOrganizerId().subscribe(
      (venues)=>{
        this.venues = venues;
        this.numVenue = this.venues.length;
      },
      (error)=>{
        console.log(error);
      }
      );


    // Number of Notifications
    this.historyService.getNotifications().subscribe(
      (notifications:any)=>{
        this.notifications = notifications;
        this.numNoti = this.notifications.length;


            


      },
      (error)=>{
        console.log(error);
      }
      )

  }

}
