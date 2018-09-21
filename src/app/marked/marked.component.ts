import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import * as marked from 'marked';
import * as hljs from 'highlight.js';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-marked',
  templateUrl: './marked.component.html',
  styleUrls: ['./marked.component.less']
})
export class MarkedComponent implements OnInit , AfterViewInit {
  @ViewChild('textarea') textarea: ElementRef<HTMLTextAreaElement>;
  @ViewChild('result') result: ElementRef<Element>;
  constructor() { }

  ngOnInit() {
    hljs.initHighlightingOnLoad();
    marked.setOptions({
      highlight(code, lang) {
        return hljs.highlightAuto(code, [lang]).value;
      },
    });
  }
  ngAfterViewInit() {
    setTimeout(() => {
      const inputElement = this.textarea.nativeElement;
      const resultContainer = this.result.nativeElement;
      fromEvent(inputElement, 'input').subscribe(x => {
          resultContainer.innerHTML = marked(inputElement.value);
      });
  }, 0);

}
}
