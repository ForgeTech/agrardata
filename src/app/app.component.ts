import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'agrar';
  public switchedName: string = '';
  public showName( name: string ): void {
    this.switchedName = name;
  }
}
