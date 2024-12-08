import type { Route } from "./+types/home";
import { useActionData } from "react-router";
import { Button } from "@form/Button";
import { Email, validateEmail } from "@form/Email";
import { Password, passwordLength } from "@form/Password";
import {
  Form as LoginForm,
  createFormSchema,
  validateFormData,
  createFormResponse,
} from "@form/Form";
import { FormActionData } from "~/devtools/formActionData";
/**
 * Login page component
 * @returns {JSX.Element} Login form with email and password fields
 */

/** Login form validation schema */
const schema = createFormSchema({
  email: validateEmail,
  password: passwordLength,
});

export default function Login(): JSX.Element {
  const actionData = useActionData<typeof action>();
  const passwordHelper = "Enter your password";

  return (
    <LoginForm>
      <Email validator={schema.email} />
      <Password validator={schema.password} helper={passwordHelper} />
      <Button type="submit">Submit</Button>
      <FormActionData data={actionData} title="Action Data Debug" />
    </LoginForm>
  );
}

export const action = async ({ request }: Route.ActionArgs) => {
  const formData = await request.formData();
  const result = validateFormData(formData, schema);

  return createFormResponse(result);
};
