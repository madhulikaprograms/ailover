// Simple mock session helper for demo
export type DemoUser = { id: string; name: string; email: string };

const STORAGE_KEY = "demo_user";

export const session = {
  getUser(): DemoUser | null {
    if (typeof window === "undefined") return null;
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      return raw ? (JSON.parse(raw) as DemoUser) : null;
    } catch {
      return null;
    }
  },
  setUser(user: DemoUser) {
    if (typeof window === "undefined") return;
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(user));
  },
  clear() {
    if (typeof window === "undefined") return;
    window.localStorage.removeItem(STORAGE_KEY);
  },
  isLoggedIn(): boolean {
    return !!this.getUser();
  },
};

export const authClient = {
  async signIn(email: string, password: string) {
    const res = await fetch("/api/auth/signin", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });
    if (!res.ok) {
      const data = await res.json().catch(() => ({}));
      throw new Error(data.error || "Sign in failed");
    }
    const data = (await res.json()) as { success: boolean; user: DemoUser };
    session.setUser(data.user);
    return data.user;
  },
  async signUp(name: string, email: string, password: string) {
    const res = await fetch("/api/auth/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, password }),
    });
    if (!res.ok) {
      const data = await res.json().catch(() => ({}));
      throw new Error(data.error || "Sign up failed");
    }
    const data = (await res.json()) as { success: boolean; user: DemoUser };
    session.setUser(data.user);
    return data.user;
  },
  signOut() {
    session.clear();
  },
};