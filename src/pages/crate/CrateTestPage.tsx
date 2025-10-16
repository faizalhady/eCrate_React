import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function CrateTestPage() {
  return (
    <div className="p-6 max-w-3xl mx-auto">
      <Card>
        <CardHeader>
          <CardTitle>📦 Crate API Testing</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm text-muted-foreground">
            Test crate flows: queue, staging, crating, cancel, update area and more.
          </p>

          <div className="flex gap-2 flex-wrap">
            <Button>Queue Serial</Button>
            <Button>Mark Staged</Button>
            <Button>Create Crating</Button>
            <Button>Cancel Crating</Button>
            <Button>Get Areas</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
