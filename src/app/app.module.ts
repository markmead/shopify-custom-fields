import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SelectFormFieldComponent } from './components/select-form-field/select-form-field.component';
import { ButtonCopyToClipboardComponent } from './components/button-copy-to-clipboard/button-copy-to-clipboard.component';
import { FieldInputComponent } from './components/field-input/field-input.component';
import { FieldSelectComponent } from './components/field-select/field-select.component';
import { FieldTextareaComponent } from './components/field-textarea/field-textarea.component';
import { PageHeaderComponent } from './components/page-header/page-header.component';
import { ExampleStoreComponent } from './components/example-store/example-store.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormErrorComponent } from './components/form-error/form-error.component';
import { TruncatePipe } from './pipes/truncate.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SelectFormFieldComponent,
    ButtonCopyToClipboardComponent,
    FieldInputComponent,
    FieldSelectComponent,
    FieldTextareaComponent,
    PageHeaderComponent,
    ExampleStoreComponent,
    FooterComponent,
    FormErrorComponent,
    TruncatePipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
