import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function AuthTestPage() {
  return (
    <div className="p-6 max-w-3xl mx-auto">
      <Card>
        <CardHeader>
          <CardTitle>🔐 Auth API Testing</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm text-muted-foreground">
            Use this page to test login, logout, user lookups, and device queries.
          </p>

          <div className="flex gap-2 flex-wrap">
            {/* These buttons are placeholders for you to wire up actual test calls */}
            <Button>Test Login</Button>
            <Button>Test Logout</Button>
            <Button>Fetch User</Button>
            <Button>Fetch Device</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
