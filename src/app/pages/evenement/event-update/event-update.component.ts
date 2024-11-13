import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EventService } from 'src/app/core/services/event.service';

import { Event } from '../event-list/event-list.component';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-event-update',
  templateUrl: './event-update.component.html',
  styleUrls: ['./event-update.component.scss']
})
export class EventUpdateComponent {
  id!: number;
  event: any = {};
  amPmOptions: number[] = [
    0, 1, 2, 3, 4, 5, 
    6, 7, 8, 9, 10, 11, 
    12, 13, 14, 15, 16, 17, 
    18, 19, 20, 21, 22, 23
];

  constructor(private _router: Router,
    public eventservice: EventService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.event = new Event(this.id,'','',new Date,'',0,'',0,'',0 );
    if (this.id != -1) {
      this.eventservice.retrieveEvent(this.id)
        .subscribe(
          data => this.event = data
        )
    }
   
  }


  ventUpdate() {
    this.eventservice.updateEvent(this.id, this.event).subscribe(
      (response) => {
        console.log('event mis à jour avec succès :', response);
        this._router.navigate(['evenement/event-list']);
      },
      (error) => {
        console.error('Erreur lors de la mise à jour  :', error);
      }
    );
  }
  updateEvent(){}
}

