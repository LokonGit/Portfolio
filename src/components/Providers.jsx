"use client";

import { JobExperienceDialogContextProvider } from "@/contexts/JobExperienceDialogContext";
import { ProjectsCarouselContextProvider } from "@/contexts/ProjectsCarouselContext";
import { ScrollContextProvider } from "@/contexts/ScrollContext";
import { SettingsContextProvider } from "@/contexts/SettingsContext";

function Providers({ children }) {
  return (
    <SettingsContextProvider>
      <ScrollContextProvider>
        <ProjectsCarouselContextProvider>
          <JobExperienceDialogContextProvider>
            {children}
          </JobExperienceDialogContextProvider>
        </ProjectsCarouselContextProvider>
      </ScrollContextProvider>
    </SettingsContextProvider>
  );
}

export default Providers;
