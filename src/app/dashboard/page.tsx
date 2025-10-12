"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { session } from "@/lib/auth-client";
import { Card, CardContent } from "@/components/ui/card";

export default function DashboardPage() {
  const router = useRouter();

  useEffect(() => {
    if (!session.isLoggedIn()) {
      router.replace("/sign-in");
    }
  }, [router]);

  return (
    <div className="flex min-h-[60vh] items-center justify-center">
      <Card className="w-full max-w-2xl">
        <CardContent className="p-8">
          <h1 className="text-2xl font-semibold">Dashboard</h1>
          <p className="text-muted-foreground mt-2">
            Welcome to your dashboard. This is a placeholder for analytics and settings.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}


