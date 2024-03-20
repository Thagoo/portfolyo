"use server";
const USERDATA_API = process.env.USERDATA_API;

export const fetchPortfolioData = async (userId) => {
  try {
    const response = await fetch(`${USERDATA_API}/${userId}`);
    const data = await response.json();
    return data;
  } catch (err) {
    console.log(err);
  }
};
