import { type BlockContent } from "~/types/sections/block-content";
import { type Sections } from "~/types/sections";
import { type SanityBlock } from "~/types/utils";
import { type PortableTextBlock } from "@portabletext/types/src/portableText";

const defaults = { nonTextBehavior: "remove" };

export const blocksToText = (
  blocks: (BlockContent | SanityBlock)[],
  opts = {},
): string => {
  const options = Object.assign({}, defaults, opts);

  return blocks
    .map((block: BlockContent | SanityBlock): string => {
      if (isBlockContent(block) && block.text) {
        return blocksToText(block.text, options);
      }

      if (isBlock(block) && isNotCustomImage(block)) {
        return (
          block.children.map((child) => child.text as string).join("") || ""
        );
      }

      return "";
    })
    .filter((str) => str !== "")
    .join("\n\n");
};

const wordsPerMinute = 200;
export const getReadTime = (blocks: BlockContent[]) => {
  const plainText: string = blocksToText(blocks);
  const wordTokens = plainText.split(/\w+/g).filter(Boolean);

  // const characterCount = plainText.length;
  const wordCount = wordTokens.length;

  const readingTime = Math.ceil(wordCount / wordsPerMinute);

  return readingTime;
};

export const getReadtimeFromSections = (sections?: Sections[]) => {
  if (!sections) return 0;

  const blocks = sections.filter(
    (section): section is BlockContent => section._type === "blockContent",
  );

  return getReadTime(blocks);
};

// Type guards
function isBlockContent(
  block: BlockContent | SanityBlock,
): block is BlockContent {
  return block._type === "blockContent";
}

function isBlock(
  block: BlockContent | SanityBlock,
): block is SanityBlock & { children: { text: string }[] } {
  return block._type === "block" && "children" in block;
}

function isNotCustomImage(
  block: SanityBlock,
): block is SanityBlock & { children: { text: string }[] } {
  return block._type !== "customImage" && "children" in block;
}
