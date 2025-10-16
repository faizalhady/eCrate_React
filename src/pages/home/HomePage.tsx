import React from "react";
import { Link } from "react-router-dom";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function HomePage() {
  return (
    <div className="flex items-center justify-center min-h-screen p-6">
      <Card className="max-w-2xl w-full">
        <CardHeader>
          <CardTitle className="text-3xl">Welcome to eCrate API Tester</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <p className="text-sm text-muted-foreground text-center">
            A lightweight workspace to test and visualize eCrate APIs. Select a tester below to begin.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button asChild>
              <Link to="/auth-test">Auth API Tester</Link>
            </Button>
            <Button asChild>
              <Link to="/crate-test">Crate API Tester</Link>
            </Button>
            <Button asChild>
              <Link to="/data-test">Data API Tester</Link>
            </Button>
            <Button asChild>
              <Link to="/history-test">History API Tester</Link>
            </Button>
            <Button asChild>
              <Link to="/log-test">Log API Tester</Link>
            </Button>
            <Button asChild>
              <Link to="/service-test">Service API Tester</Link>
            </Button>
          </div>

          <footer className="text-center text-xs text-muted-foreground mt-4">
            © {new Date().getFullYear()} eCrate | Internal API Playground
          </footer>
        </CardContent>
      </Card>
    </div>
  );
}
