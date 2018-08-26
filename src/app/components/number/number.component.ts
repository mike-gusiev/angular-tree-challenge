import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
    selector: 'app-number',
    templateUrl: './number.component.html',
    styleUrls: ['./number.component.css']
})
export class NumberComponent {
    @Input() numberUnit: {};
    @Input() index: number;
    @Output() deleteIndexFromNumber: EventEmitter<any> = new EventEmitter();

    remove(): void {
        this.deleteIndexFromNumber.emit(this.index);
    }

}
