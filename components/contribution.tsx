"use client";
import { useEffect, useState } from "react";
import {
  ContributionGraph,
  ContributionGraphBlock,
  ContributionGraphCalendar,
  ContributionGraphFooter,
} from "./ui/ContributionGraph";
import { cn } from "@/lib/utils";

export const Contribution = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function load() {
      const res = await fetch("/api/github/contributions");
      const { contributions } = await res.json();

      const maxLevel = 4;
      const maxCount = Math.max(...contributions.map((c: any) => c.count));

      const normalized = contributions.map((d: any) => ({
        ...d,
        level: Math.ceil((d.count / maxCount) * maxLevel),
      }));

      setData(normalized);
    }

    load();
  }, []);

  return (
    <ContributionGraph
      data={data}
      className="my-10 w-fit sm:mx-auto md:max-w-3xl"
    >
      <h1 className="mb-2 text-lg font-semibold">Github Contributions</h1>

      <ContributionGraphCalendar>
        {({ activity, dayIndex, weekIndex }) => (
          <ContributionGraphBlock
            className={cn(
              'data-[level="0"]:fill-[#ebedf0] dark:data-[level="0"]:fill-[#161b22]',
              'data-[level="1"]:fill-[#9be9a8] dark:data-[level="1"]:fill-[#0e4429]',
              'data-[level="2"]:fill-[#40c463] dark:data-[level="2"]:fill-[#006d32]',
              'data-[level="3"]:fill-[#30a14e] dark:data-[level="3"]:fill-[#26a641]',
              'data-[level="4"]:fill-[#216e39] dark:data-[level="4"]:fill-[#39d353]'
            )}
            activity={activity}
            dayIndex={dayIndex}
            weekIndex={weekIndex}
          />
        )}
      </ContributionGraphCalendar>

      <ContributionGraphFooter />
    </ContributionGraph>
  );
};
