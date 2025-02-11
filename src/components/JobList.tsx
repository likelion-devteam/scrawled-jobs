"use client";

import jobsData from "@/detailed_internships.json";
import { JobCard } from "@/components/JobCard";
import { Job } from "@/types/types";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { useState } from "react";

export default function JobList() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("");

  // Get unique categories
  const categories = Array.from(
    new Set(jobsData.flatMap((job) => job.job.categories))
  ).sort();

  // Filter jobs based on search term and category
  const filteredJobs = jobsData.filter((job) => {
    const matchesSearch =
      searchTerm === "" ||
      job.job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.company_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.location?.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesCategory =
      !selectedCategory ||
      job.job.categories.some((cat) => cat === selectedCategory);

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-zinc-50">
      <div className="container max-w-6xl mx-auto py-8 px-4">
        <div className="flex flex-col gap-6 mb-8">
          <h1 className="text-3xl font-bold">Summer 2025 Tech Internships</h1>

          <div className="flex flex-col gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zinc-400 h-4 w-4" />
              <Input
                placeholder="Search by title, company, or location..."
                className="pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            <div className="flex flex-wrap gap-2">
              <Button
                variant={selectedCategory === "" ? "default" : "outline"}
                onClick={() => setSelectedCategory("")}
                className="rounded-full"
              >
                All Categories
              </Button>
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={
                    selectedCategory === category ? "default" : "outline"
                  }
                  onClick={() => setSelectedCategory(category)}
                  className="rounded-full"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredJobs.map((jobData) => (
            <JobCard key={jobData.metadata.job_id} job={jobData as Job} />
          ))}
        </div>

        {filteredJobs.length === 0 && (
          <div className="text-center py-12">
            <p className="text-zinc-600">
              No jobs found matching your criteria.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
