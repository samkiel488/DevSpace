import { Form, useRouteLoaderData } from "react-router";
import Tools from "./form/tools";
import Skills from "./form/skills";
import SocialMedia from "./form/socialMedia";
import { toast } from "react-toastify";
export default function SettingsForm() {
  const {
    users: { name, email },
  } = useRouteLoaderData("feeds");

  return (
    <Form method="post">
      <div className="mb-5">
        <label
          htmlFor="name"
          className="mb-3 block text-base font-medium text-[#07074D]"
        >
          Full Name
        </label>
        <input
          type="text"
          name="name"
          id="name"
          value={name}
          placeholder="Full Name"
          className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-black outline-none focus:border-blue-600 focus:shadow-md"
          readOnly
        />
      </div>

      <div className="mb-5">
        <label
          htmlFor="email"
          className="mb-3 block text-base font-medium text-[#07074D]"
        >
          Email Address
        </label>
        <input
          type="email"
          name="email"
          id="email"
          value={email}
          placeholder="Enter your email"
          className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-black outline-none focus:border-blue-600 focus:shadow-md"
          readOnly
        />
      </div>

      <div className="mb-5">
        <label
          htmlFor="category"
          className="mb-3 block text-base font-medium text-[#07074D]"
        >
          Category
        </label>
        <input
          type="text"
          name="category"
          id="category"
          placeholder="Enter your category"
          className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-black outline-none focus:border-blue-600 focus:shadow-md"
          required
        />
      </div>

      <div className="mb-5">
        <label
          htmlFor="bio"
          className="mb-3 block text-base font-medium text-[#07074D]"
        >
          Bio:
        </label>
        <textarea
          name="bio"
          id="bio"
          placeholder="Enter your bio"
          rows={5}
          className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-black outline-none focus:border-blue-600 focus:shadow-md resize-none"
          required
        />
      </div>

      <Skills />

      <Tools />

      <SocialMedia />

      <div>
        <button
          type="submit"
          className="hover:shadow-form w-full rounded-md bg-blue-600 py-3 px-8 text-center text-base font-semibold text-white outline-none"
        >
          Save Changes
        </button>
      </div>
    </Form>
  );
}

export async function SettingsFormAction({ request }) {
  const formData = await request.formData();
  const category = formData.get("category");
  const bio = formData.get("bio");
  const instagram = formData.get("instagram");
  const github = formData.get("github");
  const twitter = formData.get("twitter");
  const linkedin = formData.get("linkedin");
  const portfolio = formData.get("portfolio");
  const skills = formData.getAll("skills[]");
  const tools = formData.getAll("tools[]");

  try {
    const req = await fetch("http://localhost:3000/profile", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({
        role: category,
        bio,
        instagram,
        github,
        twitter,
        linkedin,
        portfolio,
        skills,
        tools,
      }),
    });

    const response = await req.json();
    console.log(response);
    if (!response.status) {
      return toast.error(response.error);
    }
  } catch (err) {
    console.log(err);
  }
}
