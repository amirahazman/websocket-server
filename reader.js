const WebSocket = require("ws");

const server = new WebSocket.Server({ port: 6666 });

server.on("connection", (socket) => {
  console.log("A new client connected!");

  // Send a message to the new client
  socket.send(
    "35, 22"
    
  );

  // Listen for messages from the client
  socket.on("message", (message) => {
    console.log(`Received: ${message}`);
    
  });

  
  socket.on("close", () => {
    console.log("Client disconnected");
  });
});

console.log("WebSocket server is running on ws://localhost:6666");
// violation
      // CWStatus: "Violation",
      // Media: "./assets/Warn pedes.webp",
      // PedestrianColors: "",
      // Sound:
      //   "/var/www/html/assets/PED XING - DILARANG MELINTAS KETIKA LAMPU MERAH.mp3",
      // Timestamp: "2024-10-15 16:43:21.8190273 +0800 +08 m=+0.573130601",
      // TrafficColors: "",
      // ViolationMedia: "./violations/a.jpg",

      // CWStatus: "Violation" // use,
      // LowerMsg: "berjalan sewenang wenang",
      // Media: "./assets/Jaywalk_DiPEC.webp",
      // PedestrianColors: "",
      // Sound:
      //   "/var/www/html/assets/PED XING - DILARANG MELINTAS KETIKA LAMPU MERAH (1).mp3",
      // Timestamp: "2025-06-12T19:13:24.0251548+08:00",
      // TimetoEnd: "2025-06-12T19:13:39.0251548+08:00",
      // TrafficColors: "",
      // UpperMsg: "AMARAN!",
      // ViolationMedia: "./violations/jaywalking-20250612-191322.jpg",

      //   waiting
      // CWStatus: "Waiting" // use,
      // Media: "./assets/waiting.webp",
      // Countdown: 30,
      // PedestrianColors: "",
      // Sound:
      //   "/var/www/html/assets/PED XING - DILARANG MELINTAS KETIKA LAMPU MERAH.mp3",
      // Timestamp: "2024-10-15 16:43:21.8190273 +0800 +08 m=+0.573130601",
      // TimetoEnd: "2024-11-29 11:08:26.123+08:00",
      // TrafficColors: "",
      // ViolationMedia: "",

      //   crossing
      // CWStatus: "Crossing", //use,
      // Media: "./assets/crossing.webp",
      // Countdown: 30,
      // PedestrianColors: "",
      // Sound:
      //   "/var/www/html/assets/PED XING - DILARANG MELINTAS KETIKA LAMPU MERAH.mp3",
      // Timestamp: "2024-10-15 16:43:21.8190273 +0800 +08 m=+0.573130601",
      // TimetoEnd: "2024-06-26 13:55:26.123+08:00",
      // TrafficColors: "",
      // ViolationMedia: "",

      //   flag: "violation",
      //   violimage: "./violationss/violation_jumping_20241226_155051.jpg",
      //   imagePath: "./assets/Default.svg",