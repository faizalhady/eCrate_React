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
import {
  useLogAll,
  useLogByPlant,
  useLogByStatus,
  useLogCancelStatus,
  useLogByCustomerId,
  useLogByCrateId,
  useLogBySerialNumber,
  useLogQueue,
} from "@/query/useLogQuery";

export default function LogTestPage() {
  const [plant, setPlant] = useState("");
  const [status, setStatus] = useState("");
  const [serialNumber, setSerialNumber] = useState("");
  const [customerId, setCustomerId] = useState<number | "">("");
  const [crateId, setCrateId] = useState("");

  // Queries (manual refetch mode)
  const allQuery = useLogAll();
  const plantQuery = useLogByPlant(plant);
  const statusQuery = useLogByStatus(status);
  const cancelQuery = useLogCancelStatus(serialNumber);
  const customerQuery = useLogByCustomerId(Number(customerId));
  const crateQuery = useLogByCrateId(crateId);
  const serialQuery = useLogBySerialNumber(serialNumber);
  const queueQuery = useLogQueue();

  const JsonView = ({ data }: { data: any }) => (
    <pre className="bg-gray-100 dark:bg-gray-800 rounded p-3 text-xs overflow-auto max-h-64">
      {JSON.stringify(data, null, 2)}
    </pre>
  );

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">🧾 Log API Testing</h1>
      <p className="text-gray-600">
        Test and inspect all available Log endpoints below.
      </p>

      {/* 1️⃣ /log/all */}
      <Card>
        <CardHeader>
          <CardTitle>GET /log/all</CardTitle>
        </CardHeader>
        <CardContent>
          <Button onClick={() => allQuery.refetch()}>Fetch All Logs</Button>
          <Accordion type="single" collapsible className="mt-3">
            <AccordionItem value="all">
              <AccordionTrigger>Response</AccordionTrigger>
              <AccordionContent>
                {allQuery.isFetching ? "Loading..." : <JsonView data={allQuery.data} />}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>
      </Card>

      {/* 2️⃣ /log/plant */}
      <Card>
        <CardHeader>
          <CardTitle>GET /log/plant?plant=</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <Input
            placeholder="Enter plant (e.g. PEN001)"
            value={plant}
            onChange={(e) => setPlant(e.target.value)}
          />
          <Button onClick={() => plantQuery.refetch()} disabled={!plant}>
            Fetch
          </Button>
          <Accordion type="single" collapsible>
            <AccordionItem value="plant">
              <AccordionTrigger>Response</AccordionTrigger>
              <AccordionContent>
                {plantQuery.isFetching ? "Loading..." : <JsonView data={plantQuery.data} />}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>
      </Card>

      {/* 3️⃣ /log/status */}
      <Card>
        <CardHeader>
          <CardTitle>GET /log/status?status=</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <Input
            placeholder="Enter status (e.g. Running, Completed)"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          />
          <Button onClick={() => statusQuery.refetch()} disabled={!status}>
            Fetch
          </Button>
          <Accordion type="single" collapsible>
            <AccordionItem value="status">
              <AccordionTrigger>Response</AccordionTrigger>
              <AccordionContent>
                {statusQuery.isFetching ? "Loading..." : <JsonView data={statusQuery.data} />}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>
      </Card>

      {/* 4️⃣ /log/status/cancel */}
      <Card>
        <CardHeader>
          <CardTitle>GET /log/status/cancel?serialNumber=</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <Input
            placeholder="Enter Serial Number to cancel"
            value={serialNumber}
            onChange={(e) => setSerialNumber(e.target.value)}
          />
          <Button onClick={() => cancelQuery.refetch()} disabled={!serialNumber}>
            Fetch
          </Button>
          <Accordion type="single" collapsible>
            <AccordionItem value="cancel">
              <AccordionTrigger>Response</AccordionTrigger>
              <AccordionContent>
                {cancelQuery.isFetching ? "Loading..." : <JsonView data={cancelQuery.data} />}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>
      </Card>

      {/* 5️⃣ /log/customerId */}
      <Card>
        <CardHeader>
          <CardTitle>GET /log/customerId?customerId=</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <Input
            type="number"
            placeholder="Enter Customer ID"
            value={customerId}
            onChange={(e) =>
              setCustomerId(e.target.value ? Number(e.target.value) : "")
            }
          />
          <Button onClick={() => customerQuery.refetch()} disabled={!customerId}>
            Fetch
          </Button>
          <Accordion type="single" collapsible>
            <AccordionItem value="customerId">
              <AccordionTrigger>Response</AccordionTrigger>
              <AccordionContent>
                {customerQuery.isFetching ? "Loading..." : <JsonView data={customerQuery.data} />}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>
      </Card>

      {/* 6️⃣ /log/crateId */}
      <Card>
        <CardHeader>
          <CardTitle>GET /log/crateId?crateId=</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <Input
            placeholder="Enter Crate ID"
            value={crateId}
            onChange={(e) => setCrateId(e.target.value)}
          />
          <Button onClick={() => crateQuery.refetch()} disabled={!crateId}>
            Fetch
          </Button>
          <Accordion type="single" collapsible>
            <AccordionItem value="crateId">
              <AccordionTrigger>Response</AccordionTrigger>
              <AccordionContent>
                {crateQuery.isFetching ? "Loading..." : <JsonView data={crateQuery.data} />}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>
      </Card>

      {/* 7️⃣ /log/serialNumber */}
      <Card>
        <CardHeader>
          <CardTitle>GET /log/serialNumber?serialNumber=</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <Input
            placeholder="Enter Serial Number"
            value={serialNumber}
            onChange={(e) => setSerialNumber(e.target.value)}
          />
          <Button onClick={() => serialQuery.refetch()} disabled={!serialNumber}>
            Fetch
          </Button>
          <Accordion type="single" collapsible>
            <AccordionItem value="serial">
              <AccordionTrigger>Response</AccordionTrigger>
              <AccordionContent>
                {serialQuery.isFetching ? "Loading..." : <JsonView data={serialQuery.data} />}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>
      </Card>

      {/* 8️⃣ /log/que */}
      <Card>
        <CardHeader>
          <CardTitle>GET /log/que</CardTitle>
        </CardHeader>
        <CardContent>
          <Button onClick={() => queueQuery.refetch()}>Fetch Queue</Button>
          <Accordion type="single" collapsible className="mt-3">
            <AccordionItem value="queue">
              <AccordionTrigger>Response</AccordionTrigger>
              <AccordionContent>
                {queueQuery.isFetching ? "Loading..." : <JsonView data={queueQuery.data} />}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>
      </Card>
    </div>
  );
}
