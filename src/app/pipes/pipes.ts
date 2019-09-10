import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'isOpen' })
export class IsOpenPipe implements PipeTransform {
  transform(value: string, exponent: string): boolean {
    return value === 'opened';
  }
}

@Pipe({ name: 'isClosed' })
export class IsClosedPipe implements PipeTransform {
  transform(value: string, exponent: string): boolean {
    return value === 'closed';
  }
}
