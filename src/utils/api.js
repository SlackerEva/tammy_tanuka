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

  sortCards(order) {
    return fetch(`${this._url}/list?order_by=name_${order}`, {
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
  
  filterFavorite() {
    return fetch(`${this._url}/list?order_by=name_desc&favorite=yes`, {
      headers: this._headers
    })
    .then((res) => {
      return this._getResponseData(res);
    }); 
  }
}

const api = new Api({
  url: "https://178a8fec-714d-49c6-b73c-16e9b461994a.mock.pstmn.io/api/v1",
  headers: {
    authorization: "fb495017-080b-4391-8363-eb09bd7d470d",
    "content-type": "application/json"
  }
}); 

export default api;
