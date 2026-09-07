// const express = require("express");
// const app = express();
// const tourRouter = require('./routes/tourRouter');
// app.use('/tours', tourRouter);
// const {
//   getAllTours,
//   getTourById,
//   createTour,
//   updateTour,
//   deleteTour,
// } = require("./tourHandlers.js");

// // Middleware to parse JSON
// app.use(express.json());

// // ROUTES
// // GET /tours
// app.get("/tours", getAllTours);

// // POST /tours
// app.post("/tours", createTour);

// // GET /tours/:tourId
// app.get("/tours/:tourId", getTourById);

// // PUT /tours/:tourId
// app.put("/tours/:tourId", updateTour);

// // DELETE /tours/:tourId
// app.delete("/tours/:tourId", deleteTour);

// const port = 4000;
// // Start the server
// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });

const express = require("express");

const tourRouter = require("./routes/tourRouter");
const userRouter = require("./routes/userRouter");

const app = express();

app.use(express.json());

app.use("/api/tours", tourRouter);
app.use("/api/users", userRouter);

const port = 4000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});