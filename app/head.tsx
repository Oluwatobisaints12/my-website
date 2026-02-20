import DashboardImage from "@/app/assests/images/dashboard-image.png";

export default function Head() {
  return (
    <>
      <link
        rel="preload"
        as="image"
        href={DashboardImage.src}
        fetchPriority="high"
      />
    </>
  );
}
