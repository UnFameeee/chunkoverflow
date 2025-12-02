import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Block } from '@/types';
import { Link } from 'react-router-dom';
import { Package, ArrowRight, Calendar } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { formatDistanceToNow } from 'date-fns';

interface BlockCardProps {
  block: Block;
}

const statusColors = {
  PENDING: 'bg-yellow-100 text-yellow-800 hover:bg-yellow-200',
  IN_DEVELOPMENT: 'bg-blue-100 text-blue-800 hover:bg-blue-200',
  PUBLISHED: 'bg-green-100 text-green-800 hover:bg-green-200',
};

const statusLabels = {
  PENDING: 'Pending',
  IN_DEVELOPMENT: 'In Development',
  PUBLISHED: 'Published',
};

export default function BlockCard({ block }: BlockCardProps) {
  return (
    <Card className="group hover:shadow-xl transition-all duration-300 border-muted/60 hover:border-primary/50 flex flex-col h-full overflow-hidden bg-card">
      <CardHeader className="pb-4">
        <div className="flex items-start justify-between gap-4 mb-2">
          <div className="relative">
            <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            {block.iconPath ? (
              <img 
                src={`http://localhost:5001${block.iconPath}`}
                alt={block.title}
                className="relative w-14 h-14 object-cover rounded-xl shadow-sm group-hover:scale-105 transition-transform duration-300"
              />
            ) : (
              <div className="relative w-14 h-14 bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl flex items-center justify-center border border-primary/10 group-hover:border-primary/30 transition-colors">
                <Package className="w-7 h-7 text-primary" />
              </div>
            )}
          </div>
          <Badge variant="secondary" className={`${statusColors[block.status]} transition-colors`}>
            {statusLabels[block.status]}
          </Badge>
        </div>
        
        <div className="space-y-1">
          <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors line-clamp-1">
            <Link to={`/blocks/${block.slug}`} className="hover:underline decoration-primary/30 underline-offset-4">
              {block.title}
            </Link>
          </CardTitle>
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <Calendar className="w-3 h-3" />
            <span>Updated {formatDistanceToNow(new Date(block.updatedAt), { addSuffix: true })}</span>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="flex-1 pb-4">
        <CardDescription className="line-clamp-3 text-sm leading-relaxed">
          {block.summaryDescription}
        </CardDescription>
      </CardContent>

      <CardFooter className="pt-0">
        <Link to={`/blocks/${block.slug}`} className="w-full">
          <Button variant="ghost" className="w-full justify-between group/btn hover:bg-primary/5 hover:text-primary">
            View Details
            <ArrowRight className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform" />
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
