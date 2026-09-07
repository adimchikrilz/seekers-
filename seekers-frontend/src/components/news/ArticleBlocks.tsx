import type { NewsBlock } from "./types";

export default function ArticleBlocks({ blocks }: { blocks: NewsBlock[] }) {
  return (
    <div className="article-body">
      {blocks.map((block, i) => {
        switch (block.type) {
          case "heading":
            return (
              <h2 className="article-heading" key={i}>
                {block.text}
              </h2>
            );
          case "subheading":
            return (
              <h3 className="article-subheading" key={i}>
                {block.text}
              </h3>
            );
          case "quote":
            return (
              <blockquote className="article-quote" key={i}>
                <p>&ldquo;{block.text}&rdquo;</p>
                {block.attribution && <cite>{block.attribution}</cite>}
              </blockquote>
            );
          case "list":
            return (
              <ul className="article-list" key={i}>
                {block.items?.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            );
          default:
            return (
              <p className="article-paragraph" key={i}>
                {block.text}
              </p>
            );
        }
      })}
    </div>
  );
}
