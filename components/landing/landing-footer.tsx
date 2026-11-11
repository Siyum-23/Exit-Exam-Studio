export function LandingFooter() {
  return (
    <footer className="border-t border-black/10 bg-white/50">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-5 py-5 text-sm text-black/60 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <p>
          Optional tips under 20 Birr via Telebirr: <span className="font-semibold text-brand-primaryDark">+251914831504</span>
        </p>
        <a
          href="https://github.com/Siyum-23/Exit-Exam-Studio"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-brand-primary"
        >
          Made by Siyum
        </a>
      </div>
    </footer>
  );
}
