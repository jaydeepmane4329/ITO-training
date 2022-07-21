import { Component, OnDestroy, OnInit } from '@angular/core';
import { count, interval, observable, Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  private ObservableSubscription: Subscription = new Subscription;

  constructor() { }

  ngOnInit() {
    // this.ObservableSubscription = interval(1000).subscribe(count => {
    //   console.log(count);
    // })

    //custom observable..
    const customObservable = Observable.create((observer: {

      // argument for complete
      complete: any;

      // argument for handling error
      error: any;

      // argument for handling data
      next: (arg0: number) => void;
    }) => {
      let count = 0;
      setInterval(() => {
        // Observable handle data
        observer.next(count)

        //observable handling error
        if (count == 4) {
          observer.error(new Error('count is equal to 4'));
        }

        //  observable handling completion
        if (count == 1) {
          observer.complete();
        }
        count++;
      }, 1000)
    })

    // 
    this.ObservableSubscription = customObservable.subscribe((data: any) => {
      console.log(data);
    }, (error: any) => {
      console.log(error)
    }, () => {
      console.log("Observable completed")
    });
  }

  ngOnDestroy(): void {
    this.ObservableSubscription.unsubscribe();
  }



}
