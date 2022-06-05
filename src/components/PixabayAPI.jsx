import axios from 'axios';
export default class pixabayAPI {
  constructor() {
    this.api_key = '26616262-e3ed137e235993ae715569a6b';
    this._searchQuery = '';
    this._page = 1;
  }
  get searchQuery() {
    return this._searchQuery;
  }
  set searchQuery(value) {
    return (this._searchQuery = value);
  }
  get page() {
    return this._page;
  }
  set page(value) {
    return (this._page += value);
  }
  resetPage() {
    return (this._page = 1);
  }

  async search() {
    let url = `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${this.searchQuery}&page=${this._page}&per_page=12&key=${this.api_key}
`;

    try {
      const result = await axios.get(url);
      const data = result.data;
      return data;
    } catch (err) {
      return err.message;
    }
  }
}