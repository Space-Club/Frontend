import { Schedule } from '../event';

interface GetClubSchedulesRequest {
  clubId: string;
}

interface GetClubSchedulesResponse {
  schedules: Schedule[];
}

export { GetClubSchedulesRequest, GetClubSchedulesResponse };
