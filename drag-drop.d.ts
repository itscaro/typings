// Type definitions for drag-drop
// Project: https://github.com/feross/drag-drop

declare module 'drag-drop' {

  namespace DragDrop {
    interface Position {
      x: number
      y: number
    }
  }

  /* Create a dragdrop handler */
  function DragDrop(element: string, callback: (files: Array<string>, position: DragDrop.Position) => any)

  export = DragDrop;
}
