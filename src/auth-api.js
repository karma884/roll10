class AuthApi {
  constructor(url, request, token) {
    this.request = request;
    this.url = url;
    this.token = token;
  }

  async signUp(formValues) {
    const data = await this.request(`${this.url}users/signup`, {
      method: "POST",
      body: formValues,
    });
    return data;
  }

  withToken(token) {
    return new AuthApi(this.url, this.request, token);
  }
}

export default AuthApi;
