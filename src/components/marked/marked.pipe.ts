/** 自定义管道 - 将markdown字符串转化为html字符串 */

import { Pipe, PipeTransform } from '@angular/core';
import * as marked from 'marked';
import * as hljs from 'highlight.js';

hljs.initHighlightingOnLoad();
marked.setOptions({
  highlight(code, lang) {
    return hljs.highlightAuto(code, [lang]).value;
  },
});


@Pipe({
  name: 'marked'
})
export class MarkedPipe implements PipeTransform {

  transform(value: string, args?: any): string {
    return marked(value);
  }

}
