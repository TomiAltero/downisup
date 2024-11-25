import { SignUp } from "@/components/UserForms/sign-up";
export default function Page() {
  return (
    <main className="flex justify-center items-center h-screen">
      <section className="flex justify-center items-center h-full">
        <SignUp />
      </section>
    </main>
  );
}
