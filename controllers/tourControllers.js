const Tour = require('../models/tourModel');

const getAllTours = (req, res) => {
   res.json(Tour.getAll());
};
 
const createTour = (req, res) => {
   const { name, info, image, price } = req.body;

   const newTour = Tour.addOne(name, info, image, price);
   if (!newTour) {
      return res.status(500).json({ message: 'Fail to create tour' });
   }

   res.json(newTour);
};

const getTourById = (req, res) => {
   const { tourId } = req.params;
   const tour = Tour.findById(tourId);

   if (!tour) {
      return res.status(404).json({ message: 'Tour not found' });
   }

   res.json(tour);
};

const updateTour = (req, res) => {
   const { tourId } = req.params;
   const updatedTour = Tour.updateOneById(tourId, req.body);

   if (!updatedTour) {
      return res.status(404).json({ message: 'Tour not found' });
   }

   res.json(updatedTour);
};

const deleteTour = (req, res) => {
  const tourId = req.params.tourId;
  const isDeleted = Tour.deleteOneById(tourId);
  if (isDeleted) {
    res.json({ message: "Deleted successfully" });
  } else {
    res.status(404).json({ message: "Tour not found" });
  }
};

module.exports = {
  getAllTours,
  getTourById,
  createTour,
  updateTour,
  deleteTour,
};
