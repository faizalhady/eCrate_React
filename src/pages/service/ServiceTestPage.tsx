import React, { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { useServiceStatus } from "@/query/useServiceQuery";

export default function ServiceTestPage() {
  // Input
  const [serviceName, setServiceName] = useState("WorkerService");

  // Query
  const serviceQuery = useServiceStatus(serviceName);

  // JSON Renderer
  const JsonView = ({ data }: { data: any }) => (
    <pre className="bg-gray-100 dark:bg-gray-800 rounded p-3 text-xs overflow-auto max-h-64">
      {JSON.stringify(data, null, 2)}
    </pre>
  );

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">🧠 Service API Testing</h1>
      <p className="text-gray-600">
        Check and monitor the current status of backend services.
      </p>

      {/* 1️⃣ GET /service/status */}
      <Card>
        <CardHeader>
          <CardTitle>GET /service/status?serviceName=</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <Input
            placeholder="Enter Service Name (e.g. WorkerService)"
            value={serviceName}
            onChange={(e) => setServiceName(e.target.value)}
          />
          <div className="flex gap-2">
            <Button onClick={() => serviceQuery.refetch()} disabled={!serviceName}>
              Check Status
            </Button>
            <Button
              variant="secondary"
              onClick={() => {
                serviceQuery.refetch();
              }}
            >
              Refresh
            </Button>
          </div>

          <Accordion type="single" collapsible className="mt-3">
            <AccordionItem value="status">
              <AccordionTrigger>Response</AccordionTrigger>
              <AccordionContent>
                {serviceQuery.isFetching
                  ? "Checking service..."
                  : <JsonView data={serviceQuery.data} />}
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          {/* Optional Auto-refresh Info */}
          <p className="text-xs text-gray-500">
            ⏱ Auto-refreshing every 5 seconds
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
