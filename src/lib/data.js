"use server";
const USERDATA_API = process.env.USERDATA_API;

export const fetchPortfolioData = async () => {
  try {
    const response = await fetch(
      `https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae`
    );

    if (!response.ok) {
      console.log(response);
      throw new Error(response);
    }
    const { user } = await response.json();
    return user;
  } catch (err) {
    console.log(err);
    throw new Error(err);
  }
};
