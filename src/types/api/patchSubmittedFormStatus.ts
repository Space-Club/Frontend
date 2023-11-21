interface SubmittedFormStatusRequest {
  eventId: string;
  formUserId: string;
  status: string; //CONFIRM, PENDING, ... 으로 바꿀까
}

export { SubmittedFormStatusRequest };
