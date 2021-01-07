import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Shopify Line Item Generator';

  formField = 'input';
  formName  = 'Example';

  setFormField(value: string): void {
    this.formField = value;
  }

  setFormName(value: string): void {
    this.formName = value;
  }
}
