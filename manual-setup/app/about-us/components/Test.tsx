"use client";

export default function Test() {
  return (
    <div>
      <button
        onClick={() => {
          console.log("clicked");
        }}
      >
        버튼
      </button>
    </div>
  );
}
