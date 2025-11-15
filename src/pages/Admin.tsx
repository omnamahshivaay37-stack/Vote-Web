import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { 
  ShieldCheck, 
  Users, 
  BarChart3, 
  Settings, 
  CheckCircle, 
  XCircle,
  Download,
  Calendar
} from "lucide-react";

const mockCandidates = [
  { id: 1, name: "Sarah Johnson", department: "Computer Science", status: "approved", votes: 245 },
  { id: 2, name: "Michael Chen", department: "Mechanical Engineering", status: "approved", votes: 198 },
  { id: 3, name: "John Doe", department: "Physics", status: "pending", votes: 0 },
];

const Admin = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoggedIn(true);
  };

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center px-4">
        <Card className="w-full max-w-md shadow-xl">
          <CardHeader className="text-center space-y-4">
            <div className="mx-auto w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
              <ShieldCheck className="w-8 h-8 text-primary-foreground" />
            </div>
            <CardTitle className="text-3xl">Admin Login</CardTitle>
            <CardDescription className="text-base">
              Enter your credentials to access the admin dashboard
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="admin-id">Admin ID</Label>
                <Input id="admin-id" placeholder="Enter your admin ID" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" placeholder="Enter your password" required />
              </div>
              <Button type="submit" variant="hero" size="lg" className="w-full">
                Login to Dashboard
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background py-8 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold mb-2">Admin Dashboard</h1>
              <p className="text-lg text-muted-foreground">
                Manage elections, candidates, and view results
              </p>
            </div>
            <Button variant="outline" onClick={() => setIsLoggedIn(false)}>
              Logout
            </Button>
          </div>
        </div>

        {/* Statistics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="shadow-md">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Total Votes</CardTitle>
              <BarChart3 className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-primary">700</div>
              <p className="text-xs text-muted-foreground mt-1">
                73% voter turnout
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-md">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Candidates</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-accent">4</div>
              <p className="text-xs text-muted-foreground mt-1">
                2 approved, 1 pending
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-md">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Voting Status</CardTitle>
              <Calendar className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-success">Active</div>
              <p className="text-xs text-muted-foreground mt-1">
                Closes in 2 days
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-md">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Winner</CardTitle>
              <ShieldCheck className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-xl font-bold">Sarah J.</div>
              <p className="text-xs text-muted-foreground mt-1">
                245 votes (35%)
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Tabs Section */}
        <Tabs defaultValue="candidates" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3 max-w-md">
            <TabsTrigger value="candidates">Candidates</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
            <TabsTrigger value="reports">Reports</TabsTrigger>
          </TabsList>

          <TabsContent value="candidates" className="space-y-6">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl">Manage Candidates</CardTitle>
                <CardDescription>Approve or reject candidate registrations</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {mockCandidates.map((candidate) => (
                    <div key={candidate.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-secondary/50 transition-colors">
                      <div>
                        <h3 className="font-semibold text-lg">{candidate.name}</h3>
                        <p className="text-sm text-muted-foreground">{candidate.department}</p>
                        {candidate.status === "approved" && (
                          <p className="text-sm text-muted-foreground mt-1">Votes: {candidate.votes}</p>
                        )}
                      </div>
                      <div className="flex items-center gap-3">
                        {candidate.status === "approved" ? (
                          <Badge variant="default" className="flex items-center gap-1">
                            <CheckCircle className="w-3 h-3" />
                            Approved
                          </Badge>
                        ) : (
                          <>
                            <Button variant="success" size="sm">
                              <CheckCircle className="w-4 h-4 mr-1" />
                              Approve
                            </Button>
                            <Button variant="destructive" size="sm">
                              <XCircle className="w-4 h-4 mr-1" />
                              Reject
                            </Button>
                          </>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="settings" className="space-y-6">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl">Election Settings</CardTitle>
                <CardDescription>Configure voting schedule and parameters</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="start-date">Voting Start Date</Label>
                    <Input id="start-date" type="datetime-local" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="end-date">Voting End Date</Label>
                    <Input id="end-date" type="datetime-local" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="position">Position Title</Label>
                  <Input id="position" placeholder="e.g., Student Representative" />
                </div>

                <div className="flex items-center gap-4">
                  <Button variant="hero">Save Settings</Button>
                  <Button variant="destructive">Reset Database</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="reports" className="space-y-6">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl">Download Reports</CardTitle>
                <CardDescription>Export election data and results</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Button variant="outline" className="h-24 flex-col">
                    <Download className="w-8 h-8 mb-2" />
                    <span>Vote Summary (PDF)</span>
                  </Button>
                  <Button variant="outline" className="h-24 flex-col">
                    <Download className="w-8 h-8 mb-2" />
                    <span>Candidate List (CSV)</span>
                  </Button>
                  <Button variant="outline" className="h-24 flex-col">
                    <Download className="w-8 h-8 mb-2" />
                    <span>Detailed Results (PDF)</span>
                  </Button>
                  <Button variant="outline" className="h-24 flex-col">
                    <Download className="w-8 h-8 mb-2" />
                    <span>Voter Analytics (CSV)</span>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Admin;
