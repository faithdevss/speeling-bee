const worlds = {
  easy: [
    {
      english: "jeans",
      banglish: "জিন্স",
    },
    {
      english: "artery",
      banglish: "আরতেরি",
    },
    {
      english: "Weird",
      banglish: "উইয়ার্ড",
    },
    {
      english: "Yield",
      banglish: "ইয়িল্ড",
    },
    {
      english: "Siege",
      banglish: "সিজ",
    },
    {
      english: "piece",
      banglish: "পিস",
    },
    {
      english: "until",
      banglish: "আনটিল",
    },
    {
      english: "yacht",
      banglish: "ইয়ট",
    },
  ],
  medium: [
    {
      english: "Allege",
      banglish: "অ্যালেজ",
    },
    {
      english: "Amateur",
      banglish: "অ্যামেচার",
    },
    {
      english: "leather",
      banglish: "লেদার",
    },
    {
      english: "Anxiety",
      banglish: "অ্যাংজাইটি",
    },
    {
      english: "Awkward",
      banglish: "ওক্বর্ড",
    },
    {
      english: "Bureau",
      banglish: "ব্যুরো",
    },
    {
      english: "Deceive",
      banglish: "ডিসিভ",
    },
    {
      english: "Forfeit",
      banglish: "ফরফিট",
    },
    {
      english: "breathe",
      banglish: "ব্রেথ",
    },
    {
      english: "License",
      banglish: "লাইসেন্স",
    },
    {
      english: "Museum",
      banglish: "মিউজিয়াম",
    },
    {
      english: "Precede",
      banglish: "প্রিসিড",
    },
    {
      english: "Tyranny",
      banglish: "টিরানি",
    },
    {
      english: "Vacuum",
      banglish: "ভ্যাকিউম",
    },
    {
      english: "Villain",
      banglish: "ভিলেন",
    },
    {
      english: "dilemma",
      banglish: "ডিলেমা",
    },
    {
      english: "garage",
      banglish: "গ্যারাজ",
    },
    {
      english: "harass",
      banglish: "হ্যারাস",
    },
    {
      english: "liaison",
      banglish: "লিয়াজঁ",
    },
    {
      english: "tyranny",
      banglish: "টিরানি",
    },
    {
      english: "Vacuum",
      banglish: "ভ্যাকিউম",
    },
    {
      english: "Zealous",
      banglish: "জিলাস",
    },
    {
      english: "absence",
      banglish: "অ্যাবসেন্স",
    },
    {
      english: "condemn",
      banglish: "কনডেম",
    },
    {
      english: "despair",
      banglish: "ডিস্পেয়ার",
    },
    {
      english: "eighth",
      banglish: "এইথ",
    },
    {
      english: "jealous",
      banglish: "জেলাস",
    },
    {
      english: "muscle",
      banglish: "মাসল",
    },
    {
      english: "quizzes",
      banglish: "কুইজেস",
    },
    {
      english: "conceive",
      banglish: "কন্সিভ",
    },
    {
      english: "scenery",
      banglish: "সিনারি",
    },
    {
      english: "whether",
      banglish: "হোয়েদার",
    },
  ],
  hard: [
    {
      english: "Apparent",
      banglish: "অ্যাপারেন্ট",
    },
    {
      english: "Appearance",
      banglish: "অ্যাপিয়ারেন্স",
    },
    {
      english: "Appreciate",
      banglish: "অ্যাপ্রিশিয়েট",
    },
    {
      english: "Premiere",
      banglish: "প্রেমিয়ার",
    },
    {
      english: "Cemetery",
      banglish: "সেমেট্রি",
    },
    {
      english: "Circumstance",
      banglish: "সার্কামস্ট্যান্স",
    },
    {
      english: "Colleague",
      banglish: "কলিগ",
    },
    {
      english: "Committee",
      banglish: "কমিটি",
    },
    {
      english: "Comparative",
      banglish: "কম্পারেটিভ",
    },
    {
      english: "Controversy",
      banglish: "কন্ট্রোভার্সি",
    },
    {
      english: "Convenience",
      banglish: "কনভেনিয়েন্স",
    },
    {
      english: "Courageous",
      banglish: "কারেজাস",
    },
    {
      english: "Criticism",
      banglish: "ক্রিটিসিজম",
    },
    {
      english: "Desperate",
      banglish: "ডেসপারেট",
    },
    {
      english: "Disappear",
      banglish: "ডিজঅ্যাপিয়ার",
    },
    {
      english: "Eligible",
      banglish: "ইলিজিবল",
    },
    {
      english: "Emphasize",
      banglish: "এমফ্যাসাইজ",
    },
    {
      english: "Encouragement",
      banglish: "এনকারেজমেন্ট",
    },
    {
      english: "Endeavor",
      banglish: "এনডেভর",
    },
    {
      english: "Enthusiasm",
      banglish: "এনথুজিয়াজম",
    },
    {
      english: "Exaggerate",
      banglish: "এক্স্যাজারেট",
    },
    {
      english: "Existence",
      banglish: "এক্সিস্টেন্স",
    },
    {
      english: "Fascinating",
      banglish: "ফ্যাসিনেটিং",
    },
    {
      english: "warranty",
      banglish: "ওয়ারেন্টই",
    },
    {
      english: "Guarantee",
      banglish: "গ্যারান্টি",
    },
    {
      english: "Hierarchy",
      banglish: "হায়ারার্কি",
    },
    {
      english: "Humorous",
      banglish: "হিউমরাস",
    },
    {
      english: "Hypocrisy",
      banglish: "হাইপোক্রিসি",
    },
    {
      english: "Irresistible",
      banglish: "ইরেজিস্টেবল",
    },
    {
      english: "Medieval",
      banglish: "মিডিভ্যাল",
    },
    {
      english: "Millennium",
      banglish: "মিলেনিয়াম",
    },
    {
      english: "Jewellery",
      banglish: "জুয়েলারি",
    },
    {
      english: "Minuscule",
      banglish: "মিনাস্কিউল",
    },
    {
      english: "Mischievous",
      banglish: "মিসচিভাস",
    },
    {
      english: "Parliament",
      banglish: "পার্লামেন্ট",
    },
    {
      english: "Persistent",
      banglish: "পার্সিসটেন্ট",
    },
    {
      english: "Possession",
      banglish: "পসেশন",
    },
    {
      english: "Preferred",
      banglish: "প্রেফার্ড",
    },
    {
      english: "Privilege",
      banglish: "প্রিভিলেজ",
    },
    {
      english: "Questionnaire",
      banglish: "কোয়েশ্চনেয়ার",
    },
    {
      english: "Relevant",
      banglish: "রেলেভেন্ট",
    },
    {
      english: "Ridiculous",
      banglish: "রিডিকুলাস",
    },
    {
      english: "Sacrilegious",
      banglish: "স্যাক্রিলিজিয়াস",
    },
    {
      english: "Secretary",
      banglish: "সেক্রেটারি",
    },
    {
      english: "Sergeant",
      banglish: "সার্জেন্ট",
    },
    {
      english: "Supersede",
      banglish: "সুপারসিড",
    },
    {
      english: "Withhold",
      banglish: "উইথহোল্ড",
    },
    {
      english: "Accommodate",
      banglish: "অ্যাকোমোডেট",
    },
    {
      english: "Aesthetic",
      banglish: "অ্যাস্থেটিক",
    },
    {
      english: "Conscience",
      banglish: "কনশাস",
    },
    {
      english: "Consensus",
      banglish: "কনসেনসাস",
    },
    {
      english: "Disastrous",
      banglish: "ডিজাস্ট্রাস",
    },
    {
      english: "Dumbbell",
      banglish: "ডাম্ববেল",
    },
    {
      english: "Maneuver",
      banglish: "ম্যানুভার",
    },
    {
      english: "Parallel",
      banglish: "প্যারালেল",
    },
    {
      english: "Perseverance",
      banglish: "পার্সেভারেন্স",
    },
    {
      english: "Personnel",
      banglish: "পার্সোনেল",
    },
    {
      english: "Plagiarize",
      banglish: "প্লেজারাইজ",
    },
    {
      english: "Prejudice",
      banglish: "প্রেজুডিস",
    },
    {
      english: "Privilege",
      banglish: "প্রিভিলেজ",
    },
    {
      english: "Pronunciation",
      banglish: "প্রানানসিয়েশন",
    },
    {
      english: "Questionnaire",
      banglish: "কোয়েশ্চনেয়ার",
    },
    {
      english: "Secretary",
      banglish: "সেক্রেটারি",
    },
    {
      english: "Separate",
      banglish: "সেপারেট",
    },
    {
      english: "Sergeant",
      banglish: "সার্জেন্ট",
    },
    {
      english: "accessible",
      banglish: "অ্যাকসেসিবল",
    },
    {
      english: "accomplish",
      banglish: "অ্যাকমপ্লিশ",
    },
    {
      english: "campaign",
      banglish: "ক্যাম্পেইন",
    },
    {
      english: "characteristic",
      banglish: "ক্যারাক্টারিস্টিক",
    },
    {
      english: "cigarette",
      banglish: "সিগারেট",
    },
    {
      english: "conscientious",
      banglish: "কনশিয়েনশাস",
    },
    {
      english: "convenient",
      banglish: "কনভিনিয়েন্ট",
    },
    {
      english: "correspondence",
      banglish: "করেসপন্ডেন্স",
    },
    {
      english: "definitely",
      banglish: "ডেফিনিটলি",
    },
    {
      english: "embarrass",
      banglish: "এমব্যারাস",
    },
    {
      english: "formerly",
      banglish: "ফর্মারলি",
    },
    {
      english: "hypocrite",
      banglish: "হাইপোক্রিট",
    },
    {
      english: "incredible",
      banglish: "ইনক্রেডিবল",
    },
    {
      english: "insurance",
      banglish: "ইনশুরেন্স",
    },
    {
      english: "interference",
      banglish: "ইন্টারফেরেন্স",
    },
    {
      english: "jealousy",
      banglish: "জেলাসি",
    },
    {
      english: "legitimate",
      banglish: "লেজিটিমেট",
    },
    {
      english: "loneliness",
      banglish: "লোনলিনেস",
    },
    {
      english: "luxurious",
      banglish: "লাক্সুরিয়াস",
    },
    {
      english: "manufacture",
      banglish: "ম্যানুফ্যাকচার",
    },
    {
      english: "millionaire",
      banglish: "মিলিয়নেয়ার",
    },
    {
      english: "misspell",
      banglish: "মিসস্পেল",
    },
    {
      english: "mortgage",
      banglish: "মর্গেজ",
    },
    {
      english: "mysterious",
      banglish: "মিস্টেরিয়াস",
    },
    {
      english: "occasional",
      banglish: "অকেজনাল",
    },
    {
      english: "occurred",
      banglish: "অকার্ড",
    },
    {
      english: "peculiar",
      banglish: "পিকিউলিয়ার",
    },
    {
      english: "perceive",
      banglish: "পারসিভ",
    },
    {
      english: "permanent",
      banglish: "পার্মানেন্ট",
    },
    {
      english: "physician",
      banglish: "ফিজিশিয়ান",
    },
    {
      english: "Escalate",
      banglish: "এক্সসালারেট",
    },
    {
      english: "psychological",
      banglish: "সাইকোলজিক্যাল",
    },
    {
      english: "suspicious",
      banglish: "সাসপিশাস",
    },
    {
      english: "undoubtedly",
      banglish: "আনডাউটেডলি",
    },
    {
      english: "chronology",
      banglish: "ক্রনোলজি",
    },
    {
      english: "anonymous",
      banglish: "এনোনিমাস",
    },
    {
      english: "unforgettable",
      banglish: "আনফরগেটেবল",
    },
    {
      english: "entrepreneur",
      banglish: "আনতাপ্রেনোর",
    },
    {
      english: "worthwhile",
      banglish: "ওয়ার্থহোয়াইল",
    },
  ],
};
export default worlds;
