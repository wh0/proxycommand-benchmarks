#!/usr/bin/env node
const net = require('net');
const sock = new net.Socket();
sock.connect(80, 'connectivitycheck.gstatic.com', () => {
  sock.pipe(process.stdout);
  process.stdin.pipe(sock);
});
