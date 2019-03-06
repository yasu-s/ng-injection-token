import { Component, Inject, OnInit } from '@angular/core';

import { TOKEN_SAMPLE } from './token';

@Component({
  selector: 'app-root',
  template: `
  <div style="text-align:center">
    <h1>
      {{ text }}
    </h1>
  </div>
  `
})
export class AppComponent implements OnInit {
  text = '';

  constructor(@Inject(TOKEN_SAMPLE) private token: string) {}

  ngOnInit(): void {
    this.text = this.token;
  }
}
