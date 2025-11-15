import { useState } from "react";
import { CandidateCard } from "@/components/CandidateCard";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Users, UserPlus } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

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

const Candidates = () => {
  const [open, setOpen] = useState(false);
  const { toast } = useToast();

  const handleRegistration = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Registration Submitted!",
      description: "Your candidate registration is pending admin approval.",
    });
    setOpen(false);
  };

  return (
    <div className="min-h-screen bg-background py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent mb-4">
            <Users className="w-8 h-8 text-primary-foreground" />
          </div>
          <h1 className="text-4xl font-bold mb-4">Candidates</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-6">
            Meet the candidates running for student representative. Learn about their vision and manifestos.
          </p>
          
          <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
              <Button variant="hero" size="lg">
                <UserPlus className="mr-2 h-5 w-5" />
                Register as Candidate
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle className="text-2xl">Candidate Registration</DialogTitle>
                <DialogDescription>
                  Fill in your details to register as a candidate. Your registration will be reviewed by the admin.
                </DialogDescription>
              </DialogHeader>
              <form onSubmit={handleRegistration} className="space-y-6 mt-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name *</Label>
                  <Input id="name" placeholder="Enter your full name" required />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="department">Department *</Label>
                    <Input id="department" placeholder="e.g., Computer Science" required />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="year">Year *</Label>
                    <Input id="year" placeholder="e.g., 3rd Year" required />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input id="email" type="email" placeholder="your.email@college.edu" required />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input id="phone" type="tel" placeholder="+1 (555) 000-0000" required />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="manifesto">Manifesto / Vision Statement *</Label>
                  <Textarea 
                    id="manifesto" 
                    placeholder="Describe your goals, plans, and what you want to achieve as student representative..."
                    rows={6}
                    required 
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="photo">Profile Photo (Optional)</Label>
                  <Input id="photo" type="file" accept="image/*" />
                  <p className="text-xs text-muted-foreground">Upload a professional photo (Max 5MB, JPG/PNG)</p>
                </div>
                
                <Button type="submit" variant="hero" size="lg" className="w-full">
                  Submit Registration
                </Button>
              </form>
            </DialogContent>
          </Dialog>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {mockCandidates.map((candidate) => (
            <CandidateCard key={candidate.id} {...candidate} />
          ))}
        </div>

        <Card className="mt-12 max-w-3xl mx-auto bg-gradient-to-br from-card to-secondary/30">
          <CardHeader>
            <CardTitle className="text-2xl">Want to Run for Office?</CardTitle>
            <CardDescription className="text-base">
              Registration is open for all eligible students who want to make a difference
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
              <div className="flex items-start gap-2">
                <div className="w-2 h-2 rounded-full bg-primary mt-1.5"></div>
                <p>Must be a currently enrolled student</p>
              </div>
              <div className="flex items-start gap-2">
                <div className="w-2 h-2 rounded-full bg-primary mt-1.5"></div>
                <p>Minimum 2.5 GPA required</p>
              </div>
              <div className="flex items-start gap-2">
                <div className="w-2 h-2 rounded-full bg-primary mt-1.5"></div>
                <p>No disciplinary actions on record</p>
              </div>
              <div className="flex items-start gap-2">
                <div className="w-2 h-2 rounded-full bg-primary mt-1.5"></div>
                <p>Admin approval required</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Candidates;
