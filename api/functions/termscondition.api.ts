import axios from "axios";
import { baseUrl, endpoints } from "../endpoints";

export const Gettermconditions = async (slug: string) => {
  try {
    const response = await axios.get(
      `${baseUrl}/${endpoints.terms.termconditions(slug)}`
    );
    return response?.data;
  } catch (error) {
    console.log(error);
  }
};
