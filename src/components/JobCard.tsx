import Link from "next/link";
import { Job } from "@/types/types";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Building2, MapPin, Calendar } from "lucide-react";
import { Badge } from "./ui/badge";

interface JobCardProps {
  job: Job;
}

export function JobCard({ job }: JobCardProps) {
  return (
    <Card className="flex flex-col h-full">
      <CardHeader className="flex-1">
        <div className="space-y-4">
          <CardTitle className="text-xl font-bold">{job.job.title}</CardTitle>

          <div className="space-y-2 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Building2 className="w-4 h-4" />
              <span>{job.company_name}</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>{job.location}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>{job.date_posted}</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            {job.job.categories.map((category) => (
              <Badge key={category} variant="secondary">
                {category}
              </Badge>
            ))}
          </div>
        </div>
      </CardHeader>

      <CardContent className="pt-0">
        <Link
          href={`/job/${job.metadata.job_id}`}
          className="block w-full bg-zinc-900 text-white hover:bg-zinc-800 px-4 py-2 rounded-md text-center text-sm font-medium transition-colors"
        >
          View Details
        </Link>
      </CardContent>
    </Card>
  );
}
