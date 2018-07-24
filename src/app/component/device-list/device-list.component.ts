import { Component, OnInit } from '@angular/core';
import { Device } from '../../model/device';

@Component({
  selector: 'app-device-list',
  templateUrl: './device-list.component.html',
  styleUrls: ['./device-list.component.scss']
})
export class DeviceListComponent implements OnInit {
  public deviceList: Device[] = [];
  public searchDeviceFilter: string = '';

  constructor() { }

  ngOnInit() {
    let device: Device = new Device(); 
    device.creationDate=new Date();
    device.updateDate = new Date();
    device.deviceId = '00:0F:00:E0:00:05';
    device.deviceName = 'Cuisine';
    device.numberOfMessageReceived = 10542;
    device.lastMessageReceivedDate = new Date();
    device.lastMessageReceivedDate.setMinutes(device.lastMessageReceivedDate.getMinutes() - 24);
    this.deviceList.push(device);

    device = new Device();
    device.creationDate=new Date();
    device.updateDate = new Date();
    device.deviceId = '50:00:F0:00:EE:CB';
    device.deviceName = 'Salon';
    device.numberOfMessageReceived = 1042;
    device.lastMessageReceivedDate = new Date();
    device.lastMessageReceivedDate.setMinutes(device.lastMessageReceivedDate.getMinutes() - 125);
    this.deviceList.push(device);

    device = new Device();
    device.creationDate=new Date();
    device.updateDate = new Date();
    device.deviceId = 'FF:A0:F0:0A:EE:FB';
    device.deviceName = 'Salle à manger';
    device.numberOfMessageReceived = 76;
    device.lastMessageReceivedDate = new Date();
    device.lastMessageReceivedDate.setMinutes(device.lastMessageReceivedDate.getMinutes() - 5);
    this.deviceList.push(device);

    device = new Device();
    device.creationDate=new Date();
    device.updateDate = new Date();
    device.deviceId = '0C:10:C0:0A:29:0B';
    device.deviceName = 'Buanderie';
    device.numberOfMessageReceived = 54875;
    device.lastMessageReceivedDate = new Date();
    device.lastMessageReceivedDate.setHours(device.lastMessageReceivedDate.getHours() - 1);
    this.deviceList.push(device);
    
    device = new Device();
    device.creationDate=new Date();
    device.updateDate = new Date();
    device.deviceId = '74:ED:89:41:00:02';
    device.deviceName = 'Chambre parent';
    device.numberOfMessageReceived = 4571;
    device.lastMessageReceivedDate = new Date();
    device.lastMessageReceivedDate.setMinutes(device.lastMessageReceivedDate.getMinutes() - 51);
    this.deviceList.push(device);

    device = new Device();
    device.creationDate=new Date();
    device.updateDate = new Date();
    device.deviceId = '20:74:16:00:00:70';
    device.deviceName = 'Salle de bain';
    device.numberOfMessageReceived = 0;
    device.lastMessageReceivedDate = new Date();
    device.lastMessageReceivedDate.setMinutes(device.lastMessageReceivedDate.getMinutes() - 1);
    this.deviceList.push(device);
  }

}
