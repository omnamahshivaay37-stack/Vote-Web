import { useState } from "react";
import { CandidateCard } from "@/components/CandidateCard";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { CheckCircle, Vote as VoteIcon } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

// Mock data for candidates
const mockCandidates = [
  {
    id: 1,
    name: "Sarah Johnson",
    department: "Computer Science",
    year: "3rd Year",
    manifesto: "I will work towards improving lab facilities, organizing more tech workshops, and establishing a mentorship program for first-year students.",
    image: "",
  },
  {
    id: 2,
    name: "Michael Chen",
    department: "Mechanical Engineering",
    year: "4th Year",
    manifesto: "My focus is on enhancing sports facilities, promoting environmental initiatives, and creating more internship opportunities for students.",
    image: "",
  },
  {
    id: 3,
    name: "Priya Sharma",
    department: "Business Administration",
    year: "2nd Year",
    manifesto: "I aim to improve student welfare services, organize cultural events, and work on better cafeteria options and pricing.",
    image: "",
  },
  {
    id: 4,
    name: "David Brown",
    department: "Electrical Engineering",
    year: "3rd Year",
    manifesto: "I will advocate for better library resources, extended study hours, and more collaboration with industry professionals.",
    image: "",
  },
];

const Vote = () => {
  const [selectedCandidate, setSelectedCandidate] = useState<number | null>(null);
  const [hasVoted, setHasVoted] = useState(false);
  const { toast } = useToast();

  const handleVoteSubmit = () => {
    if (!selectedCandidate) {
      toast({
        title: "No Candidate Selected",
        description: "Please select a candidate before submitting your vote.",
        variant: "destructive",
      });
      return;
    }

    // Simulate vote submission
    setHasVoted(true);
    toast({
      title: "Vote Submitted Successfully! 🎉",
      description: "Thank you for participating in the election.",
    });
  };

  if (hasVoted) {
    return (
      <div className="min-h-screen bg-background py-12 px-4">
        <div className="container mx-auto max-w-2xl">
          <Card className="shadow-xl border-2 border-success">
            <CardHeader className="text-center space-y-4 pb-8">
              <div className="mx-auto w-20 h-20 rounded-full bg-success/10 flex items-center justify-center">
                <CheckCircle className="w-12 h-12 text-success" />
              </div>
              <CardTitle className="text-3xl">Vote Submitted Successfully!</CardTitle>
              <CardDescription className="text-base">
                Thank you for participating in the college election. Your vote has been recorded securely.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Alert className="bg-success/10 border-success">
                <CheckCircle className="h-4 w-4 text-success" />
                <AlertDescription className="text-success-foreground">
                  Your vote is anonymous and cannot be changed. Results will be announced after voting closes.
                </AlertDescription>
              </Alert>
              <div className="pt-4 space-y-2 text-center">
                <p className="text-sm text-muted-foreground">
                  You can view the results once the voting period ends.
                </p>
                <Button variant="default" onClick={() => window.location.href = "/results"} className="mt-4">
                  View Results (Available After Voting Ends)
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent mb-4">
            <VoteIcon className="w-8 h-8 text-primary-foreground" />
          </div>
          <h1 className="text-4xl font-bold mb-4">Cast Your Vote</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Select your preferred candidate for the student representative position. You can only vote once.
          </p>
        </div>

        <Alert className="mb-8 max-w-3xl mx-auto">
          <CheckCircle className="h-4 w-4" />
          <AlertDescription>
            <strong>Important:</strong> Once you submit your vote, it cannot be changed. Please review your selection carefully.
          </AlertDescription>
        </Alert>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {mockCandidates.map((candidate) => (
            <CandidateCard
              key={candidate.id}
              {...candidate}
              selected={selectedCandidate === candidate.id}
              onSelect={setSelectedCandidate}
            />
          ))}
        </div>

        <div className="max-w-md mx-auto">
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle>Confirm Your Vote</CardTitle>
              <CardDescription>
                {selectedCandidate
                  ? `You have selected ${mockCandidates.find(c => c.id === selectedCandidate)?.name}`
                  : "Please select a candidate above"}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button
                variant="hero"
                size="lg"
                className="w-full"
                onClick={handleVoteSubmit}
                disabled={!selectedCandidate}
              >
                Submit Vote
              </Button>
              <p className="text-xs text-center text-muted-foreground mt-4">
                By submitting, you agree that your vote is final and anonymous
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Vote;
