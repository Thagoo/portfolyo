"use server";

export const fetchPortfolioData = async () => {
  const BIN_ID = process.env.BIN_ID;
  const X_MASTER_KEY = process.env.X_MASTER_KEY;
  const X_ACCESS_KEY = process.env.X_ACCESS_KEY;

  const url = `https://api.jsonbin.io/v3/b/${BIN_ID}/latest`;
  const headers = {
    "X-Master-Key": X_MASTER_KEY,
    "X-Access-Key": X_ACCESS_KEY,
  };
  try {
    const response = await fetch(url, { headers: headers });

    if (!response.ok) {
      console.log(response);
      throw new Error(response);
    }
    const { record } = await response.json();
    return record.user;
  } catch (err) {
    console.log(err);
    throw new Error(err);
  }
};
