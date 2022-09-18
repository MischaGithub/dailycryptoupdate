const getChartData = async (id, days, setNewData) => {
  try {
    const res = await fetch(
      `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=zar&days=${days}`
    );

    const json = await res.json();
    setNewData(json);

    return json;
  } catch (error) {
    console.log(error);
  }
};

export default getChartData;
