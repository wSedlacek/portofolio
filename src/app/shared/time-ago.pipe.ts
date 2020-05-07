import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'timeAgo' })
export class TimeAgoPipe implements PipeTransform {
  private static readonly YEAR_MS: number = 1000 * 60 * 60 * 24 * 7 * 4 * 12;
  private static readonly MAPPER: any = [
    { single: 'year', many: 'years', div: 1 },
    { single: 'month', many: 'months', div: 12 },
    { single: 'week', many: 'weeks', div: 4 },
    { single: 'day', many: 'days', div: 7 },
    { single: 'hour', many: 'hours', div: 24 },
    { single: 'minute', many: 'minutes', div: 60 },
  ];

  /**
   * @param inputDate: Date | Moment - not included as TypeScript interface,
   * in order to keep `ngx-pipes` "pure" from dependencies!
   */
  @Override()
  public transform(inputDate: any): string {
    if (!inputDate || (!inputDate.getTime && !inputDate.toDate)) {
      return 'Invalid date';
    }

    const past = inputDate.toDate ? inputDate.toDate() : inputDate.getTime();
    const now = +new Date();

    if (past > now) {
      return 'in the future';
    }

    for (
      let i = 0,
        l = TimeAgoPipe.MAPPER.length,
        ms = now - past,
        div = TimeAgoPipe.YEAR_MS;
      i < l;
      i++
    ) {
      const elm = TimeAgoPipe.MAPPER[i];
      const unit = Math.floor(ms / (div /= elm.div));

      if (unit >= 1) {
        return `${unit} ${unit === 1 ? elm.single : elm.many}`;
      }
    }

    return 'just now';
  }
}
