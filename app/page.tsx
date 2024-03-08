import {
  RedirectToSignIn,
  SignInButton,
  SignOutButton,
  SignedIn,
  SignedOut,
  auth,
} from "@clerk/nextjs";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <SignedIn>
        <h1 className="text-4xl font-bold">Welcome to Clerk!</h1>
        {JSON.stringify(auth(), null, 2)}
        <SignOutButton />
      </SignedIn>
      <SignedOut>
        <h1 className="text-4xl font-bold">Welcome to Clerk!</h1>
        <RedirectToSignIn />
      </SignedOut>
    </main>
  );
}
