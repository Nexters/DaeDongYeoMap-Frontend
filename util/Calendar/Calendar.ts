import CalendarDate, { Day } from './CalendarDate';
import type { UnixTime } from './CalendarDate';

export type CalendarOption = {
  limit?: {
    first?: Date;
    last?: Date;
  };
};

export type CalendarMatrix = Array<Array<CalendarDate>>;

const UNIX_TIME = {
  ONE_DAY: 24 * 60 * 60,
};

export default class Calendar {
  // 현재 날짜
  private cursor: Date;
  // 최대, 최소 날짜
  private limit: {
    first: UnixTime;
    last: UnixTime;
  };

  constructor(cursor: Date, option: CalendarOption = {}) {
    this.initLimitOption(cursor, option);
    this.cursor = cursor;
  }

  public getMatrix(webDate?: Date): CalendarMatrix {
    const target = webDate || this.cursor;
    const dateOption = { cursor: this.cursor, limit: this.limit };

    const matrix: CalendarMatrix = [[]];

    // 이전달 날짜 추가
    {
      const cursor: CalendarDate = CalendarDate.createLastDateOfPrevMonth(
        target,
        dateOption
      );

      while (cursor.getDay() !== Day.Saturday) {
        matrix[matrix.length - 1].unshift(cursor.clone());
        cursor.mutateToPrevDate();
      }
    }

    // 이번달 날짜 추가
    {
      const cursor: CalendarDate = CalendarDate.createFirstDate(
        target,
        dateOption
      );
      const currentMonth: number = cursor.getMonth();
      let cursorMonth: number = cursor.getMonth();

      while (cursorMonth === currentMonth) {
        matrix[matrix.length - 1].push(cursor.clone());
        cursor.mutateToNextDate();
        cursorMonth = cursor.getMonth();

        if (matrix[matrix.length - 1].length > 6) {
          matrix.push([]);
        }
      }
    }

    // 다음달 날짜 추가
    {
      const cursor: CalendarDate = CalendarDate.createFirstDateOfNextMonth(
        target,
        dateOption
      );

      while (cursor.getDay() !== Day.Sunday) {
        matrix[matrix.length - 1].push(cursor.clone());
        cursor.mutateToNextDate();
      }
    }

    // 마지막 빈배열이 추가되었다면 삭제
    if (matrix[matrix.length - 1].length === 0) {
      matrix.pop();
    }

    return matrix;
  }

  private initLimitOption(cursor: Date, option: CalendarOption) {
    const limitFirst: Date =
      (option.limit && option.limit.first) ||
      CalendarDate.createWebDateByLiteral({
        year: 1970,
        month: 1,
        date: 1,
      });
    const limitLast: Date = (option.limit && option.limit.last) || cursor;
    const clonedLimitFirst = new Date(limitFirst.getTime());
    const clonedLimitLast = new Date(limitLast.getTime());

    clonedLimitFirst.setHours(0);
    clonedLimitLast.setHours(24);

    this.limit = {
      first: CalendarDate.toUnixTime(clonedLimitFirst),
      last: CalendarDate.toUnixTime(clonedLimitLast),
    };
  }

  public setCursor(cursorDate: Date): void {
    this.cursor = cursorDate;
  }
}
