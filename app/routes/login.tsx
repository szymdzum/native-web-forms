import type { Route } from "./+types/home";
import { useActionData } from "react-router";
import { Form } from "react-router";
import Button from "~/form/Button";
import Email from "~/form/Email";
import Password from "~/form/Password";
import CenteredLayout from "~/components/CenteredLayout";
import Column from "~/components/Column";

import { passwordLength } from "~/form/validators/password";
import { emailWithDomain } from "~/form/validators/email";

export default function Login({ loaderData }: Route.ComponentProps) {
  const actionData = useActionData<ActionData>();
  console.log("actionData", actionData);

  return (
    <CenteredLayout>
      <Form method="POST">
        <Column>
          <Email validator={emailWithDomain} />
          <Password validator={passwordLength} />
          <Button type="submit">Submit</Button>
        </Column>
      </Form>
    </CenteredLayout>
  );
}

type ActionData = {
  success?: boolean;
  errors?: {
    email?: string;
    password?: string;
  };
  data?: {
    email?: string;
    password?: string;
  };
};

export async function action({ request }: Route.ActionArgs) {
  const formData = await request.formData();

  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  const errors: ActionData["errors"] = {};

  if (password && password.length < 8) {
    console.log("password", password);
    errors.password = "server password error";
  }

  if (Object.keys(errors).length > 0) {
    return {
      status: 400,
      success: false,
      errors,
    };
  }

  return {
    success: true,
    data: {
      email,
      password,
    },
  };
}
