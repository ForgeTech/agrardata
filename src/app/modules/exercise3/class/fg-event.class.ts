/**
* FgEvent -
* This class is used to represent forge internal
* inter-module/component/service messages
*/
export class FgEvent {
//   /**
//   * The unique string const signuature used to identify
//   * the event
//   */
//   private _signature: string;
//   /**
//   * GETTER for private member _signature
//   */
//   get signature(): string {
//     return this._signature;
//   }
//   /**
//   * Meant to hold a reference to the class-instance dispatching
//   * the event
//   */
//   private _dispatcher: any;
//   /**
//   * GETTER for private member _dispatcher
//   */
//   get dispatcher(): any {
//     return this._dispatcher;
//   }
//   /**
//   * Meant to hold the possible payload of an event
//   */
//   private _data: any;
//   /**
//   * GETTER for private member _data
//   */
//   get data(): any {
//     return this._data;
//   }
  /**
  * CONSTRUCTOR
  */
  constructor(
    public readonly signature: string,
    public readonly dispatcher: any,
    public readonly data: any = false
  ) {
    // this._signature = signatur;
    // this._dispatcher = dispatcher;
    // this._data = data;
  }
}
