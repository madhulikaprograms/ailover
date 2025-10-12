import { SignInView } from "@/modules/auth/ui/views/sign-in-view";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import authConfig from "@/lib/nextauth-config";

export default async function Page() {
  const session = await getServerSession(authConfig);
  if (session?.user) redirect("/chat");
  return <SignInView />;
}
