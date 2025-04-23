import axiosInstance from "../axiosInstance";
import { endpoints } from "../endpoints";

export const Getlandingpagedetails = async () => {
  try {
    const response = await axiosInstance.get(
      endpoints.landingPage.landingpagelist
    );
    return response?.data?.data;
  } catch (error) {
    console.log(error);
  }
};
