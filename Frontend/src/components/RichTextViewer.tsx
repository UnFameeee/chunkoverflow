import DOMPurify from 'dompurify';

interface RichTextViewerProps {
  content: string;
  className?: string;
}

export default function RichTextViewer({ content, className = '' }: RichTextViewerProps) {
  // Sanitize HTML to prevent XSS attacks
  const sanitizedContent = DOMPurify.sanitize(content, {
    ALLOWED_TAGS: [
      'p', 'br', 'strong', 'em', 'u', 's', 'code', 'pre', 'a', 'ul', 'ol', 'li',
      'blockquote', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'hr', 'mark', 'span', 'div'
    ],
    ALLOWED_ATTR: ['href', 'class', 'target', 'rel', 'title'],
    ALLOW_DATA_ATTR: false,
    ADD_ATTR: ['target', 'rel'],
    FORBID_TAGS: ['script', 'style', 'iframe', 'form', 'input', 'button', 'object', 'embed'],
    FORBID_ATTR: [
      'onclick', 'onload', 'onerror', 'onmouseover', 'onfocus', 'onblur',
      'onmousedown', 'onmouseup', 'onkeydown', 'onkeypress', 'onkeyup',
      'ondblclick', 'oncontextmenu', 'onscroll'
    ],
    // Force rel="noopener noreferrer" on all links for security
    ADD_TAGS: [
      {
        tagName: 'a',
        attributes: { rel: 'noopener noreferrer' }
      }
    ],
  });

  return (
    <div
      className={`prose prose-emerald max-w-none
        prose-headings:font-bold prose-headings:text-fg-primary
        prose-h1:text-3xl prose-h1:mt-8 prose-h1:mb-4
        prose-h2:text-2xl prose-h2:mt-6 prose-h2:mb-3
        prose-h3:text-xl prose-h3:mt-5 prose-h3:mb-2
        prose-p:text-fg-primary prose-p:leading-relaxed prose-p:my-3
        prose-a:text-primary prose-a:no-underline hover:prose-a:underline hover:prose-a:text-primary-hover prose-a:font-medium
        prose-strong:text-fg-primary prose-strong:font-semibold prose-strong:text-primary
        prose-em:text-fg-secondary prose-italic
        prose-code:text-primary prose-code:bg-bg-tertiary prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-sm prose-code:font-medium prose-code:before:content-none prose-code:after:content-none prose-code:border prose-code:border-border
        prose-pre:bg-bg-tertiary prose-pre:text-fg-primary prose-pre:rounded-lg prose-pre:p-4 prose-pre:my-4 prose-pre:overflow-x-auto
        prose-blockquote:border-l-4 prose-blockquote:border-primary prose-blockquote:bg-bg-secondary prose-blockquote:py-3 prose-blockquote:px-4 prose-blockquote:italic prose-blockquote:text-fg-muted prose-blockquote:rounded-r-lg prose-blockquote:my-4
        prose-ul:my-4 prose-ol:my-4
        prose-li:text-fg-primary prose-li:marker:text-primary prose-li:marker:font-bold
        prose-li:my-1
        prose-hr:border-border prose-hr:my-6
        prose-img:rounded-lg prose-img:shadow-md prose-img:my-4
        prose-table:text-sm prose-table:my-4
        prose-thead:border-b prose-thead:border-border prose-thead:bg-bg-secondary
        prose-th:text-left prose-th:font-semibold prose-th:text-fg-primary prose-th:px-4 prose-th:py-2
        prose-tr:border-b prose-tr:border-border prose-tr:hover:bg-bg-muted
        prose-td:text-fg-primary prose-td:px-4 prose-td:py-2
        mark:prose-highlight:bg-warning-bg mark:prose-highlight:px-1 mark:prose-highlight:rounded
        ${className}`}
      dangerouslySetInnerHTML={{ __html: sanitizedContent }}
    />
  );
}
