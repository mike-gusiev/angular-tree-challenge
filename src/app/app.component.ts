import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  factories = [{min: 0, max: 99, name: 'default factory'}];
  min = 0;
  max = 1;
  factoryName = 'factory';

  createFactory(): void {
      this.min = this.min || 0;
      this.max = this.max || this.min + 1;
      this.factoryName = this.factoryName || 'default factory';
      this.factories.push({
          min: this.min,
          max: this.max,
          name: this.factoryName
      });
  }

  onMinChanged(): void {
      this.min = Math.min(this.min, this.max - 1);
  }

  onMaxChanged(): void {
      this.max = Math.max(this.max, this.min + 1);
  }

  deleteFactory(e): void {
      this.factories.splice(e, 1);
  }
}
