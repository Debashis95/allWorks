import axios from "axios";
import { baseUrl, endpoints } from "../endpoints";

export const Getprivacypolicy = async (slug: string) => {
  try {
    const response = await axios.get(
      `${baseUrl}/${endpoints.privacy.privacypolicy(slug)}`
    );
    return response?.data;
  } catch (error) {
    console.log(error);
  }
};
