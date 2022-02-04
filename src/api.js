import url from "./api-url";

class Api {
  constructor(fetch) {
    this.fetch = fetch;
  }
  async request(url, options) {
    const response = await this.fetch(url, {
      ...options,
      headers: { ...options.headers, "Content-Type": "application/json" },
    });
    const data = await response.json();
    return data;
  }
}

async function deleteAll(setHistoricalRolls) {
  const deleteResponse = await fetch(`${url}entries`, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ collectionToDelete: "historicalRolls" }),
  });
  const deleteObject = await deleteResponse.json();
  console.log(deleteObject);
  setHistoricalRolls([]);
}

//const request = async (url, options, fetch = fetch) =>
export { deleteAll, Api };
