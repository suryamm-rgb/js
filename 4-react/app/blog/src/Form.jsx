import { useActionState } from "react";

async function login(prevState, formData) {
  const email = formData.get("email");
  const password = formData.get("password");

  if (!email || !password) {
    return { status: "error", message: "Email and password required" };
  }

  if (password !== "1234") {
    return { status: "error", message: "Incorrect password" };
  }

  return { status: "success", message: "Login successful ✅" };
}

export default function LoginForm() {
  const [state, formAction, isPending] = useActionState(login, null);

  return (
    <form action={formAction}>
      <input name="email" placeholder="Email" />
      <input name="password" placeholder="Password" />

      <button type="submit" disabled={isPending}>
        {isPending ? "Logging in..." : "Login"}
      </button>

      {state?.message && (
        <p style={{ color: state.status === "error" ? "red" : "green" }}>
          {state.message}
        </p>
      )}
    </form>
  );
}
