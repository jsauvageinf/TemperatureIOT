import { Pipe, PipeTransform } from '@angular/core';
import { Device } from '../model/device';
import * as moment from 'moment';

@Pipe({
    name: 'SearchDevice',
    pure: false
})
export class SearchDevicePipe implements PipeTransform {
    transform(items: Device[], filter: string): any {
        filter = filter.toLowerCase();
        if (!items || !filter) {
            return items;
        }

        // filter items array, items which match and return true will be
        // kept, false will be filtered out
        return items.filter(item => 
            item.deviceId.toLowerCase().indexOf(filter) !== -1
            || item.deviceName.toLowerCase().indexOf(filter) !== -1);
    }
}