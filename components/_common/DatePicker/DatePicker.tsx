import React, { useEffect, useState } from 'react';
import { toDigit } from '~/util';
import Calendar from '~/util/Calendar';
import CalendarDate from '~/util/Calendar/CalendarDate';
import isEqual from 'lodash/isEqual';
import * as $ from './DatePickerView';

const dayStamps: string[] = ['일', '월', '화', '수', '목', '금', '토'];

type Cursor = [number, number];

type Selected = [number, number, number];

type Props = {
  selected?: Selected;
  onClickDate?: (date: CalendarDate) => void;
};

type State = {
  calendar: Calendar;
  cursor: Cursor;
  selected: Selected;
};

const DatePicker: React.FC<Props> = (props) => {
  const [state, setState] = useState<State>({
    calendar: null,
    cursor: null,
    selected: props.selected ?? null,
  });

  const moveCursor = (distance: number) => {
    const newCursor = CalendarDate.createWebDateByLiteral({
      year: state.cursor[0],
      month: state.cursor[1] + distance,
    });

    state.calendar.setCursor(newCursor);
    setState({
      ...state,
      cursor: [newCursor.getFullYear(), newCursor.getMonth() + 1],
    });
  };

  const checkCursorMonth = (calendarDate: CalendarDate): boolean => {
    const isCursorMonth: boolean = isEqual(state.cursor, [
      calendarDate.getYear(),
      calendarDate.getMonth(),
    ]);

    return isCursorMonth;
  };

  const checkSelectedDate = (calendarDate: CalendarDate): boolean => {
    const isSelectedDate: boolean = isEqual(state.selected, [
      calendarDate.getYear(),
      calendarDate.getMonth(),
      calendarDate.getDate(),
    ]);

    return isSelectedDate;
  };

  const handleClickPrevMonth = (e: React.MouseEvent) => {
    e.preventDefault();
    moveCursor(-1);
  };

  const handleClickNextMonth = (e: React.MouseEvent) => {
    e.preventDefault();
    moveCursor(+1);
  };

  const handleClickDate = (calendarDate: CalendarDate) => (
    e: React.MouseEvent
  ) => {
    e.preventDefault();
    setState({
      ...state,
      selected: [
        calendarDate.getYear(),
        calendarDate.getMonth(),
        calendarDate.getDate(),
      ],
    });
    props.onClickDate && props.onClickDate(calendarDate);
  };

  useEffect(() => {
    const now = new Date();
    const lastLimit = new Date(4102444800000); // 2100-01-01
    const cursor: Cursor = props.selected
      ? [props.selected[0], props.selected[1]]
      : [now.getFullYear(), now.getMonth() + 1];
    const selected: Selected = props.selected ?? null;

    setState({
      calendar: new Calendar(now, { limit: { last: lastLimit } }),
      cursor,
      selected,
    });
  }, []);

  if (!state.calendar) {
    return null;
  }

  const title = `${toDigit(state.cursor[0], 2)}.${toDigit(state.cursor[1], 2)}`;
  const dateMatrix = state.calendar.getMatrix(
    CalendarDate.createWebDateByLiteral({
      year: state.cursor[0],
      month: state.cursor[1],
    })
  );

  return (
    <$.DatePicker>
      <$.AreaTitle>
        <$.Title>{title}</$.Title>
        <$.PrevMonthButton onClick={handleClickPrevMonth} />
        <$.NextMonthButton onClick={handleClickNextMonth} />
      </$.AreaTitle>
      <$.AreaTable>
        <$.Table>
          <$.TableHead>
            <$.TableRow>
              {dayStamps.map((day) => (
                <$.TableDay key={`day-${day}`}>
                  <$.Day>{day}</$.Day>
                </$.TableDay>
              ))}
            </$.TableRow>
          </$.TableHead>
          <$.TableBody>
            {dateMatrix.map((row: CalendarDate[], i) => (
              <$.TableRow key={`calendar-row-${i}`}>
                {row.map((calendarDate) => (
                  <$.TableDate key={`calendar-date-${calendarDate.getUnix()}`}>
                    {checkCursorMonth(calendarDate) ? (
                      <$.DateButton
                        onClick={handleClickDate(calendarDate)}
                        aria-selected={checkSelectedDate(calendarDate)}
                      >
                        {calendarDate.getDate()}
                      </$.DateButton>
                    ) : (
                      <$.DummyDate />
                    )}
                  </$.TableDate>
                ))}
              </$.TableRow>
            ))}
          </$.TableBody>
        </$.Table>
      </$.AreaTable>
    </$.DatePicker>
  );
};

export default DatePicker;
