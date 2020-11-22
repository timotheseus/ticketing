import { Message } from 'node-nats-streaming';
import { Listener } from './base-listener';
import { TicketCreatedEvent } from './ticket-created-event';
import { Subjects } from './subjects';
import { listeners } from 'cluster';

export class TicketCreatedListener extends Listener<TicketCreatedEvent> {
  readonly subject = Subjects.TicketCreated;
  queueGroupName = 'payment-service';

  onMessage(data: TicketCreatedEvent['data'], msg: Message) {
    console.log('Event data!', data);
    console.log(data.id);
    console.log(data.title);
    console.log(data.price);
    msg.ack();
  }
}
