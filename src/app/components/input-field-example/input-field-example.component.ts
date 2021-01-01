import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-input-field-example',
  templateUrl: './input-field-example.component.html',
  styleUrls: ['./input-field-example.component.css']
})
export class InputFieldExampleComponent implements OnInit {
  inputHTML: string = '<input id="your-name" type="text" name="properties[Your name]">'
  inputHTMLExample!: SafeHtml; // `!` ignores the strictPropertyInitialization rule

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    this.inputHTMLExample = this.sanitizer.bypassSecurityTrustHtml(this.inputHTML)
  }

  // passing multiple types HTMLTextAreaElement|HTMLSelectElement
  copyHtmlToClipboard(clipboardHtml: HTMLTextAreaElement) {
    clipboardHtml.select();
    document.execCommand("copy");
    clipboardHtml.setSelectionRange(0, 0);
  }
}
