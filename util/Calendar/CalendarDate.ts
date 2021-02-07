export type UnixTime = number;

export enum Day {
  Sunday = 0,
  Monday = 1,
  Tuesday = 2,
  Wednesday = 3,
  Thursday = 4,
  Friday = 5,
  Saturday = 6,
}

export enum Position {
  prevMonth = -1,
  currentMonth = 0,
  nextMonth = 1,
}

type LiteralDate = {
  year?: number;
  month?: number;
  date?: number;
};

type CalendarDateOption = {
  cursor: Date;
  limit: {
    first: UnixTime;
    last: UnixTime;
  };
};

/**
 * @see
 * - 항상 12시로 설정됨 (최대, 최소날짜 비교를 편하게 하기 위함)
 */
export default class CalendarDate {
  private webDate: Date;
  private unix: UnixTime;
  private cursor: Date;
  private limit: {
    first: UnixTime;
    last: UnixTime;
  };

  constructor(webDate: Date, option: CalendarDateOption) {
    this.webDate = webDate;
    this.unix = CalendarDate.toUnixTime(webDate);
    this.cursor = option.cursor;
    this.limit = option.limit;
  }

  //////////////////////////////////////////
  //////////// Getter/Setter ///////////////
  //////////////////////////////////////////
  public getFullMonth(): [number, number] {
    return [this.getYear(), this.getMonth()];
  }

  public getFullDate(): [number, number, number] {
    return [this.getYear(), this.getMonth(), this.getDate()];
  }

  public getYear(): number {
    return this.webDate.getFullYear();
  }

  public getMonth(): number {
    return this.webDate.getMonth() + 1;
  }

  public getDate(): number {
    return this.webDate.getDate();
  }

  public getDay(): Day {
    return this.webDate.getDay();
  }

  public getUnix(): UnixTime {
    return CalendarDate.toUnixTime(this.webDate);
  }

  public getPosition(): Position {
    const cursorYear = this.cursor.getFullYear();
    const cursorMonth = this.cursor.getMonth() + 1;
    const thisYear = this.getYear();
    const thisMonth = this.getMonth();

    if (cursorYear > thisYear) {
      return Position.prevMonth;
    } else if (cursorYear < thisYear) {
      return Position.nextMonth;
    }
    if (cursorMonth > thisMonth) {
      return Position.prevMonth;
    } else if (cursorMonth < thisMonth) {
      return Position.nextMonth;
    }

    return Position.currentMonth;
  }

  public checkActive(): boolean {
    return this.unix < this.limit.last && this.unix >= this.limit.first;
  }

  public clone(): CalendarDate {
    return new CalendarDate(new Date(this.webDate.getTime()), {
      cursor: new Date(this.cursor.getTime()),
      limit: { ...this.limit },
    });
  }

  //////////////////////////////////////////
  /////////////// Mutation /////////////////
  //////////////////////////////////////////
  public mutateToPrevDate(): void {
    this.webDate = CalendarDate.createWebDateByLiteral({
      year: this.getYear(),
      month: this.getMonth(),
      date: this.getDate() - 1,
    });
    this.unix = CalendarDate.toUnixTime(this.webDate);
  }

  public mutateToNextDate(): void {
    this.webDate = CalendarDate.createWebDateByLiteral({
      year: this.getYear(),
      month: this.getMonth(),
      date: this.getDate() + 1,
    });
    this.unix = CalendarDate.toUnixTime(this.webDate);
  }

  //////////////////////////////////////////
  ///////////// Static Util ////////////////
  //////////////////////////////////////////
  public static createWebDateByLiteral({
    year,
    month,
    date,
  }: LiteralDate): Date {
    const webDate = new Date();

    webDate.setDate(1);

    if (year !== undefined) webDate.setFullYear(year);
    if (month !== undefined) webDate.setMonth(month - 1);
    if (date !== undefined) webDate.setDate(date);

    webDate.setHours(12, 0, 0);

    return webDate;
  }

  public static toUnixTime(webDate: Date): UnixTime {
    return Math.floor(webDate.getTime() / 1000);
  }

  //////////////////////////////////////////
  //////////////// Factory /////////////////
  //////////////////////////////////////////
  public static createByLiteral(
    { year, month, date }: LiteralDate,
    option: CalendarDateOption
  ): CalendarDate {
    return new CalendarDate(
      CalendarDate.createWebDateByLiteral({
        year,
        month,
        date,
      }),
      option
    );
  }

  public static createFirstDate(
    webDate: Date,
    option: CalendarDateOption
  ): CalendarDate {
    const year = webDate.getFullYear();
    const month = webDate.getMonth() + 1;

    return CalendarDate.createByLiteral({ year, month, date: 1 }, option);
  }

  public static createLastDate(
    webDate: Date,
    option: CalendarDateOption
  ): CalendarDate {
    const year = webDate.getFullYear();
    const month = webDate.getMonth() + 2;

    return CalendarDate.createByLiteral({ year, month, date: 0 }, option);
  }

  public static createFirstDateOfNextMonth(
    webDate: Date,
    option: CalendarDateOption
  ): CalendarDate {
    const year = webDate.getFullYear();
    const month = webDate.getMonth() + 2;

    return CalendarDate.createByLiteral(
      { year, month: month, date: 1 },
      option
    );
  }

  public static createLastDateOfPrevMonth(
    webDate: Date,
    option: CalendarDateOption
  ): CalendarDate {
    const year = webDate.getFullYear();
    const month = webDate.getMonth() + 1;

    return CalendarDate.createByLiteral(
      { year, month: month, date: 0 },
      option
    );
  }
}
