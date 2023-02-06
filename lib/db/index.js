import mongoose from "mongoose";

const connection = {};

export async function connect() {
  if (connection.isConnected) {
    return console.log("Already connected");
  }
  // Displaying current ready state:
  // 1 - connected, 0 - not connected, 2 - connecting, 3 - disconnecting
  console.log(mongoose.STATES[mongoose.connection.readyState] + "...");

  if (mongoose.connections.length > 0) {
    connection.isConnected = mongoose.connections[0].readyState;
    if (connection.isConnected === 1) {
      return console.log("Using previously existing connection");
    }
    await mongoose.disconnect();
  }

  // This will be introduced in mongoose 7+
  mongoose.set("strictQuery", false);

  try {
    const db = await mongoose.connect(process.env.DATABASE_URL, {
      autoIndex: true,
      useUnifiedTopology: true,
    });
    connection.isConnected = db.connections[0].readyState;
    console.log(
      `Connection to ${process.env.DATABASE_NAME.toUpperCase()} database successful`
    );
  } catch (error) {
    console.log("Unable to connect to database:\n" + error.message);
  }
}

export async function disconnect() {
  if (connection.isConnected) {
    if (process.env.NODE_ENV === "production") {
      await mongoose.disconnect();
      connection.isConnected = false;
    } else {
      console.log("Keeping alive in development mode. Not disconnected");
    }
  }
}
