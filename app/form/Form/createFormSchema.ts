import { Validator } from "~/form/types";

export function createFormSchema<T extends string>(
  schema: Record<T, Validator>
) {
  return schema;
}
