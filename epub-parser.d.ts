declare namespace EpubParser {
  namespace EpubParser {

  }
}

declare module 'epub-parser' {

  interface EpubParser {
    open(filePath: string, callback: Function): void
  }

  var epubParser: EpubParser;

  export = epubParser;
}
