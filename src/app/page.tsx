"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth-client";

export default function Page() {
  const { data: session } = authClient.useSession();

  const [email, setEmail] = useState("");
  const [name, setName] = useState(""); // only for signup
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState(true);

  const onSubmit = () => {
    if (isLogin) {
      // LOGIN
      authClient.signIn.email(
        { email, password },
        {
          onError: () => window.alert("Login failed, please check credentials"),
          onSuccess: () => window.alert("Login successful"),
        }
      );
    } else {
      // SIGNUP
      authClient.signUp.email(
        { email, name, password },
        {
          onError: () => window.alert("Signup failed"),
          onSuccess: () => window.alert("Account created successfully"),
        }
      );
    }
  };

  if (session) {
    return (
      <div className="flex flex-col p-4 gap-y-4">
        <p>Logged in as {session.user.name}</p>
        <Button onClick={() => authClient.signOut()}>Sign out</Button>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-y-10">
      <div className="p-4 flex flex-col gap-y-4">
        {!isLogin && (
          <Input
            placeholder="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        )}
        <Input
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          placeholder="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button onClick={onSubmit}>{isLogin ? "Login" : "Sign Up"}</Button>
        <Button
          variant="outline"
          onClick={() => setIsLogin((prev) => !prev)}
        >
          {isLogin ? "Need an account? Sign up" : "Already have an account? Login"}
        </Button>
      </div>
    </div>
  );
}


