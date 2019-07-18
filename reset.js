const mqtt = require('mqtt');
const client = mqtt.connect('ws://bingring.leaferx.ink:8083/mqtt', {
  clientId: 'mockdevice2',
  clean: false,
});

client.publish('reset_alarm', '1', () => {
  client.end();
});