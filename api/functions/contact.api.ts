import { ContactInterface } from "@/interface/contactapi.interfaces";
import axiosInstance from "../axiosInstance";
import { endpoints } from "../endpoints";

export const AddcontactNow = async (payload: ContactInterface) => {
  try {
    const response = await axiosInstance.post(
      endpoints.contactus.contact,
      payload
    );
    return response?.data;
  } catch (error) {
    console.log("Contact Form error", error);
  }
};
