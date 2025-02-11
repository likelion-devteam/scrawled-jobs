import { notFound } from "next/navigation";
import Link from "next/link";
import jobsData from "@/detailed_internships.json";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Building2,
  MapPin,
  Calendar,
  Globe,
  Twitter,
  Linkedin,
} from "lucide-react";

export default function JobPage({ params }: { params: { id: string } }) {
  const job = jobsData.find((j) => j.metadata.job_id === params.id);

  if (!job) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-zinc-50">
      <div className="container max-w-6xl mx-auto py-8 px-4">
        <Link href="/">
          <Button
            variant="ghost"
            className="mb-6 text-zinc-600 hover:text-zinc-900"
          >
            ← Back to Jobs
          </Button>
        </Link>

        <div className="grid lg:grid-cols-[1fr,380px] gap-8">
          <div className="space-y-8">
            <Card className="border-0 shadow-lg">
              <CardHeader className="border-b bg-white">
                <div className="flex items-start gap-4 mb-6">
                  <div className="h-16 w-16 rounded-xl bg-zinc-100 flex items-center justify-center flex-shrink-0">
                    <Building2 className="w-8 h-8 text-zinc-600" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl font-bold mb-2">
                      {job.job.title}
                    </CardTitle>
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-zinc-600">
                      <span className="font-medium">{job.company_name}</span>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        <span>{job.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>Posted {job.date_posted}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {job.job.categories.map((category) => (
                    <span
                      key={category}
                      className="px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-sm font-medium"
                    >
                      {category}
                    </span>
                  ))}
                </div>
              </CardHeader>

              <CardContent className="prose max-w-none pt-8">
                <section className="mb-8">
                  <h2 className="text-xl font-semibold mb-4">
                    About the Company
                  </h2>
                  <p className="text-zinc-600 leading-relaxed">
                    {job.company.description}
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-xl font-semibold mb-4">Requirements</h2>
                  <ul className="list-disc pl-6 space-y-3">
                    {job.job.requirements.map((req, index) => (
                      <li key={index} className="text-zinc-600">
                        {req}
                      </li>
                    ))}
                  </ul>
                </section>

                <section className="mb-8">
                  <h2 className="text-xl font-semibold mb-4">
                    Responsibilities
                  </h2>
                  <ul className="list-disc pl-6 space-y-3">
                    {job.job.responsibilities?.map((resp, index) => (
                      <li key={index} className="text-zinc-600">
                        {resp}
                      </li>
                    ))}
                  </ul>
                </section>

                {job.job["desired qualifications"] && (
                  <section className="mb-8">
                    <h2 className="text-xl font-semibold mb-4">
                      Desired Qualifications
                    </h2>
                    <ul className="list-disc pl-6 space-y-3">
                      {job.job["desired qualifications"].map((qual, index) => (
                        <li key={index} className="text-zinc-600">
                          {qual}
                        </li>
                      ))}
                    </ul>
                  </section>
                )}
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-4">Job Details</h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="text-sm font-medium text-zinc-500 mb-2">
                      Employment Type
                    </h4>
                    <p className="text-zinc-900">
                      {job.job.employment_details.type || "Full-time"}
                    </p>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-zinc-500 mb-2">
                      Location
                    </h4>
                    <p className="text-zinc-900">{job.location}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-zinc-500 mb-2">
                      Benefits
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {job.job.benefits.map((benefit, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 rounded-full bg-green-50 text-green-600 text-sm"
                        >
                          {benefit}
                        </span>
                      ))}
                    </div>
                  </div>
                  <Button
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                    asChild
                  >
                    <Link href={job.metadata.url} target="_blank">
                      Apply Now
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-4">
                  Connect with {job.company_name}
                </h3>
                <div className="flex gap-3">
                  <a
                    href={job.company.social_links.website}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      variant="outline"
                      size="icon"
                      className="hover:bg-zinc-50"
                    >
                      <Globe className="w-4 h-4" />
                    </Button>
                  </a>
                  {job.company.social_links.twitter && (
                    <a
                      href={job.company.social_links.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button
                        variant="outline"
                        size="icon"
                        className="hover:bg-zinc-50"
                      >
                        <Twitter className="w-4 h-4" />
                      </Button>
                    </a>
                  )}
                  <a
                    href={job.company.social_links.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      variant="outline"
                      size="icon"
                      className="hover:bg-zinc-50"
                    >
                      <Linkedin className="w-4 h-4" />
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
