import instance from "..";

const getAllVouchers = async () => {
  const { data } = instance.get("/vouchers/allVouchers");
  return data;
};

const fetchVoucher = async (voucherId) => {
  const { data } = await instance.get(`vouchers/${voucherId}`);
  return data;
};

const addVoucher = async () => {
  const { data } = await instance.post("/vouchers/createVoucher");
  return data;
};

export { getAllVouchers, fetchVoucher, addVoucher };
