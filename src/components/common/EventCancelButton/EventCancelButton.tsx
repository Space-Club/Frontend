import { EventCancelButtonStyled } from './EventCancelButton.style';

interface EventCancelButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  eventId: string;
}

const EventCancelButton = ({ children, ...props }: EventCancelButtonProps) => {
  //TODO:const handleCancelEventClick = () => {}; 행사 참여 취소 api요청 eventId prop에 추가해야 함

  return (
    <EventCancelButtonStyled {...props}>
      삭제하기
      {children}
    </EventCancelButtonStyled>
  );
};

export default EventCancelButton;
