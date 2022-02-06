class AuthApi {
  constructor(request, url, token) {
    this.request = request
    this.url = url
    this.token = token
  }

  async signUp(formValues) {
    const data = await this.request(`${this.url}users`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formValues),
    });
    return data
  }
}