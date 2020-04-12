import { Component } from '@angular/core';

@Component({
  selector: 'app-credit-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})

export class CardComponent {
    public isBack = false;
    public name = '';
    public cvv  = '';
    public number = '';
    public isVisa = false;
    public isMaster = false;

    public month = '';
    public year = '';

    clickEvent() {
        this.isBack = !this.isBack;
    }

    shoBack() {
      this.isBack = true;
    }

    showFront() {
      this.isBack = false;
    }

    changeCardNumber() {
      console.log(this.number.charAt(0));
      switch (this.number.charAt(0)) {
        case '5':
          this.isMaster = true;
          this.isVisa = false;
          break;
        case '4':
          this.isMaster = false;
          this.isVisa = true;
          break;
        default:
          this.isMaster = false;
          this.isVisa = false
          break;
      }
    }
}
