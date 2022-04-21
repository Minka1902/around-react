class Api {
  constructor(auth, rootUrl) {
    this._authToken = auth;
    this._rootUrl = rootUrl;
  }

  _fetch = ({ url, method, data }) =>
    fetch(`${this._rootUrl}${url}`, {
      method,
      headers: {
        authorization: this._authToken,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }).then(this._handleResponse);

  _handleResponse = (res) => (res.ok ? res.json() : Promise.reject(`Error: ${res.status}`));

  _handleError = (err) => Promise.reject(err);

  init = () => Promise.all([this._getInitialCards(), this._getUserInfo()]);

  _getInitialCards = () => this._fetch({ url: 'cards' });

  _getUserInfo = () => this._fetch({ url: 'users/me' });

  updateUserInfo = ({ name, about }) => this._fetch({ url: 'users/me', method: 'PATCH', data: { name, about } });

  updateUserImage = (avatar) => this._fetch({ url: 'users/me/avatar', method: 'PATCH', data: { avatar } });

  submitNewCard = ({ name, link }) => this._fetch({ url: 'cards', method: 'POST', data: { name, link } });

  deleteCard = (cardId) => this._fetch({ url: `cards/${cardId}`, method: 'DELETE' });

  handleLikeCardStatus = (cardId, isLiked) => {
    return this._fetch({ url: `cards/likes/${cardId}`, method: isLiked ? 'DELETE' : 'PUT' });
  };
}

const api = new Api('614bb6fa-36a6-4d24-9b95-72bf17bccf61', 'https://around.nomoreparties.co/v1/group-12/');
export default api;
