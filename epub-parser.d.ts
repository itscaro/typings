declare module 'epubParser' {
  interface epubParser {
    open(filePath: string, callback: Function): void
  }

  export = epubParser
}
