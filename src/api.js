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
//const request = async (url, options, fetch = fetch) =>
export default Api;
