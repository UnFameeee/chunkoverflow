interface RichTextViewerProps {
  content: string;
  className?: string;
}

export default function RichTextViewer({ content, className = '' }: RichTextViewerProps) {
  return (
    <div 
      className={`prose prose-slate max-w-none 
        prose-headings:font-bold prose-headings:text-slate-900
        prose-h2:text-2xl prose-h2:mt-6 prose-h2:mb-4
        prose-p:text-slate-700 prose-p:leading-relaxed
        prose-a:text-primary prose-a:no-underline hover:prose-a:underline hover:prose-a:text-primary/80
        prose-strong:text-slate-900 prose-strong:font-semibold
        prose-code:text-slate-900 prose-code:bg-slate-100 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:before:content-none prose-code:after:content-none
        prose-blockquote:border-l-primary prose-blockquote:bg-slate-50 prose-blockquote:py-2 prose-blockquote:px-4 prose-blockquote:italic prose-blockquote:text-slate-600
        prose-ul:my-4 prose-ol:my-4
        prose-li:text-slate-700 prose-li:marker:text-primary
        ${className}`}
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
}
