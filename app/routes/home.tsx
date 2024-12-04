import type { Route } from "./+types/home";
import { data, useActionData } from "react-router";
import { Form } from "react-router";
import Button from "~/form/Button";
import Email from "~/form/Email";
import Password from "~/form/Password";
import CenteredLayout from "~/components/CenteredLayout";
import Column from "~/components/Column";

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

  if (!email.includes("@")) {
    errors.email = "Invalid email address";
  }

  // Basic password validation
  if (password && password.length < 8) {
    console.log("password", password);
    errors.password = "Password must be at least 8 characters long";
  }


  if (Object.keys(errors).length > 0) {
    console.log("errors", errors);
    return data({ errors }, { status: 400 });
  }


  return { success: true };
}

export default function Home({ loaderData }: Route.ComponentProps) {
  const actionData = useActionData<ActionData>();

  return (
    <CenteredLayout>
      <Form method="POST">
        <Column>
          <Email />
          <Password />
          <Button type="submit">Submit</Button>
        </Column>
      </Form>
    </CenteredLayout>
  );
}
