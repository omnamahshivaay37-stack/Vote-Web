import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BarChart3, Download, Trophy, User } from "lucide-react";
import { Progress } from "@/components/ui/progress";

const mockResults = [
  { id: 1, name: "Sarah Johnson", department: "Computer Science", votes: 245, percentage: 35 },
  { id: 2, name: "Michael Chen", department: "Mechanical Engineering", votes: 198, percentage: 28 },
  { id: 3, name: "Priya Sharma", department: "Business Administration", votes: 156, percentage: 22 },
  { id: 4, name: "David Brown", department: "Electrical Engineering", votes: 101, percentage: 15 },
];

const totalVotes = mockResults.reduce((sum, candidate) => sum + candidate.votes, 0);
const winner = mockResults[0];

const Results = () => {
  return (
    <div className="min-h-screen bg-background py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent mb-4">
            <BarChart3 className="w-8 h-8 text-primary-foreground" />
          </div>
          <h1 className="text-4xl font-bold mb-4">Election Results</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Official results from the student representative election
          </p>
        </div>

        {/* Winner Card */}
        <Card className="mb-12 max-w-3xl mx-auto shadow-xl border-2 border-primary bg-gradient-to-br from-card to-primary/5">
          <CardHeader className="text-center pb-6">
            <div className="flex justify-center mb-4">
              <div className="relative">
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-2xl">
                  <User className="w-16 h-16 text-primary-foreground" />
                </div>
                <div className="absolute -top-2 -right-2 w-12 h-12 bg-accent rounded-full flex items-center justify-center shadow-lg">
                  <Trophy className="w-6 h-6 text-accent-foreground" />
                </div>
              </div>
            </div>
            <Badge className="mx-auto mb-2 bg-gradient-to-r from-primary to-accent text-primary-foreground border-0">
              Elected Representative
            </Badge>
            <CardTitle className="text-3xl mb-2">{winner.name}</CardTitle>
            <CardDescription className="text-lg">
              {winner.department} • {winner.votes} votes ({winner.percentage}%)
            </CardDescription>
          </CardHeader>
        </Card>

        {/* Vote Statistics */}
        <Card className="mb-8 max-w-3xl mx-auto shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl">Vote Statistics</CardTitle>
            <CardDescription>Overall election participation and breakdown</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="text-center p-4 bg-secondary rounded-lg">
                <p className="text-sm text-muted-foreground mb-1">Total Votes</p>
                <p className="text-3xl font-bold text-primary">{totalVotes}</p>
              </div>
              <div className="text-center p-4 bg-secondary rounded-lg">
                <p className="text-sm text-muted-foreground mb-1">Candidates</p>
                <p className="text-3xl font-bold text-accent">{mockResults.length}</p>
              </div>
              <div className="text-center p-4 bg-secondary rounded-lg">
                <p className="text-sm text-muted-foreground mb-1">Voter Turnout</p>
                <p className="text-3xl font-bold text-success">73%</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Detailed Results */}
        <div className="space-y-6 max-w-4xl mx-auto">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold">Detailed Results</h2>
            <Button variant="outline">
              <Download className="mr-2 h-4 w-4" />
              Download Report
            </Button>
          </div>

          {mockResults.map((candidate, index) => (
            <Card key={candidate.id} className="shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-4">
                    <Badge 
                      variant={index === 0 ? "default" : "secondary"}
                      className="text-lg px-3 py-1"
                    >
                      #{index + 1}
                    </Badge>
                    <div>
                      <h3 className="text-xl font-semibold flex items-center gap-2">
                        {candidate.name}
                        {index === 0 && <Trophy className="w-5 h-5 text-accent" />}
                      </h3>
                      <p className="text-sm text-muted-foreground">{candidate.department}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-primary">{candidate.votes}</p>
                    <p className="text-sm text-muted-foreground">votes</p>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Vote Share</span>
                    <span className="font-semibold">{candidate.percentage}%</span>
                  </div>
                  <Progress value={candidate.percentage} className="h-3" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Print/Export Section */}
        <Card className="mt-12 max-w-3xl mx-auto bg-gradient-to-br from-card to-secondary/30">
          <CardHeader>
            <CardTitle className="text-xl">Official Election Results</CardTitle>
            <CardDescription>
              These results are final and certified by the election committee
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col sm:flex-row gap-4">
            <Button variant="default" className="flex-1">
              <Download className="mr-2 h-4 w-4" />
              Download PDF
            </Button>
            <Button variant="outline" className="flex-1">
              <Download className="mr-2 h-4 w-4" />
              Download CSV
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Results;
