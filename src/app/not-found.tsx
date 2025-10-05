import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardContent className="flex flex-col items-center gap-6 p-8 text-center">
          <div className="text-6xl font-bold text-muted-foreground">404</div>
          <div className="space-y-2">
            <h1 className="text-2xl font-semibold">Page Not Found</h1>
            <p className="text-muted-foreground">
              The page you&apos;re looking for doesn&apos;t exist or has been moved.
            </p>
          </div>
          <Button asChild>
            <Link href="/">Go Home</Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
