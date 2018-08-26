import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
    selector: 'app-factory',
    templateUrl: './factory.component.html',
    styleUrls: ['./factory.component.css']
})

export class FactoryComponent {
    @Input() factory: { name: string, min: number, max: number };
    @Input() index: number;
    @Output() deleteIndexFromFactory: EventEmitter<any> = new EventEmitter();
    StartTime = '12:00';
    FinishTime = '00:00';

    numbers = [];

    getRandomNumber(): number {
        return Math.floor(Math.random() * (this.factory.max - this.factory.min + 1)) + this.factory.min;
    }

    newNumber(): void {
        this.StartTime = this.StartTime || '12:00';
        this.FinishTime = this.FinishTime || '00:00';

        if (this.numbers.length < 15) {
            this.numbers.push({
                number: this.getRandomNumber(),
                StartTime: this.StartTime,
                FinishTime: this.FinishTime
            });
        }
    }

    deleteComponent(e): void {
        this.numbers.splice(e, 1);
    }

    remove(): void {
        this.deleteIndexFromFactory.emit(this.index);
    }

}
