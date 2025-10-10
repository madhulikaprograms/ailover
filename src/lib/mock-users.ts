export type MockUser = {
  id: string;
  name: string;
  email: string;
  password: string;
};

const users: MockUser[] = [
  { id: "1", name: "Demo User", email: "demo@ailover.app", password: "password" },
];

export const mockUsers = {
  findByEmail(email: string): MockUser | undefined {
    return users.find((u) => u.email.toLowerCase() === email.toLowerCase());
  },
  addUser(name: string, email: string, password: string): MockUser {
    const existing = this.findByEmail(email);
    if (existing) return existing;
    const user: MockUser = { id: String(users.length + 1), name, email, password };
    users.push(user);
    return user;
  },
};


