import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [{ title: "use-another-hook-form" }];
}

export default function Index() {
  return (
    <main>
      <h1>useAnotherFormHook</h1>
      <p>
        <em>
          Just another form library. Probably not for production. Thanks Szymon.
        </em>
      </p>
    </main>
  );
}
