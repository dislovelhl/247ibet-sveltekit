export interface FaqItem {
  question: string;
  answer: string;
}

export const casinoFaqs: Record<string, FaqItem[]> = {
  'best-online-casinos-canada': [
    {
      question: 'Are online casinos legal in Canada?',
      answer: "Yes — with nuance. Canada's Criminal Code permits provincially regulated gambling. Ontario operates a regulated iGaming market overseen by the AGCO. Other provinces allow residents to play at offshore sites (legal for the player, not provincially licensed). Always check your province's current status. See our full guide: /legal-online-gambling-canada.",
    },
    {
      question: 'Which online casinos accept Interac in Canada?',
      answer: 'Many Ontario-facing casinos support e-Transfer deposits and withdrawals, but cashier support should still be verified before funding an account. See our dedicated payments page for the full list.',
    },
    {
      question: 'How fast are casino withdrawals in Canada?',
      answer: 'Interac e-Transfer is usually one of the fastest practical withdrawal methods at Ontario-facing casinos, often landing within 1 to 24 hours after KYC is complete. Bank transfers usually take longer, and payout speed always depends on internal approval and bank-side completion.',
    },
    {
      question: 'What is the minimum gambling age in Canada?',
      answer: 'The legal gambling age is 19 in most provinces (Ontario, BC, MB, SK, NS, NB, PEI, NL, YT, NT, NU) and 18 in Alberta and Quebec. All licensed operators must verify age before allowing play.',
    },
  ]
};
