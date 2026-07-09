import { Metadata } from "next";
import Services from "@/components/Services";

export const metadata: Metadata = {
  title: "Lawn Care & Landscaping Services | Ladson SC | Diaz Landscape",
  description: "Professional lawn mowing, hedge trimming, and seasonal cleanups in Ladson and Charleston, SC. Reliable and detailed services for local homeowners.",
};

export default function ServicesPage() {
  return (
    <div className="w-full min-h-screen flex flex-col pt-28 md:pt-32">
      <Services />
    </div>
  );
}
