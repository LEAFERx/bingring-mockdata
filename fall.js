const mqtt = require('mqtt');
const client = mqtt.connect('ws://bingring.leaferx.ink:8083/mqtt', {
  clientId: 'mockdevice',
  clean: false,
});

const alarmTimer = setInterval(() => {
  client.publish('alarm_status', '2');
  client.publish('alarm_data', String(Math.random()*30+80) + ',' + String(Math.random()*2 + 25));
}, 3000);

client.subscribe('reset_alarm');

client.on('message', (topic, payload) => {
  if (topic === 'reset_alarm') {
    clearInterval(alarmTimer);
    client.publish('alarm_status', '0');
    client.end();
  }
});