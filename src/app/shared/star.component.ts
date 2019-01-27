import { Component, OnChanges, Input, Output, EventEmitter } from "@angular/core";
import { template } from '@angular/core/src/render3';

@Component({
    selector: 'pm-star',
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges{
    starWidth: number;
    @Input() rating: number;

    @Output() ratingClicked: EventEmitter<String> = new EventEmitter<String>();

    onClick(): void {
        this.ratingClicked.emit(`Rating is ${this.rating}`)
    }

    ngOnChanges(): void {
        this.starWidth = this.rating * 75 / 5;
    }
}