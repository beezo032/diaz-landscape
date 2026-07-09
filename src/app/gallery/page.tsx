import { Metadata } from "next";
import GalleryClientWrapper from "@/components/GalleryClientWrapper";

export const metadata: Metadata = {
  title: "Our Work Portfolio | Before & After | Diaz Landscape",
  description: "See the difference. View our local landscaping projects, before-and-after transformations, and cleanups in Charleston and Ladson, SC.",
};

export default function GalleryPage() {
  return <GalleryClientWrapper />;
}
