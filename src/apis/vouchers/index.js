import instance from "../../api";

const getAllVouchers = async () => {
  const { data } = await instance.get("/vouchers/allVouchers");
  console.log(data);
  return data;
};

//why is it giving an error that it cannot return any voucher???/

const fetchVoucher = async (voucherId) => {
  const { data } = await instance.get(`vouchers/${voucherId}`);
  return data;
};

const addVoucher = async () => {
  const { data } = await instance.post("/vouchers/createVoucher");
  return data;
};

export { getAllVouchers, fetchVoucher, addVoucher };
