import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoute from "./routes/authRoute.js";
import usersRoute from "./routes/usersRoute.js";
import roomsRoute from "./routes/roomsRoute.js";
import hotelsRoute from "./routes/hotelsRoute.js";
// Swagger setup
import specs from "./utils/swagger.js";
import swaggerUi from "swagger-ui-express"

const app = express();

// Configuring dotenv
dotenv.config();

// connexion on database then running server
mongoose.connect(process.env.MONGO_URI)
  .then(() => app.listen(process.env.PORT, () => console.log(`### Server Running on Port: http://localhost:${process.env.PORT} ###`)))
  .catch((error) => console.log(`${error} did not connect`));

// middlewares
app.use(express.json());

app.use("/api/v1/auth", authRoute);
app.use("/api/v1/users", usersRoute);
app.use("/api/v1/rooms", roomsRoute);
app.use("/api/v1/hotels", hotelsRoute);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

app.use((err,req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Something went wrong !";

  return res.status(errorStatus).json({
    status: errorStatus,
    message: errorMessage,
    success: false,
    stack: err.stack,
  });

 
});



