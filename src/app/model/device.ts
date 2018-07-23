import { baseObject } from "./baseObject";

export class Device extends baseObject {

    public deviceId: string = '';
    public deviceName: string = '';
    public numberOfMessageReceived: number = 0;
    public lastMessageReceivedDate: Date = null;
    
    constructor() { super(); }
}