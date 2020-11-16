import axios from 'axios';

class Request {
  constructor(url) {
    this.url = `https://api.github.com/orgs/${url}`;
    this.method = 'GET';
    this.headers = { accept: 'application/vnd.github.v3+json' }
  }

  async send() {
    const response = await axios(this);
    return this.validate(response);
  }

  validate(response) {
    if (response.status >= 400) {
      throw new Error(response.message);
    } else {
      return response.data;
    }
  }
}

export const fetchCompanyRepos = async company => {
  const request = new Request(`${company}/repos`)
  const data = await request.send();
  
  return data;
};

export const fetchCompanyInfo = async company => {
  const request = new Request(`${company}`)
  const data = await request.send();

  return data;
};