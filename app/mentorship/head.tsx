import MentorshipPoster from "@/app/assests/images/mentorship-dashboard-image.jpg";

export default function Head() {
  return (
    <>
      <link
        rel="preload"
        as="video"
        href="/great-new-mentor-video.mp4"
        type="video/mp4"
      />
      <link
        rel="preload"
        as="image"
        href={MentorshipPoster.src}
        fetchPriority="high"
      />
    </>
  );
}
