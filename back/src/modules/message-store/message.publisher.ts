import { Client, Notification } from 'pg';
import Subscriber from '../../base/subscriber.base';
import { Channel } from './types';

export default function build({ client }: { client: Client }) {
  const subscribers: Subscriber[] = [];

  return {
    subscribe,
    start
  };

  function subscribe(subscriber: Subscriber) {
    subscribers.push(subscriber);
  }

  async function start() {
    await client.connect();

    try {
      await client.query(`LISTEN ${Channel.MESSAGE_INSERTED}`);
      console.log('postgres::message.publisher listening...');
      client.on('notification', notifySubscribers);
    } catch (error) {
      client.end();

      throw error;
    }

    function notifySubscribers(notification: Notification) {
      for (let index = 0; index < subscribers.length; index++) {
        const subscriber = subscribers[index];

        subscriber.handle({
          channel: notification.channel,
          payload: notification.payload
        });
      }
    }
  }
}
