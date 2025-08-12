import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface ToolCardProps {
  title: string;
  description: string;
  category: string;
  imageSrc?: string;
}

export function ToolCard({ title, description, category, imageSrc }: ToolCardProps) {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-lg">
      {imageSrc && (
        <div className="aspect-video w-full overflow-hidden bg-muted">
          <img
            src={imageSrc}
            alt={title}
            className="h-full w-full object-cover"
          />
        </div>
      )}
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="line-clamp-1">{title}</CardTitle>
          <Badge variant="outline" className="ml-2">{category}</Badge>
        </div>
      </CardHeader>
      <CardContent>
        <CardDescription className="line-clamp-2">{description}</CardDescription>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline" size="sm">Chi tiết</Button>
        <Button size="sm">Sử dụng</Button>
      </CardFooter>
    </Card>
  );
}
