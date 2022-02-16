const request = async (url, fetch, options = {}) => {
  try {
    const response = await fetch(url, {
      ...options,
      headers: { ...options.headers, "Content-Type": "application/json" },
      body: JSON.stringify(options.body),
    });
    const data = await response.json();
    return data;
  } catch (err) {
    return { error: err };
  }
};

export default request;
