import { redirect } from "react-router-dom";
export default function FeedsHome() {
  return (
    <section className="bg-blue-600 flex h-[400px] md:h-[500px] w-full flex-col justify-center items-center-safe">
      <div>Hello World</div>
    </section>
  );
}

export async function FeedsLoader() {
  try {
    const req = await fetch(`http://localhost:3000/auth/loggedIn`, {
      method: "get",
      credentials: "include",
    });
    const response = await req.json();
    if (!response.success && !req.ok) {
      return redirect("/login");
    }
    return { user: response.data.user };
  } catch (err) {
    console.log(err);
    return redirect("/login");
  }
}
