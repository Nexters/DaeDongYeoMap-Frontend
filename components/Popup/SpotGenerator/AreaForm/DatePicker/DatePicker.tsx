import React, { useEffect, useState } from 'react';
import { toDigit } from '~/util';
import Calendar from '~/util/Calendar';
import CalendarDate from '~/util/Calendar/CalendarDate';
import * as $ from './DatePickerView';

const dayStamps: string[] = ['일', '월', '화', '수', '목', '금', '토'];

type Cursor = [number, number];
type Selected = [number, number, number];
type State = {
  calendar: Calendar;
  cursor: Cursor;
  selected: Selected;
};

const DatePicker: React.FC = () => {
  const [state, setState] = useState<State>({
    calendar: null,
    cursor: null,
    selected: null,
  });

  useEffect(() => {
    const now = new Date();
    const lastLimit = new Date(4102444800000); // 2100-01-01
    const cursor: Cursor = [now.getFullYear(), now.getMonth() + 1];
    const selected: Selected = [
      now.getFullYear(),
      now.getMonth() + 1,
      now.getDate(),
    ];

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

  console.log(dateMatrix);

  return (
    <$.DatePicker>
      <$.AreaTitle>
        <$.Title>{title}</$.Title>
        <$.PrevMonthButton />
        <$.NextMonthButton />
      </$.AreaTitle>
      <$.AreaTable>
        <$.Table>
          <$.TableHead>
            <$.TableRow>
              {dayStamps.map((day) => {
                <$.TableDay key={`day-${day}`}>{day}</$.TableDay>;
              })}
            </$.TableRow>
          </$.TableHead>
          <$.TableBody>
            {dateMatrix.map((row: CalendarDate[], i) => (
              <$.TableRow key={`calendar-row-${i}`}>
                {row.map((calendarDate) => {
                  const date = calendarDate.getDate();

                  return (
                    <$.TableDate key={`calendar-date-${date}`}>
                      {date}
                    </$.TableDate>
                  );
                })}
              </$.TableRow>
            ))}
          </$.TableBody>
        </$.Table>
      </$.AreaTable>
    </$.DatePicker>
  );
};

export default DatePicker;
