import Theme from '@/styles/Theme';
import styled from '@emotion/styled';

const CalendarWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1.1;
  min-width: 30rem;
  height: 31rem;
  padding: 2rem;
  background-color: ${Theme.color.tWhiteGrey};
  border-radius: 1.3rem;

  .react-calendar {
    max-width: 40rem;
    width: 100%;
    height: 100%;
    padding: 1rem;
    border: 0;
    border-radius: 1rem;
  }

  .react-calendar__navigation {
    background-color: ${Theme.color.white};
    border-bottom: 1px solid ${Theme.color.tSeparator};
  }

  .react-calendar__tile {
    text-align: center;
    height: 3.5rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }

  .react-calendar__tile:enabled:hover,
  .react-calendar__tile:enabled:focus,
  .react-calendar__tile--active {
    background: ${Theme.color.calendarHover};
  }

  .react-calendar__tile--now {
    background: ${Theme.color.tWhiteGrey};
  }
  .react-calendar__tile--now:enabled:hover,
  .react-calendar__tile--now:enabled:focus {
    background: ${Theme.color.tSemiActive};
  }
`;

const Dot = styled.div`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background-color: ${Theme.color.activeColor};
`;

export { CalendarWrapper, Dot };
