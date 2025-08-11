import { Link } from 'react-router-dom';
import { ExternalLink } from 'lucide-react';
import { Block } from '../types';

interface BlockCardProps {
  block: Block;
  index: number;
}

const BlockCard = ({ block, index }: BlockCardProps) => {
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
    <div 
      className="group"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 h-full flex flex-col">
        <div className="p-6 flex-1">
          <div className="flex justify-between items-start mb-4">
            {/* Tool Icon */}
            <div className="w-16 h-16 flex items-center">
              {block.iconPath ? (
                <img 
                  src={block.iconPath} 
                  alt={block.title} 
                  className="w-16 h-16 object-contain"
                />
              ) : (
                <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"/>
                </svg>
              )}
            </div>
            
            <span className={`px-3 py-1 text-sm font-semibold rounded-full ${getStatusColor(block.status)}`}>
              {block.status}
            </span>
          </div>
          
          {/* Tool Content */}
          <div className="space-y-4 flex-1">
            <h3 className="text-xl font-bold text-gray-800 group-hover:text-primary-500 transition-colors">
              {block.title}
            </h3>
            <div 
              className="text-gray-600 text-sm leading-relaxed"
              dangerouslySetInnerHTML={{ __html: block.summaryDescription }}
            />
          </div>
          
          <div className="flex justify-between items-center mt-6">
            <Link 
              to={`/blocks/${block.slug}`} 
              className="text-primary-400 hover:text-primary-500 font-medium transition-colors"
            >
              Learn More →
            </Link>
            {block.url && (
              <a 
                href={block.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-1 text-primary-400 hover:text-primary-500 transition-colors"
              >
                <span>Visit Tool</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlockCard;
