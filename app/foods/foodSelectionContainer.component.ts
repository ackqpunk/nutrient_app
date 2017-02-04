import { Component, OnInit, ViewChild, ElementRef, ContentChild, AfterViewInit, AfterContentInit } from '@angular/core';
import {Router, NavigationExtras} from "@angular/router";
import {SegmentedBar, SegmentedBarItem, SelectedIndexChangedEventData} from "ui/segmented-bar";
import { SelectFoodComponent } from "./selectFood.component";

@Component({
    templateUrl: './foods/foodSelectionContainer.component.html',
    styleUrls: ['./foods/foodSelectionContainer.component.css']
})
export class FoodSelectionContainerComponent implements OnInit, AfterViewInit {
    selectedIndex: number;
    items: Array<any>;
    @ViewChild("tabs") tabs: ElementRef;

    @ViewChild("firstTabContent") firstTabContent: ElementRef;
    @ViewChild("secondTabContent") secondTabContent: ElementRef;
    @ViewChild("thirdTabContent") thirdTabContent: ElementRef;
    constructor(private router: Router) { 
        this.selectedIndex = 0;
        this.items = [{ title: 'First' }, { title: 'Second'},  { title: 'Third'}];
    }

    ngOnInit() {
        this.firstTabContent.nativeElement.visibility = "visible";
        this.secondTabContent.nativeElement.visibility = "collapsed";
        this.thirdTabContent.nativeElement.visibility = "collapsed";
    }

    ngAfterViewInit() {
        this.tabs.nativeElement.on(SegmentedBar.selectedIndexChangedEvent, (args: SelectedIndexChangedEventData) => {
            switch (args.newIndex) {
                case 0:
                    console.log('first selected');

                    this.firstTabContent.nativeElement.visibility = "visible";
                    this.secondTabContent.nativeElement.visibility = "collapsed";
                    this.thirdTabContent.nativeElement.visibility = "collapsed";
                    break;
                case 1:
                    console.log('second selected')

                    this.firstTabContent.nativeElement.visibility = "collapsed";
                    this.secondTabContent.nativeElement.visibility = "visible";
                    this.thirdTabContent.nativeElement.visibility = "collapsed";
                    break;
                case 2:
                    console.log('third selected')

                    this.firstTabContent.nativeElement.visibility = "collapsed";
                    this.secondTabContent.nativeElement.visibility = "collapsed";
                    this.thirdTabContent.nativeElement.visibility = "visible";
                    break;
            }
        })

    }
}