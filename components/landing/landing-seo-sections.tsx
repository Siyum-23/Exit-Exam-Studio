const faqItems = [
  {
    question: "Is this Ethiopian exit exam practice platform free?",
    answer:
      "Yes. Students can browse departments, open past exit exams, and practice without creating an account.",
  },
  {
    question: "Which departments are included?",
    answer:
      "The platform covers a wide range of Ethiopian university departments, including engineering, health, business, language, and science programs.",
  },
  {
    question: "Can I practice by year and exam type?",
    answer:
      "Yes. Each department page groups available exit exams by year and identifies model variants when they exist.",
  },
  {
    question: "Does the site work for revision and mock testing?",
    answer:
      "Yes. Students can use practice mode for immediate feedback or test mode for a more exam-like session.",
  },
];

export function getLandingFaqSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}


