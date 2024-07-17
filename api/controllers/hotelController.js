import Hotel from "../models/HotelModel.js";


export const createHotel = async (req,res,next) => {
   // Create a new hotel instance with the data from the 
const newHotel = new Hotel(req.body);

// Save the new hotel to the database.
try{
    const savedHotel = await newHotel.save();
    res.status(201).json(savedHotel);
} catch(err) { next(err);}

};

export const updateHotel = async (req,res,next) => {
    // Save the updated hotel to the database.
    try{
        const updatedHotel = await Hotel.findByIdAndUpdate(req.params.id, {$set: req.body},{new: true});
        res.status(200).json(updatedHotel);
    } catch(err) {next(err);}
 
 };

 
 export const deleteHotel = async (req,res,next) => {
    // find and delete hotel in database.
    try{
        await Hotel.findByIdAndDelete(req.params.id);
       res.status(200).json("Hotel has been deleted successfully !");
   } catch(err) {next(err);}
 
 };

 
 export const getHotel = async (req,res,next) => {
     // find hotel in database.
 try{
    const hotel = await Hotel.findById(req.params.id);
    res.status(200).json(hotel);
 } catch(err) { next(err);}
 
 };

 
 export const getHotels = async (req,res,next) => {
  // find all hotel in database.
  try{
    const hotels = await Hotel.find();
    res.status(200).json(hotels);
  } catch(err) { next(err);}
 
 };
 
