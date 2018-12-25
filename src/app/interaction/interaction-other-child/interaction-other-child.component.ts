import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { InteractionService } from './../../core/service/interaction.service';

@Component({
  selector: 'app-interaction-other-child',
  templateUrl: './interaction-other-child.component.html',
  styles: ['h1 { font-weight: normal; }']
})
export class InteractionOtherChildComponent implements OnInit, AfterViewInit, OnDestroy {

  open: boolean;
  subscription: Subscription;

  constructor(
    private interaction: InteractionService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.subscription = this.interaction.getSource$.subscribe((data: any) => {
      this.open = data;
      console.log(data);
    });

    this.subscription.add(this.route.paramMap.subscribe(data => console.log(data)));
  }

  ngAfterViewInit() {
    // this.subscription.add(this.interaction.getSource$.subscribe((data: any) => {
    //   this.open = data;
    //   console.log(data);
    // }));
  }

  ngOnDestroy() {
    console.log(this.subscription);
    // this.subscription.unsubscribe();
    // console.log(this.subscription);
  }
}
