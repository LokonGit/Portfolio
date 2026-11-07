"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

function JobExperienceItemDialog({ isOpen, setIsOpen, jobExperienceData }) {
  if (!jobExperienceData) return null;
  const {
    logoImgSrc,
    countryEmoji,
    Occupation,
    Description,
    Location,
    company,
    Period,
    SkillsNeeded,
    Responsibilities,
  } = jobExperienceData;

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="max-h-[90dvh] grid-rows-[1fr_auto] overflow-hidden">
        <div className="overflow-y-auto pr-1 -mr-1">
          <DialogHeader>
            <div className="flex gap-4 items-center text-left">
              {/* Logo */}
              <div className="size-20 shrink-0 rounded-md bg-foreground/5 p-2 grid place-items-center">
                <img
                  src={logoImgSrc}
                  alt=""
                  className="max-h-full max-w-full object-contain"
                />
              </div>

              <div className="flex-grow min-w-0">
                {/* Occupation */}
                <DialogTitle className="text-2xl font-bold leading-tight">
                  <Occupation />
                </DialogTitle>

                <p className="text-sm text-muted-foreground flex items-center justify-between gap-x-4 flex-wrap pt-1">
                  {/* Company */}
                  <span className="font-medium text-foreground/90">
                    {company}
                  </span>

                  {/* Period */}
                  <span>
                    <Period />
                  </span>
                </p>

                {/* Location */}
                <p className="text-sm text-muted-foreground">
                  <Location />{" "}
                  <span className="font-emoji" aria-hidden>
                    {countryEmoji}
                  </span>
                </p>
              </div>
            </div>

            {/* Description */}
            <DialogDescription className="text-base text-foreground pt-3 text-left">
              <Description />
            </DialogDescription>
          </DialogHeader>

          <div className="text-sm text-muted-foreground">
            {/* Responsibilities */}
            <div className="py-3">
              <h3 className="font-medium text-foreground pb-1">What I did</h3>
              <ul className="list-disc list-inside space-y-0.5">
                <Responsibilities />
              </ul>
            </div>

            {/* Skills needed */}
            <div className="pt-1">
              <h3 className="font-medium text-foreground pb-1">
                Skills and tools
              </h3>
              <ul className="list-disc list-inside space-y-0.5">
                <SkillsNeeded />
              </ul>
            </div>
          </div>
        </div>

        <DialogFooter className="flex items-center sm:justify-end">
          <DialogClose asChild>
            <Button size="sm">Close</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default JobExperienceItemDialog;
