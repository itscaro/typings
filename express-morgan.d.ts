declare module 'morgan' {
  import * as express from 'express';

  function morgan(environment: string): express.RequestHandler

  namespace morgan {
  }

  export = morgan
}
