import { mdxAnnotations } from "mdx-annotations";
import remarkGfm from "remark-gfm";

const remarkPlugins = [mdxAnnotations.remark, remarkGfm];

export { remarkPlugins };
