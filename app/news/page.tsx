import type { Metadata } from "next";
import NewsList from "@/components/NewsList";

export const metadata: Metadata = {
  title: "News",
  description: "Announcements and updates from Aetherix and AgentGuard.",
};

export default function NewsPage() {
  return (
    <main className="flex-1">
      <NewsList />
    </main>
  );
}
