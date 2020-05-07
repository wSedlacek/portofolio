import { TimeAgoPipe } from './time-ago.pipe';

describe('TimeAgoPipe', () => {
  let pipe: TimeAgoPipe;

  const recentlyString = 'just now';
  const futureString = 'in the future';

  const today = new Date();
  const future = new Date(today.getTime() + 1000 * 20);
  const fewSecondsAgoDate = new Date(today.getTime() - 5 * 1000);
  const aMinuteAgoDate = new Date(today.getTime() - 60 * 1000);

  const fewMinutesAgoString = '5 minutes';
  const fewMinutesAgoDate = new Date(new Date().getTime() - 5 * 60 * 1000);

  const anHourAgoString = '1 hour';
  const anHourAgoDate = new Date(new Date().getTime() - 60 * 60 * 1000);

  const fewHoursAgoString = '5 hours';
  const fewHoursAgoDate = new Date(new Date().getTime() - 5 * 60 * 60 * 1000);

  const yesterdayString = '1 day';
  const yesterdayDate = new Date(new Date().setDate(new Date().getDate() - 1));

  const fewDaysAgoString = '3 days';
  const fewDaysAgoDate = new Date(new Date().setDate(new Date().getDate() - 3));

  const lastWeekString = '1 week';
  const lastWeekDate = new Date(new Date().setDate(new Date().getDate() - 12));

  const fewWeeksAgoString = '2 weeks';
  const fewWeeksAgoDate = new Date(
    new Date().setDate(new Date().getDate() - 14)
  );

  const lastMonthString = '1 month';
  const lastMonthDate = new Date(new Date().setDate(new Date().getDate() - 30));

  const fewMonthsAgoString = '5 months';
  const fewMonthsAgoDate = new Date(
    new Date().setDate(new Date().getDate() - 30 * 5)
  );

  const lastYearString = '1 year';
  const lastYearDate = new Date(new Date().setDate(new Date().getDate() - 366));

  const fewYearsAgoString = '5 years';
  const fewYearsAgoDate = new Date(
    new Date().setDate(new Date().getDate() - 365 * 5)
  );

  beforeAll(() => {
    pipe = new TimeAgoPipe();
  });

  it('should return just now when time is now', () => {
    expect(pipe.transform(today)).toEqual(recentlyString);
  });

  it('should return just now when time is a few seconds ago', () => {
    expect(pipe.transform(fewSecondsAgoDate)).toEqual(recentlyString);
  });

  it('should return just now when time is a minute ago', () => {
    expect(pipe.transform(aMinuteAgoDate)).toEqual(recentlyString);
  });

  it('should return 5 minutes', () => {
    expect(pipe.transform(fewMinutesAgoDate)).toEqual(fewMinutesAgoString);
  });

  it('should return 1 hour', () => {
    expect(pipe.transform(anHourAgoDate)).toEqual(anHourAgoString);
  });

  it('should return 5 hours', () => {
    expect(pipe.transform(fewHoursAgoDate)).toEqual(fewHoursAgoString);
  });

  it('should return 1 day', () => {
    expect(pipe.transform(yesterdayDate)).toEqual(yesterdayString);
  });

  it('should return 5 days', () => {
    expect(pipe.transform(fewDaysAgoDate)).toEqual(fewDaysAgoString);
  });

  it('should return 1 week', () => {
    expect(pipe.transform(lastWeekDate)).toEqual(lastWeekString);
  });

  it('should return 2 weeks', () => {
    expect(pipe.transform(fewWeeksAgoDate)).toEqual(fewWeeksAgoString);
  });

  it('should return 1 month', () => {
    expect(pipe.transform(lastMonthDate)).toEqual(lastMonthString);
  });

  it('should return 5 months', () => {
    expect(pipe.transform(fewMonthsAgoDate)).toEqual(fewMonthsAgoString);
  });

  it('should return 1 year', () => {
    expect(pipe.transform(lastYearDate)).toEqual(lastYearString);
  });

  it('should return 5 years', () => {
    expect(pipe.transform(fewYearsAgoDate)).toEqual(fewYearsAgoString);
  });

  it('should return in the future', () => {
    expect(pipe.transform(future)).toEqual(futureString);
  });
});
