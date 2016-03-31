// Type definitions for epub-parser
// Project: https://github.com/Vaporbook/epub-parser

declare module 'epub-parser' {

  interface EpubParser {
    open(filePath: string, callback: Function): void
  }

  var epubParser: EpubParser;

  export = epubParser;
}
