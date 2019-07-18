const mqtt = require('mqtt');
const client = mqtt.connect('ws://bingring.leaferx.ink:8083/mqtt', {
  clientId: 'mockdevice1',
  clean: false,
});

const aliveTimer = setInterval(() => {
  client.publish('alive', '1');
}, 3000);