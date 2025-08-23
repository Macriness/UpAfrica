"use client";

export default function ErrorPage({ error, reset }: { error: Error; reset: () => void }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h2>Une erreur est survenue ❌</h2>
      <p>{error.message}</p>
      <button onClick={reset}>Réessayer</button>
    </div>
  );
}
