const WebSocket = require("ws");
const http = require("http");

const server = http.createServer();
const wss = new WebSocket.Server({ noServer: true });

// Handle WebSocket upgrade request
server.on("upgrade", (req, socket, head) => {
  // Allow only connections from the desired origin
  const allowedOrigin = "http://localhost:5173"; // Change this to match your frontend origin
  const origin = req.headers.origin;

  if (origin !== allowedOrigin) {
    socket.destroy(); // Reject connection if origin is not allowed
    console.log(`Rejected connection from ${origin}`);
    return;
  }

  wss.handleUpgrade(req, socket, head, (ws) => {
    wss.emit("connection", ws, req);
  });
});

// Handle WebSocket connections
wss.on("connection", (socket) => {
  console.log("A new client connected!");

  let payloadDefault = JSON.stringify({
    CWStatus: "Default",
  });

  let payloadViolation = JSON.stringify({
    CWStatus: "Violation",
    Media: "./assets/violation.png",
    PedestrianColors: "",
    Sound:
      "/var/www/html/assets/PED XING - DILARANG MELINTAS KETIKA LAMPU MERAH.mp3",
    Timestamp: "2024-10-15 16:43:21.8190273 +0800 +08 m=+0.573130601",
    TrafficColors: "",
    ViolationMedia: "./assets/b.png",
    flag: "violation",
    imagePath: "./assets/Default.svg",
  });

  let payloadCrossing = JSON.stringify({
    CWStatus: "Crossing",
    Media: "./assets/crossing.png",
    Countdown: 30,
    PedestrianColors: "",
    Sound:
      "/var/www/html/assets/PED XING - DILARANG MELINTAS KETIKA LAMPU MERAH.mp3",
    Timestamp: "2025-05-05 16:43:21.8190273 +0800 +08 m=+0.573130601",
    TimetoEnd: "2025-05-07 10:28:26.123+08:00",
    TrafficColors: "",
    ViolationMedia: "./assets/a.jpg",
  });

  let payloadWaiting = JSON.stringify({
    CWStatus: "Waiting",
    Media: "./assets/waiting.gif",
    Countdown: 30,
    PedestrianColors: "",
    Sound:
      "/var/www/html/assets/PED XING - DILARANG MELINTAS KETIKA LAMPU MERAH.mp3",
    Timestamp: "2025-05-05 16:43:21.8190273 +0800 +08 m=+0.573130601",
    TimetoEnd: "2025-05-07 10:32:26.123+08:00",
    TrafficColors: "",
    ViolationMedia: "",
  });

  // Send a message to the client
  let count = 1
  const intervalId = setInterval(() => {

    if(count == 1){
      socket.send(
        payloadDefault
      );
    } else if(count == 2){
      socket.send(
        payloadWaiting
      );
    } else if(count == 3){
      socket.send(
        payloadCrossing
      );
    } else {
      socket.send(
        payloadViolation
      );
    }
   

    count++
    if (count == 5) {
      clearInterval(intervalId)
      count = 1
    }
  }, 5000);

  // Listen for messages from the client
  socket.on("message", (message) => {
    console.log(`Received: ${message}`);
  });

  // Handle client disconnection
  socket.on("close", () => {
    console.log("Client disconnected");
    clearInterval(intervalId);
  });
});

// Start the HTTP server
server.listen(5000, () => {
  console.log("WebSocket server is running on ws://localhost:5000");
});
