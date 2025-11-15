import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CountdownTimer } from "@/components/CountdownTimer";
import { Vote, ShieldCheck, Users, BarChart3, Lock, CheckCircle } from "lucide-react";

const Home = () => {
  // Set voting end date to 2 days from now
  const votingEndDate = new Date();
  votingEndDate.setDate(votingEndDate.getDate() + 2);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary to-accent py-20 sm:py-32">
        <div className="absolute inset-0 bg-grid-white/10"></div>
        <div className="container mx-auto px-4 relative">
          <div className="text-center space-y-8 max-w-4xl mx-auto">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-white/10 backdrop-blur-sm mb-4">
              <Vote className="w-10 h-10 text-primary-foreground" />
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight">
              College Online Voting Portal
            </h1>
            <p className="text-xl sm:text-2xl text-primary-foreground/90 max-w-2xl mx-auto">
              A secure, transparent, and efficient platform for college elections
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <Link to="/vote">
                <Button size="lg" variant="hero" className="min-w-[200px]">
                  Cast Your Vote
                </Button>
              </Link>
              <Link to="/candidates">
                <Button size="lg" variant="outline" className="min-w-[200px] bg-white/10 backdrop-blur-sm text-primary-foreground border-primary-foreground/30 hover:bg-white hover:text-primary">
                  View Candidates
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Countdown Timer Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <Card className="max-w-4xl mx-auto shadow-xl">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl mb-2">Voting Closes In</CardTitle>
              <CardDescription className="text-base">
                Make sure to cast your vote before the deadline
              </CardDescription>
            </CardHeader>
            <CardContent className="py-8">
              <CountdownTimer targetDate={votingEndDate} />
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Quick Access Section */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Get Started</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose your role to access the portal
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Link to="/admin">
              <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer group">
                <CardHeader className="text-center space-y-4">
                  <div className="mx-auto w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <ShieldCheck className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle>Admin Login</CardTitle>
                  <CardDescription>
                    Manage elections, candidates, and view results
                  </CardDescription>
                </CardHeader>
              </Card>
            </Link>

            <Link to="/candidates">
              <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer group">
                <CardHeader className="text-center space-y-4">
                  <div className="mx-auto w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                    <Users className="w-8 h-8 text-accent" />
                  </div>
                  <CardTitle>Candidate Portal</CardTitle>
                  <CardDescription>
                    Register as a candidate or manage your profile
                  </CardDescription>
                </CardHeader>
              </Card>
            </Link>

            <Link to="/vote">
              <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer group">
                <CardHeader className="text-center space-y-4">
                  <div className="mx-auto w-16 h-16 rounded-full bg-success/10 flex items-center justify-center group-hover:bg-success/20 transition-colors">
                    <Vote className="w-8 h-8 text-success" />
                  </div>
                  <CardTitle>Voter Login</CardTitle>
                  <CardDescription>
                    Cast your vote for your preferred candidate
                  </CardDescription>
                </CardHeader>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* About Voting System */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">About Our Voting System</h2>
              <p className="text-lg text-muted-foreground">
                Built with security, transparency, and accessibility in mind
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="shadow-md hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Lock className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">Secure & Encrypted</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Your vote is encrypted and secured with industry-standard protocols. One vote per student ID ensures fair elections.
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-md hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-lg bg-success/10 flex items-center justify-center">
                      <CheckCircle className="w-6 h-6 text-success" />
                    </div>
                    <CardTitle className="text-xl">Easy to Use</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Simple and intuitive interface designed for students. Cast your vote in just a few clicks.
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-md hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                      <BarChart3 className="w-6 h-6 text-accent" />
                    </div>
                    <CardTitle className="text-xl">Real-time Results</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    View election results as soon as voting closes. Transparent and verifiable vote counting.
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-md hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Users className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">Fair & Transparent</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Every student gets an equal voice. Anonymous voting ensures no bias or pressure.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-accent">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary-foreground mb-4">
            Ready to Make Your Voice Heard?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Join hundreds of students in shaping the future of our college
          </p>
          <Link to="/vote">
            <Button size="lg" variant="hero" className="bg-white text-primary hover:bg-white/90 hover:scale-105">
              Vote Now
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
