import { Publisher, Subjects, TicketUpdatedEvent } from '@timvtickets/common';

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  readonly subject = Subjects.TicketUpdated;
}
