import { SiteBio } from "@/components/site-bio";
import { SiteExperience } from "@/components/site-experience";
import { SiteProjects } from "@/components/site-projects";

export default function LandingPage() {
  return (
    <main className="mx-3 space-y-3">
      <SiteBio />
      <SiteExperience />
      <SiteProjects />
    </main>
  );
}
