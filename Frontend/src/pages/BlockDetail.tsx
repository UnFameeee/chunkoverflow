import { useParams, Link } from 'react-router-dom';
import { useBlock } from '../hooks/useBlocks';
import { ArrowLeft, ExternalLink } from 'lucide-react';

const BlockDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const { block, loading, error } = useBlock(slug || '');

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-16">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary-400"></div>
      </div>
    );
  }

  if (error || !block) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-16">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Tool Not Found</h2>
          <p className="text-gray-600 mb-6">{error || 'The requested tool could not be found.'}</p>
          <Link 
            to="/" 
            className="inline-flex items-center space-x-2 text-primary-400 hover:text-primary-500 font-medium"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </Link>
        </div>
      </div>
    );
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'PUBLISHED':
        return 'bg-green-100 text-green-800';
      case 'IN_DEVELOPMENT':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      <div className="container mx-auto px-6 py-12">
        <Link 
          to="/" 
          className="inline-flex items-center space-x-2 text-primary-400 hover:text-primary-500 font-medium mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Tools</span>
        </Link>

        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="p-8">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
              <div className="flex items-center space-x-4 mb-4 md:mb-0">
                {block.iconPath && (
                  <img 
                    src={block.iconPath} 
                    alt={block.title} 
                    className="w-16 h-16 object-contain"
                  />
                )}
                <div>
                  <h1 className="text-3xl font-bold text-gray-800">{block.title}</h1>
                  <span className={`inline-block px-3 py-1 text-sm font-semibold rounded-full mt-2 ${getStatusColor(block.status)}`}>
                    {block.status}
                  </span>
                </div>
              </div>
              
              {block.url && (
                <a 
                  href={block.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 bg-primary-400 text-white px-6 py-3 rounded-lg hover:bg-primary-500 transition-colors font-medium"
                >
                  <span>Visit Tool</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              )}
            </div>

            <div className="prose prose-lg max-w-none">
              <div className="text-xl text-gray-600 mb-8">
                {block.description}
              </div>
              
              <div 
                className="text-gray-700 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: block.content }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlockDetail;
