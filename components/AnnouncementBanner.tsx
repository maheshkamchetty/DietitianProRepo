export default function AnnouncementBanner() {
    return (
      <div className="bg-emerald-800 text-white px-4 py-2 text-center text-sm font-medium">
        <span className="md:hidden">Only 20 Founding Client spots open. </span>
        <span className="hidden md:inline">Currently accepting applications for our Beta Cohort. Only 20 Founding Client spots available. </span>
        <a href="/#calculator" className="underline hover:text-emerald-200 transition-colors ml-1">
          Apply Now &rarr;
        </a>
      </div>
    );
  }