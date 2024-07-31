import instance from "../../api";

const getAllBookings = async () => {
  const { data } = await instance.get("/api/bookings/");
  return data;
};

const createBooking = async (
  place,
  date,
  time,
  specialInstructions,
  persons
) => {
  console.log(place, date, time, specialInstructions, persons);
  const { data } = await instance.post("/api/bookings/", {
    place,
    date,
    time,
    specialInstructions,
    persons,
  });
  return data;
};

const deleteBooking = async (id) => {
  const { data } = await instance.delete(`/api/bookings/${id}`);
  return data;
};

const updateBooking = async (
  id,
  place,
  date,
  time,
  specialInstructions,
  persons
) => {
  console.log("H I I SHOULD UPDATE ");

  console.log(id);
  const res = await instance.put(`/api/bookings/${id}`, {
    date: date,
    time: time,
    specialInstructions: specialInstructions,
    persons: persons,
  });

  console.log("HI I AM SEIDING THIS ");
  return res.data;
};

const getOneBooking = async (id) => {
  const { data } = await instance.get(`/api/bookings/${id}`);
  return data;
};

export {
  getAllBookings,
  createBooking,
  deleteBooking,
  updateBooking,
  getOneBooking,
};
