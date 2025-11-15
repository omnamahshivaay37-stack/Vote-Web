import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Info, Shield, Code, Users, CheckCircle } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-background py-12 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent mb-4">
            <Info className="w-8 h-8 text-primary-foreground" />
          </div>
          <h1 className="text-4xl font-bold mb-4">About Our Voting System</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Learn about the technology and principles behind our secure college voting portal
          </p>
        </div>

        {/* Purpose Section */}
        <Card className="mb-8 shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Shield className="w-5 h-5 text-primary" />
              </div>
              Purpose & Mission
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground">
            <p>
              Our Online Voting Portal was created to modernize and streamline the college election process, 
              making it more accessible, transparent, and secure for all students.
            </p>
            <p>
              We believe every student deserves a voice in shaping their college experience. This platform 
              ensures that voting is convenient, fair, and reflects the true will of the student body.
            </p>
          </CardContent>
        </Card>

        {/* Features Section */}
        <Card className="mb-8 shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-success/10 flex items-center justify-center">
                <CheckCircle className="w-5 h-5 text-success" />
              </div>
              Key Features
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-start gap-3 p-4 rounded-lg bg-secondary/50">
                <div className="w-2 h-2 rounded-full bg-primary mt-2"></div>
                <div>
                  <h3 className="font-semibold mb-1">One Vote Per Student</h3>
                  <p className="text-sm text-muted-foreground">
                    Each student ID can cast only one vote, ensuring fair elections
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-3 p-4 rounded-lg bg-secondary/50">
                <div className="w-2 h-2 rounded-full bg-primary mt-2"></div>
                <div>
                  <h3 className="font-semibold mb-1">Anonymous Voting</h3>
                  <p className="text-sm text-muted-foreground">
                    Your vote is completely anonymous and cannot be traced back to you
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-3 p-4 rounded-lg bg-secondary/50">
                <div className="w-2 h-2 rounded-full bg-primary mt-2"></div>
                <div>
                  <h3 className="font-semibold mb-1">Real-time Results</h3>
                  <p className="text-sm text-muted-foreground">
                    View election results immediately after voting closes
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-3 p-4 rounded-lg bg-secondary/50">
                <div className="w-2 h-2 rounded-full bg-primary mt-2"></div>
                <div>
                  <h3 className="font-semibold mb-1">Secure Authentication</h3>
                  <p className="text-sm text-muted-foreground">
                    Multiple layers of security protect your vote and data
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Technology Stack */}
        <Card className="mb-8 shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                <Code className="w-5 h-5 text-accent" />
              </div>
              Technologies Used
            </CardTitle>
            <CardDescription>Built with modern, secure technologies</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary" className="text-sm px-3 py-1">React</Badge>
              <Badge variant="secondary" className="text-sm px-3 py-1">TypeScript</Badge>
              <Badge variant="secondary" className="text-sm px-3 py-1">Tailwind CSS</Badge>
              <Badge variant="secondary" className="text-sm px-3 py-1">Vite</Badge>
              <Badge variant="secondary" className="text-sm px-3 py-1">Shadcn UI</Badge>
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              Our platform is built using cutting-edge web technologies to ensure fast performance, 
              security, and a great user experience across all devices.
            </p>
          </CardContent>
        </Card>

        {/* Security Measures */}
        <Card className="mb-8 shadow-lg border-2 border-primary/20">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Shield className="w-5 h-5 text-primary" />
              </div>
              Security Measures
            </CardTitle>
            <CardDescription>How we keep your vote secure</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-center gap-3">
              <CheckCircle className="w-5 h-5 text-success flex-shrink-0" />
              <p className="text-sm">Encrypted data transmission and storage</p>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle className="w-5 h-5 text-success flex-shrink-0" />
              <p className="text-sm">Student ID verification system</p>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle className="w-5 h-5 text-success flex-shrink-0" />
              <p className="text-sm">Anonymous voting with no personal data stored</p>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle className="w-5 h-5 text-success flex-shrink-0" />
              <p className="text-sm">Admin verification for candidate registration</p>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle className="w-5 h-5 text-success flex-shrink-0" />
              <p className="text-sm">Audit logs for transparency and accountability</p>
            </div>
          </CardContent>
        </Card>

        {/* Team Section */}
        <Card className="shadow-lg bg-gradient-to-br from-card to-secondary/30">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Users className="w-5 h-5 text-primary" />
              </div>
              Development Team
            </CardTitle>
            <CardDescription>Built with passion by students, for students</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              This voting portal was developed as a project to improve the democratic process within our college. 
              Our team is committed to maintaining and improving this platform to serve the student community.
            </p>
            <div className="flex flex-wrap gap-2">
              <Badge className="bg-gradient-to-r from-primary to-accent">Student Project</Badge>
              <Badge variant="outline">Open Source</Badge>
              <Badge variant="outline">Community Driven</Badge>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default About;
