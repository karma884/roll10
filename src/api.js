import url from "./api-url";
class Api {
  constructor(request, url, token) {
    this.request = request;
    this.url = url;
    this.token = token;
  }

  async deleteAll() {
    const data = await this.request(`${this.url}entries`, {
      method: "DELETE",
      body: { collectionToDelete: "historicalRolls" },
    });

    return data;
  }

  async addComment({ comment, _id }) {
    const data = this.request(`${this.url}newcomment`, {
      method: "POST",
      body: { comment, _id },
    });

    return data;
  }

  async addEntry(newEntry) {
    const data = this.request(`${this.url}entries`, {
      method: "POST",
      body: newEntry,
    });
    return data;
  }

  async getEntries() {
    const data = this.request(`${this.url}entries`);
    return data;
  }
}

async function deleteAll(setHistoricalRolls) {
  const response = await fetch(`${url}entries`, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ collectionToDelete: "historicalRolls" }),
  });
  const deleteObject = await response.json();
  console.log(deleteObject);
  setHistoricalRolls([]);
}

async function signUp(formValues) {
  //const response =
  await fetch(`${url}users/signup`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(formValues),
  });
  //const data = await response.json();
  //console.log(data);
}

//const request = async (url, options, fetch = fetch) =>
export { deleteAll, Api, signUp };
