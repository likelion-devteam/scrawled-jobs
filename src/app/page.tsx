import JobList from "@/components/JobList";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Summer 2025 Tech Internships | Scrawled Jobs",
  description:
    "Find and explore tech internship opportunities for Summer 2025. Browse through various companies and positions to kickstart your career.",
  keywords:
    "tech internships, summer 2025, software engineering, technology jobs, student opportunities",
};

export default function Home() {
  return <JobList />;
}
