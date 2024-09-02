import axios from 'axios';

export default {
  async fetchUserById(id) {
    const response = await axios.get(`/api/users/${id}`);
    return response.data;
  }
}
