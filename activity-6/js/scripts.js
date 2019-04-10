var messages = [];
var messageType =  {
  out: 'out-message',
  in: 'in-message',
  unknown: 'unknown-message'};
var data=[{
  type: messageType.out,
  person: 'Skylar',
  message: 'Hey Cris, what are excited for at Disney?'},
  {
  type: messageType.in,
  person: 'Cris',
  message: 'I am the most excited for Epcot!'}
];
function Message(type, person, message){
  this.type=type;
  this.person=person;
  this.message=message;}
function createMessageElement(message){
  var messageText = document.createTextNode(
    message.person +' said: '+message.message);
  var messageE1 = document.createElement('div');
    messageE1.appendChild(messageText);
    messageE1.className = message.type;
  return messageE1;}
function addMessageHandler(event){
  var person, type;
  var messageInputE1=document.getElementById('message-input');
  var messageConatinerE1=document.getElementById('message-container');
  switch (event.target.id){
    case 'send-button':
      person: 'Skylar';
      type = messageType.out;
      break;
    case 'reply-button':
      person: 'Cristian';
      type=messageType.in;
      break;
    default:
      person: 'Unknown';
      type: messageType.unknown;
      break;}
if(messageInputE1.value !=''){
  var message = new Message(type, person, messageInputE1.value);
  messages.push(message);
  var e1= createMessageElement(message);
  messageContainerE1.appendChild(e1);
  messageInputE1.value='';}
}
function init(){
document.getElementById('send-button').onclick=addMessageHandler;
document.getElementById('reply-button').onclick=addMessageHandler;
var messageContainerE1=document.getElementByID('message-container');
for (let j=0; j<data.length; j++){
  const item=data[j];
var message = new Message(item.type, item.person, item.message);
messages.push(message);
var e1 = createMessageElement(message);
messageContainerE1.appendChild(e1);
}
}
init();
