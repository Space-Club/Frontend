import { EventCancelButtonStyled } from './EventCancelButton.style';

interface EventCancelButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  eventId: string;
}

const EventCancelButton = ({ children, ...props }: EventCancelButtonProps) => {
  //TODO:const handleCancelEventClick = () => {}; 행사 참여 취소하시겠습니까? 모달 띄우기

  return (
    <EventCancelButtonStyled {...props}>
      취소하기
      {children}
    </EventCancelButtonStyled>
  );
};

export default EventCancelButton;
