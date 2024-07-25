import instance from "../../api";

const getAllVouchers = async () => {
  const { data } = instance.get("/vouchers/allVouchers");
  return data;
};

const fetchVoucher = async (voucherId) => {
  const { data } = await instance.get(`vouchers/${voucherId}`);
  return data;
};

export { getAllVouchers, fetchVoucher };
