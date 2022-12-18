const EventEmitter = require('events');

const customEmitter = new EventEmitter();

//Any extra arguments passed while emitting event will be accessible in the callback function
customEmitter.on('response', (name, age)=>{
    console.log(`Response received with name: ${name}, and age: ${age}`);
})

//If arguments dont need to be used, we can choose to not use in the listener callback
customEmitter.on('response', ()=>{
    console.log('Arguments not used in this listener');
})

//Emit should be done after listeners since there's not point listening after the event has already occured
customEmitter.emit('response', 'Abhishek', 25);