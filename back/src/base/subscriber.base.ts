interface Message {
  channel: string;
  payload: any;
}

export default interface Subscriber {
  handle: (message: Message) => void;
}
