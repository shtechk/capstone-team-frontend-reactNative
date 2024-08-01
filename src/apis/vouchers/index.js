import instance from "../../api";

const getAllVouchers = async () => {
  const { data } = await instance.get("/api/vouchers/allVouchers");
  console.log(data);
  return data;
};

//why is it giving an error that it cannot return any voucher???/

const fetchVoucher = async (voucherId) => {
  const { data } = await instance.get(`vouchers/${voucherId}`);
  return data;
};

const addVoucher = async (amount, phone_number, message, method) => {
  const { data } = await instance.post("/api/vouchers/createVoucher", {
    amount,
    phone_number,
    message,
    method,
  });
  return data;
};

export { getAllVouchers, fetchVoucher, addVoucher };
