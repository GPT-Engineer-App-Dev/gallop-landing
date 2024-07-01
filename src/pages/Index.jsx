import { Button } from "@/components/ui/button";

function Index() {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-4">Welcome to Horse Haven</h1>
      <p className="text-lg mb-6">Your ultimate destination for everything about horses.</p>
      <Button variant="primary" size="lg">Get Started</Button>
    </div>
  );
}

export default Index;