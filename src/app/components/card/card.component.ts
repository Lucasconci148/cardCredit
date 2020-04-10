import { Component } from '@angular/core';

@Component({
  selector: 'app-credit-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})

export class CardComponent {
    public isBack = false;

    clickEvent() {
        this.isBack = !this.isBack;
    }
}
