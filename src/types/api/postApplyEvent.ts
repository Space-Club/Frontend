interface Question {
  optionId: number;
  content: string;
}

interface postEventApplyRequest {
  eventId: string;
  forms: Question[];
}

export { Question, postEventApplyRequest };
