interface Question {
  optionId: number;
  content: string;
}

interface postEventApplyRequest {
  eventId: string;
  ticketCount?: number | null;
  forms?: Question[];
}

export { Question, postEventApplyRequest };
