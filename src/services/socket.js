import socketio from "socket.io-client";

const socket = socketio("http://192.168.43.108:3334", {
  autoConnect: false
});

function connect(latitude, longitude, techs) {
  socket.io.opts.query = {
    latitude,
    longitude,
    techs
  };

  socket.connect();
}

function disconnect() {
  if (socket.connected) {
    socket.disconnect;
  }
}

export { connect, disconnect };
