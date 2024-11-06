import Details from "@/components/Details";
import { imgMapping } from "@/lib/constants";
import { cn } from "@/lib/utils";

export default function DetailPage({
  params,
}: {
  params: { projectName: string };
}) {
  const projectName = params.projectName;
  const bgImg = imgMapping[projectName] || "bg-blue-200";
  return (
    <main className={cn("flex flex-col min-h-screen overflow-hidden", bgImg)}>
      <Details />
    </main>
  );
}
