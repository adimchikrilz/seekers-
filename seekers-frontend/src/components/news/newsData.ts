import type { NewsArticle } from "./types";

export const NEWS_ARTICLES: NewsArticle[] = [
  {
    slug: "two-students-shine-akure-south-mock",
    title: "Two Students Shine As Overall Best In Akure South Mock",
    date: "July 23, 2026",
    category: "Academic Achievement",
    image: "https://picsum.photos/seed/seekers-news-mock/1200/760",
    excerpt:
      "Ajayi Adedoyin emerged as the Overall Best Student in the recently concluded Akure South Mock Examination, while Abiona Samuel secured an impressive 4th overall position.",
    blocks: [
      {
        type: "paragraph",
        text: "Seekers Group of Schools is delighted to celebrate another remarkable academic achievement as Ajayi Adedoyin emerged as the Overall Best Student in the recently concluded Akure South Mock Examination, while Abiona Samuel secured an impressive 4th Overall Position among all participating students across Akure South Local Government Area.",
      },
      {
        type: "paragraph",
        text: "This outstanding accomplishment reflects the exceptional dedication, resilience, and academic excellence demonstrated by both students. Their success is a testament to the quality of education, disciplined learning environment, and unwavering commitment to excellence that define Seekers Group of Schools.",
      },
      {
        type: "paragraph",
        text: "The School Management commended Ajayi Adedoyin for attaining the highest overall score in the examination and applauded Abiona Samuel for earning a place among the top-performing students in the Local Government Area. Their achievements serve as an inspiration to fellow students and reinforce the school's reputation for producing academically outstanding learners.",
      },
      {
        type: "quote",
        text: "We are incredibly proud of Ajayi Adedoyin and Abiona Samuel for this remarkable accomplishment. Their success reflects the rewards of hard work, determination, and the support of dedicated teachers and parents. We celebrate them and encourage every student to strive for excellence in all they do.",
        attribution: "School Management",
      },
      {
        type: "paragraph",
        text: "As the school continues preparations for forthcoming external examinations, Seekers Group of Schools remains committed to providing world-class education that empowers every learner to reach their highest potential.",
      },
      {
        type: "paragraph",
        text: "The entire Seekers family congratulates Ajayi Adedoyin and Abiona Samuel on this exceptional achievement and wishes them even greater success in their future academic pursuits. Congratulations to our champions — your excellence has made Seekers Group of Schools proud!",
      },
    ],
  },
  {
    slug: "admissions-open-2026-2027",
    title: "Admissions Now Open For The 2026/2027 Session",
    date: "July 2, 2026",
    category: "Admissions",
    image: "https://picsum.photos/seed/seekers-news-admissions/1200/760",
    excerpt:
      "Seekers Comprehensive High School is pleased to announce that admission is now open for the 2026/2027 Academic Session into JSS1 to SS2.",
    blocks: [
      {
        type: "paragraph",
        text: "Seekers Comprehensive High School is pleased to announce that admission is now open for the 2026/2027 Academic Session into JSS1 to SS2.",
      },
      {
        type: "paragraph",
        text: "We warmly invite prospective students and their families to become part of our vibrant, supportive, and Christ-centered learning community, where academic excellence, character development, and leadership are nurtured for future success.",
      },
      { type: "heading", text: "Why Choose Seekers Comprehensive High School?" },
      {
        type: "list",
        items: [
          "Qualified and dedicated teachers",
          "Conducive learning environment",
          "Strong moral and Christian values",
          "Excellent academic standards",
          "Modern teaching and learning facilities",
          "Holistic student development",
        ],
      },
      { type: "heading", text: "Admission Available For" },
      { type: "paragraph", text: "JSS1 – SS2" },
      {
        type: "paragraph",
        text: "Registration is currently ongoing, and limited slots are available. Secure your child's place today and give them the opportunity to thrive in an environment committed to excellence. Enroll now and take the first step toward a brighter future with Seekers Comprehensive High School.",
      },
    ],
    cta: { label: "Apply Today", href: "/admissions" },
  },
  {
    slug: "mission-and-vision-statement",
    title: "Mission & Vision Statement",
    date: "July 2, 2026",
    category: "School Statement",
    image: "https://picsum.photos/seed/seekers-news-vision/1200/760",
    excerpt:
      "Our unified institutional statement — one consistent tone and philosophy, distinguishing the vision and mission of the Primary (SNPS) and Secondary (SCHS) sections.",
    blocks: [
      { type: "heading", text: "School Vision Statement" },
      { type: "subheading", text: "SNPS (Primary School) Vision" },
      {
        type: "paragraph",
        text: "To give a solid foundation to young learners, inspiring them to become godly, confident, and responsible leaders of tomorrow.",
      },
      { type: "subheading", text: "SCHS (Secondary School) Vision" },
      {
        type: "paragraph",
        text: "To become a center of excellence in secondary education, providing a world-class, Christ-centered learning environment that inspires academic achievement, godly character, innovation, and leadership for global impact.",
      },
      { type: "heading", text: "School Mission Statement" },
      { type: "subheading", text: "SNPS (Primary School) Mission" },
      {
        type: "paragraph",
        text: "To catch them young by laying a strong foundation for lifelong learning and setting their feet on the path of academic excellence through the delivery of quality education that meets international standards, while nurturing godly character, creativity, leadership, and a passion for lifelong achievement.",
      },
      { type: "subheading", text: "SCHS (Secondary School) Mission" },
      {
        type: "paragraph",
        text: "To deliver quality secondary education of international standard that nurtures academic excellence, godly character, leadership, creativity, innovation, and lifelong learning, preparing students to become responsible global citizens and transformational leaders.",
      },
      {
        type: "paragraph",
        text: "This unified institutional statement creates one consistent tone and philosophy across both schools, while clearly distinguishing the vision and mission of the Primary (SNPS) and Secondary (SCHS) sections.",
      },
    ],
  },
];

export function getArticleBySlug(slug: string): NewsArticle | undefined {
  return NEWS_ARTICLES.find((a) => a.slug === slug);
}
