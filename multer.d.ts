declare module 'multer' {
  import * as express from 'express';

  interface Multer {
    single(field: string): express.RequestHandler
  }

  interface Options {
    dest: string
  }

  function multer(options: Options): Multer

  namespace multer {
  }

  export = multer
}
