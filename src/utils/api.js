class Api {
  constructor(config) {
    this._url = config.url;
    this._headers = config.headers;
  }

  _getResponseData(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(new Error(`Ошибка: ${res.status}`));
  }

  getInitialCards() {
    return fetch(`${this._url}/list`, {
      headers: this._headers
    })
    .then((res) => {
      return this._getResponseData(res);
    }); 
  }

  getCard(id) {
    return fetch(`${this._url}/object/${id}`, {
      headers: this._headers
    })
    .then((res) => {
      return this._getResponseData(res);
    }); 
  }

  sortCards(order) {
    return fetch(`${this._url}/list?${order}`, {
      headers: this._headers
    })
    .then((res) => {
      return this._getResponseData(res);
    }); 
  }

  changeLikeCardStatus(id, like) {
    let urlCardLike = `${this._url}/favorite/${id}`;
    let path = !like ? `${urlCardLike}/add` : `${urlCardLike}/remove`;
      return fetch(path, {        
        method: "PUT",
        headers: this._headers,
        body: JSON.stringify({
          favorite: like
        })
      })
      .then((res) => {
        return this._getResponseData(res);
      }); 
  }
}

const api = new Api({
  url: "https://f864c3d3-4258-4bcf-9190-36d7e63ab58c.mock.pstmn.io/api/v1",
  headers: {
    authorization: "fb495017-080b-4391-8363-eb09bd7d470d",
    "content-type": "application/json"
  }
}); 

export default api;
