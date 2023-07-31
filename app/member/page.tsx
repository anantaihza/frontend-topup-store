import OverviewContent from "@/components/organisms/OverviewContent";
import Sidebar from "@/components/organisms/Sidebar";

export default function Overview() {
  return (
    <section className="overview overflow-auto">
        <Sidebar menuActive="overview" />
        <OverviewContent />
    </section>
  )
}
