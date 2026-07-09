import { Metadata } from "next";
import AboutAndReview from "@/components/AboutAndReview";

export const metadata: Metadata = {
  title: "About Diaz Landscape | Ladson SC | Local Lawn Care",
  description: "Meet the team at Diaz Landscape Lawn Care LLC. A locally owned Ladson operation committed to reliability, communication, and high-quality results.",
};

export default function AboutPage() {
  return (
    <div className="flex-1 flex flex-col pt-28 md:pt-32">
      <AboutAndReview />
    </div>
  );
}
