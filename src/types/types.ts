export interface Job {
  metadata: {
    url: string;
    scraped_at: string;
    source: string;
    job_id: string;
    last_updated: string;
    completeness_score: number;
  };
  job: {
    title: string;
    employment_details: {
      type: string | null;
      placement: string | null;
      duration: string | null;
    };
    posted_date: string;
    categories: string[];
    requirements: string[];
    responsibilities: string[];
    desired_qualifications?: string[];
    benefits: string[];
    location: {
      city: string;
      country: string | null;
      details: string | null;
    };
  };
  company: {
    name: string;
    size: string;
    description: string;
    total_funding: string;
    headquarters: string;
    founded: string;
    social_links: {
      website: string;
      twitter?: string;
      linkedin: string;
    };
    reviews: {
      strengths: string[];
      challenges: string[];
      unique_features: string[];
    };
  };
  company_name: string;
  role: string;
  location: string;
  date_posted: string;
}
