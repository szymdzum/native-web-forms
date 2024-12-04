import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";
import { useActionData } from "react-router";
import { Form } from "react-router";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

// Define action type
type ActionData = {
  success?: boolean;
  errors?: {
    email?: string;
    password?: string;
  };
};

export async function action({ request }: Route.ActionArgs) {
  // Native FormData API
  const formData = await request.formData();

  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  const errors: ActionData["errors"] = {};

    if (email === "dupa@dupa.wtf") {
      errors.email = "User already exists";
    }

    // Basic password validation
    if (password && password.length < 8) {
      errors.password = "Password must be at least 8 characters long";
    }

  if (Object.keys(errors).length > 0) {
    return { errors };
  }

  return { success: true };
}

export default function Home({ loaderData }: Route.ComponentProps) {
  const actionData = useActionData<ActionData>();

  return (
    <main className="min-h-screen grid place-items-center">
      <section className="w-full max-w-md p-8">
        <Form method="post" className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <label htmlFor="email">Email:</label>
            <input
              id="email"
              name="email"
              type="email"
              required
              aria-describedby="email-error"
            />
            {actionData?.errors?.email && (
              <p id="email-error" role="alert">
                {actionData.errors.email}
              </p>
            )}
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="password">Password:</label>
            <input
              id="password"
              name="password"
              type="password"
              required
              minLength={8}
              aria-describedby="password-error"
            />
            {actionData?.errors?.password && (
              <p id="password-error" role="alert">
                {actionData.errors.password}
              </p>
            )}
          </div>

          <button
            className="bg-blue-500 text-white p-2 rounded-md"
            type="submit"
          >
            Submit
          </button>
        </Form>

        {actionData?.success && (
          <p role="alert">Form submitted successfully!</p>
        )}
      </section>
    </main>
  );
}
