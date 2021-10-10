import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'myfilter',
    pure: false
})
export class MyFilterPipe implements PipeTransform {
    transform(items: any[], filter: Object): any {
        if (!items || !filter) {
            return items;
        }
        // filter items array, items which match and return true will be
        // kept, false will be filtered out
        //console.log(items.filter(item => item.author.indexOf(filter) !== -1));
        return items.filter(item => item.author.indexOf(filter) !== -1);
    }
}