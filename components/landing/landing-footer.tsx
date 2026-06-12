export function LandingFooter() {
  return (
    <footer className=" bg-transparent">
      <div className="mx-auto ">
        <a
          href="https://jami.bio/abuki/tip"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[15px] text-black/50 hover:text-brand-primary absolute bottom-2 left-1/2 -translate-x-1/2 dark:text-white/35 dark:hover:text-brand-primary"
        >
          Keep us online
        </a>
        <a
          href="https://t.me/abukidev0"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[15px] text-black/50 hover:text-brand-primary absolute bottom-2 right-4 dark:text-white/35 dark:hover:text-brand-primary"
        >
          Made by Abuki
        </a>
      </div>
    </footer>
  );
}
