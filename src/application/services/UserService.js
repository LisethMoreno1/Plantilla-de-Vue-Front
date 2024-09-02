export default class UserService {
  async fetchAllUsers() {
    const response = await fetch('https://api.example.com/users');
    if (!response.ok) {
      throw new Error('Failed to fetch users');
    }
    return response.json();
  }

  async fetchUser(userId) {
    const response = await fetch(`https://api.example.com/users/${userId}`);
    if (!response.ok) {
      throw new Error('Failed to fetch user');
    }
    return response.json();
  }
}
