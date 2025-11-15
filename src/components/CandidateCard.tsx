import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { User, GraduationCap, FileText } from "lucide-react";

interface CandidateCardProps {
  id: number;
  name: string;
  department: string;
  year: string;
  manifesto: string;
  image?: string;
  votes?: number;
  onSelect?: (id: number) => void;
  selected?: boolean;
  showVotes?: boolean;
}

export const CandidateCard = ({
  id,
  name,
  department,
  year,
  manifesto,
  image,
  votes,
  onSelect,
  selected,
  showVotes,
}: CandidateCardProps) => {
  return (
    <Card 
      className={`transition-all duration-300 hover:shadow-lg cursor-pointer ${
        selected ? 'ring-2 ring-primary shadow-xl' : ''
      }`}
      onClick={() => onSelect?.(id)}
    >
      <CardHeader className="text-center pb-4">
        <div className="flex justify-center mb-4">
          <div className="relative">
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg">
              {image ? (
                <img 
                  src={image} 
                  alt={name} 
                  className="w-full h-full rounded-full object-cover"
                />
              ) : (
                <User className="w-12 h-12 text-primary-foreground" />
              )}
            </div>
            {selected && (
              <div className="absolute -top-1 -right-1 w-8 h-8 bg-success rounded-full flex items-center justify-center shadow-md">
                <span className="text-success-foreground font-bold text-lg">✓</span>
              </div>
            )}
          </div>
        </div>
        <CardTitle className="text-xl">{name}</CardTitle>
        <CardDescription className="flex flex-wrap gap-2 justify-center mt-2">
          <Badge variant="secondary" className="flex items-center gap-1">
            <GraduationCap className="w-3 h-3" />
            {department}
          </Badge>
          <Badge variant="outline">{year}</Badge>
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-start gap-2">
          <FileText className="w-4 h-4 text-muted-foreground mt-1 flex-shrink-0" />
          <p className="text-sm text-muted-foreground line-clamp-3">{manifesto}</p>
        </div>
        
        {showVotes && votes !== undefined && (
          <div className="pt-4 border-t">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">Total Votes</span>
              <Badge variant="default" className="text-lg px-3 py-1">
                {votes}
              </Badge>
            </div>
          </div>
        )}
        
        {onSelect && (
          <Button 
            variant={selected ? "success" : "outline"} 
            className="w-full"
            onClick={(e) => {
              e.stopPropagation();
              onSelect(id);
            }}
          >
            {selected ? "Selected" : "Select Candidate"}
          </Button>
        )}
      </CardContent>
    </Card>
  );
};
