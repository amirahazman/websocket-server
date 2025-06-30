const WebSocket = require("ws");

const server = new WebSocket.Server({ port: 5000 });

server.on("connection", (socket) => {
  console.log("A new client connected!");

  // Send a message to the new client
  socket.send(
    // "ping"
    JSON.stringify({
      // default
      // CWStatus: "default",
      // Countdown: -1,
      // CrossingCount: 112,
      // CrossingRequest: false,
      // Media: "./assets/Default.jpg",
      // PedestrianColors: "",
      // Sound: "",
      // Timestamp: "2025-06-12T19:16:29.8598633+08:00",
      // TimetoEnd: "2025-06-12T19:16:29.8598633+08:00",
      // TrafficColors: "",
      // TrafficProfile: "Normal",
      // TrafficSchedule: "SMART MODE (DEFAULT)",

      // waiting
      // CWStatus: "Waiting",
      // Countdown: 29,
      // CrossingCount: 1,
      // CrossingRequest: true,
      // Media: "./assets/waiting.gif",
      // PedestrianColors: "",
      // Sound: "/var/www/html/assets/PED XING - SILA TUNGGU SEBENTAR (1).mp3",
      // Timestamp: "2025-06-12T17:06:40.745047+08:00",
      // TimetoEnd: "2025-06-26T17:54:00.745047+08:00",
      // TrafficColors: "",
      // TrafficProfile: "Normal",
      // TrafficSchedule: "SMART MODE (DEFAULT)",

      // crossing
      // CWStatus: "Crossing",
      // Countdown: 34,
      // CrossingCount: 2,
      // CrossingRequest: false,
      // Media: "./assets/crossing.png",
      // PedestrianColors: "",
      // Sound:
      //   "/var/www/html/assets/(OPT) PED XING - BERHATI KETIKA MELINTAS.mp3",
      // Timestamp: "2025-06-12T17:07:10.7463246+08:00",
      // TimetoEnd: "2025-06-26T17:55:10.745047+08:00",
      // TrafficColors: "",
      // TrafficProfile: "Normal",
      // TrafficSchedule: "SMART MODE (DEFAULT)",

      // violation
      CWStatus: "Violation",
      LowerMsg: "hhshshs",
      Media: "./assets/violation.png",
      PedestrianColors: "",
      Sound:
        "/var/www/html/assets/PED XING - DILARANG MELINTAS KETIKA LAMPU MERAH (1).mp3",
      Timestamp: "2025-06-12T19:16:14.8068659+08:00",
      TimetoEnd: "2025-06-12T19:16:29.8068659+08:00",
      TrafficColors: "",
      UpperMsg: "huhuuh",
      ViolationMedia: "./assets/c.png",
      
    })
  );

  // Listen for messages from the client
  socket.on("message", (message) => {
    console.log(`Received: ${message}`);
    // Echo the message back to the client
    //socket.send();
  });

  // Handle client disconnection
  socket.on("close", () => {
    console.log("Client disconnected");
  });
});

console.log("WebSocket server is running on ws://localhost:5000");
