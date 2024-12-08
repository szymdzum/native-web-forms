import type { Route } from "./+types/home";
import { useActionData, Form } from "react-router";

import { Button } from "@form/Button";
import { Email, validateEmail } from "@form/Email";

import { Password, passwordLength } from "@form/Password";

import { Centered, Column } from "@components/Layout";
import {
  createFormSchema,
  validateFormData,
  createFormResponse,
} from "@form/Form";

import { FormActionData } from "~/devtools/formActionData";

/** Login form validation schema */
const schema = createFormSchema({
  email: validateEmail,
  password: passwordLength,
});

/**
 * Login page component
 * @returns {JSX.Element} Login form with email and password fields
 */
export default function Login(): JSX.Element {
  const actionData = useActionData<typeof action>();

  return (
    <Centered>
      <Form method="POST" noValidate>
        <Column>
          <Email id="email" validator={schema.email} />
          <Password id="password" validator={schema.password} />
          <Button type="submit">Submit</Button>
        </Column>
      </Form>
      <FormActionData data={actionData} title="Action Data Debug" />
    </Centered>
  );
}

export const action = async ({ request }: Route.ActionArgs) => {
  const formData = await request.formData();
  const result = validateFormData(formData, schema);

  return createFormResponse(result);
};
