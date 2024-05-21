import { Component } from '@angular/core';
const pdfMake = require('pdfmake/build/pdfmake.js');
import * as pdfFonts from './vfs_fonts.js';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pdf';
  ngOnInit(): void {
    
    pdfMake.vfs = pdfFonts.pdfMake.vfs;
    
    pdfMake.fonts = {
      NotoSansKannada: {
        normal: 'NotoSansKannada.ttf',
        bold: 'NotoSansKannada.ttf',
        italics: 'NotoSansKannada.ttf',
        bolditalics: 'NotoSansKannada.ttf'
      }
      // Japanese:{
      //   normal:'./node_modules/pdfmake/build/examples/fonts/Japanese.ttf',
      //   bold:'./node_modules/pdfmake/build/examples/fonts/Japanese.ttf',
      //   italics:'./node_modules/pdfmake/build/examples/fonts/Japanese.ttf',
      //   bolditalics:'./node_modules/pdfmake/build/examples/fonts/Japanese.ttf'
      // },
      // NotoSans:{
      //   normal:'NotoSansCJKsc-Regular.Ttf',
      //   bold:'NotoSansCJKsc-Bold.Ttf',
      //   italics:'NotoSansCJKsc-Italics.Ttf',
      //   bolditalics:'NotoSansCJKs-Regular.Ttf'
      // }
    };
  }
  constructor(){
    pdfMake.vfs = pdfFonts.pdfMake.vfs;
  }
  generatePdf() {
    const documentDefinition = {
      content: [
        { text: 'ಹಲೋ ವಿಶ್ವ!', style: 'header',font:'NotoSansKannada'},
        { text: 'ಇದು ಕನ್ನಡದಲ್ಲಿ PDF ನಂತೆ ತಯಾರಿಸಲಾಗಿದೆ.', style: 'content',}
      ],
      styles: {
        header: {
          fontSize: 18,
          bold: true,
          margin: [0, 0, 0, 10],
          font:'NotoSansKannada'
        },
        content: {
          fontSize: 14,
          font:'NotoSansKannada'
        }
      }
    };
  
    pdfMake.createPdf(documentDefinition).open();
  }
  
}
