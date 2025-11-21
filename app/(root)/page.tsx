import { Contribution } from "@/components/contribution";
import { SiteAboutSection } from "@/components/site-about";
import { SiteBio } from "@/components/site-bio";
import { SiteExperience } from "@/components/site-experience";
import { SiteProjects } from "@/components/site-projects";

export default function LandingPage() {
  return (
    <main className="mx-3 mt-26 space-y-10">
      <SiteBio />
      <SiteExperience />
      <SiteProjects />
      <SiteAboutSection />
      <Contribution />
      <div className="mx-auto max-w-3xl">under building......</div>
    </main>
  );
}
