declare namespace Express {
  namespace Morgan {

  }
}

declare module 'morgan' {
  import * as express from 'express';

  interface Morgan {
    (environment?: string): express.RequestHandler
  }

  var morgan: Morgan;

  export = multer;
}
