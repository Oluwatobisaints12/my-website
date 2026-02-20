import GalleryPoster from "@/app/assests/images/greatMilo.jpg";

export default function Head() {
  return (
    <>
      <link
        rel="preload"
        as="video"
        href="/great-new-gallery-video.mp4"
        type="video/mp4"
      />
      <link
        rel="preload"
        as="image"
        href={GalleryPoster.src}
        fetchPriority="high"
      />
    </>
  );
}
