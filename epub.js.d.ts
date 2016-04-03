// Type definitions for epub.js
// Project: https://github.com/futurepress/epub.js/

declare module 'epub.js' {

  namespace e {
    interface Book {
      (options: any)
    }

    interface Options {
      restore: boolean
    }


    interface HookFunction<T> {
      keyNavigation: T
    }

    interface Hooks {
      /** Register an action */
      register(event: string): any
    }

    interface EPUBJS {
      Hooks: Hooks
    }

  }

  export function ePub(options: e.Options): e.Book

  export var EPUBJS: e.EPUBJS

}
