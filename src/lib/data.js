"use server";
const USERDATA_API = process.env.USERDATA_API;

export const fetchPortfolioData = async (userId) => {
  try {
    const response = await fetch(`${USERDATA_API}/${userId}`);

    if (!response.ok) {
      console.log(response);
      throw new Error(response);
    }
    const data = await response.json();
    return data;
  } catch (err) {
    console.log(err);
    throw new Error(err);
  }
};
