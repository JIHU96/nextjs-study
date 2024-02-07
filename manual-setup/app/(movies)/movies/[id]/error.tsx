"use client"; // Error components must be Client Components

export default function MoviePageError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div>
      <h2>영화페이지 고장!</h2>
    </div>
  );
}
