"use client";

export default function Show() {
  return (
    <div>
      <div>title</div>
      {/* <div>
        <iframe src="https://danuh.kr" width={"360"} height={"800"}></iframe>
      </div> */}
      <div>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/2t058OlkLGA?si=gmui02nFqgD7d5aM"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}
