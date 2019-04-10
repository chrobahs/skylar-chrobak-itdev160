var messages = [];
var messageType = {
  out: 'out-message',
  in: 'in-message',
  unknown: 'unknown-message'
};

var data = [
  {
    type: messageType.out,
    person: 'Skylar',
    message: 'Hey Cris, what are you most excited for at Disney?'
  },
  {
    type: messageType.in,
    person: 'Cristian',
    message: 'I think I am most excited for Epcot!'
  }
];

function Message(type, person, message) {
  this.type = type;
  this.person = person;
  this.message = message;
}

function createMessageElement(message) {
  var messageText = document.createTextNode(
    message.person + ' said: ' + message.message
  );

  var messageEl = document.createElement('div');
  messageEl.appendChild(messageText);
  messageEl.className = message.type;
  return messageEl;
}

function addMessageHandler(event) {
  var person, type;

  var messageInputEl = document.getElementById('message-input');
  var messageContainerEl = document.getElementById('message-container');

  switch (event.target.id) {
    case 'send-button':
      person = 'Skylar';
      type = messageType.out;
      break;
    case 'reply-button':
      person = 'Cristian';
      type = messageType.in;
      break;
    default:
      person = 'unknown';
      type = messageType.unknown;
      break;}

  if (messageInputEl.value != '') {
    var message = new Message(type, person, messageInputEl.value);
    messages.push(message);
    var el = createMessageElement(message);
    messageContainerEl.appendChild(el);
    messageInputEl.value = '';
  }}

function init() {
  document.getElementById('send-button').onclick = addMessageHandler;
  document.getElementById('reply-button').onclick = addMessageHandler;
  var messageContainerEl = document.getElementById('message-container');
  for (let j = 0; j < data.length; j++) {
    const item = data[j];
    var message = new Message(item.type, item.person, item.message);
    messages.push(message);
    var el = createMessageElement(message);
    messageContainerEl.appendChild(el);
  }
}

init();
