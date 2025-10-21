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
  useCrateQueue,
  useCrateStaging,
  useCrateCrating,
  useCrateCancel,
  useCrateArea,
  useCrateUpdateArea,
} from "@/query/useCrateQuery";

export default function CrateTestPage() {
  // Inputs
  const [serialNumber, setSerialNumber] = useState("");
  const [plant, setPlant] = useState("PEN001");
  const [type, setType] = useState("manual");
  const [areaGuid, setAreaGuid] = useState("A1B2C3D4");

  // Mutations
  const queueMutation = useCrateQueue();
  const stagingMutation = useCrateStaging();
  const cratingMutation = useCrateCrating();
  const cancelMutation = useCrateCancel();
  const updateAreaMutation = useCrateUpdateArea();

  // Query
  const areaQuery = useCrateArea({ plant });

  // Helper for JSON rendering
  const JsonView = ({ data }: { data: any }) => (
    <pre className="bg-gray-100 dark:bg-gray-800 rounded p-3 text-xs overflow-auto max-h-64">
      {JSON.stringify(data, null, 2)}
    </pre>
  );

  // Sample payloads
  const sampleCratingPayload = {
    areaGuid,
    plant,
    areaId: "A01",
    areaName: "Crate Area 1",
    cratingId: "C123",
    areaPic: null,
    areaStatus: 1,
    addDatetime: new Date().toISOString(),
    connectionId: "XYZ987",
  };

  const sampleCancelPayload = {
    logId: "L001",
    plant,
    cratingId: "C123",
    serialNumber,
    customerId: 5,
    model: "ABC",
    ntid: "faiz",
    name: "Syed Faiz",
    customer: "Jabil",
    division: "IE",
    status: "Cancelled",
    area: "Crate Area 1",
    logDatetime: new Date().toISOString(),
  };

  const sampleUpdateAreaPayload = {
    areaGuid,
    plant,
    areaId: "A01",
    areaName: "Crate Area Updated",
    cratingId: "C123",
    areaPic: null,
    areaStatus: 1,
    addDatetime: new Date().toISOString(),
    connectionId: "ABC123",
  };

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">📦 Crate API Testing</h1>
      <p className="text-gray-600">
        Test and verify all Crate-related endpoints interactively.
      </p>

      {/* 1️⃣ POST /crate/que */}
      <Card>
        <CardHeader>
          <CardTitle>POST /crate/que?serialNumber=</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <Input
            placeholder="Enter Serial Number"
            value={serialNumber}
            onChange={(e) => setSerialNumber(e.target.value)}
          />
          <Button
            onClick={() => queueMutation.mutate(serialNumber)}
            disabled={!serialNumber}
          >
            Queue Serial
          </Button>
          <Accordion type="single" collapsible className="mt-3">
            <AccordionItem value="queue">
              <AccordionTrigger>Response</AccordionTrigger>
              <AccordionContent>
                {queueMutation.isPending
                  ? "Submitting..."
                  : <JsonView data={queueMutation.data} />}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>
      </Card>

      {/* 2️⃣ POST /crate/staging */}
      <Card>
        <CardHeader>
          <CardTitle>POST /crate/staging?serialNumber=</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <Input
            placeholder="Enter Serial Number"
            value={serialNumber}
            onChange={(e) => setSerialNumber(e.target.value)}
          />
          <Button
            onClick={() => stagingMutation.mutate(serialNumber)}
            disabled={!serialNumber}
          >
            Mark as Staged
          </Button>
          <Accordion type="single" collapsible className="mt-3">
            <AccordionItem value="staging">
              <AccordionTrigger>Response</AccordionTrigger>
              <AccordionContent>
                {stagingMutation.isPending
                  ? "Submitting..."
                  : <JsonView data={stagingMutation.data} />}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>
      </Card>

      {/* 3️⃣ POST /crate/crating */}
      <Card>
        <CardHeader>
          <CardTitle>POST /crate/crating?serialNumber=</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <Input
            placeholder="Enter Serial Number"
            value={serialNumber}
            onChange={(e) => setSerialNumber(e.target.value)}
          />
          <Button
            onClick={() =>
              cratingMutation.mutate({
                serialNumber,
                payload: sampleCratingPayload,
              })
            }
            disabled={!serialNumber}
          >
            Create Crating Record
          </Button>
          <Accordion type="single" collapsible className="mt-3">
            <AccordionItem value="crating">
              <AccordionTrigger>Response</AccordionTrigger>
              <AccordionContent>
                {cratingMutation.isPending
                  ? "Submitting..."
                  : <JsonView data={cratingMutation.data} />}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>
      </Card>

      {/* 4️⃣ POST /crate/cancel */}
      <Card>
        <CardHeader>
          <CardTitle>POST /crate/cancel</CardTitle>
        </CardHeader>
        <CardContent>
          <Button
            onClick={() => cancelMutation.mutate(sampleCancelPayload)}
            disabled={!serialNumber}
          >
            Cancel Crating
          </Button>
          <Accordion type="single" collapsible className="mt-3">
            <AccordionItem value="cancel">
              <AccordionTrigger>Response</AccordionTrigger>
              <AccordionContent>
                {cancelMutation.isPending
                  ? "Submitting..."
                  : <JsonView data={cancelMutation.data} />}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>
      </Card>

      {/* 5️⃣ GET /crate/area */}
      <Card>
        <CardHeader>
          <CardTitle>GET /crate/area?plant=</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <Input
            placeholder="Enter Plant (e.g. PEN001)"
            value={plant}
            onChange={(e) => setPlant(e.target.value)}
          />
          <Button onClick={() => areaQuery.refetch()}>Fetch Areas</Button>
          <Accordion type="single" collapsible className="mt-3">
            <AccordionItem value="area">
              <AccordionTrigger>Response</AccordionTrigger>
              <AccordionContent>
                {areaQuery.isFetching
                  ? "Loading..."
                  : <JsonView data={areaQuery.data} />}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>
      </Card>

      {/* 6️⃣ PUT /crate/update/area */}
      <Card>
        <CardHeader>
          <CardTitle>PUT /crate/update/area?type=manual</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <Input
            placeholder="Enter Area GUID"
            value={areaGuid}
            onChange={(e) => setAreaGuid(e.target.value)}
          />
          <Input
            placeholder="Enter Type (e.g. manual)"
            value={type}
            onChange={(e) => setType(e.target.value)}
          />
          <Button
            onClick={() =>
              updateAreaMutation.mutate({
                type,
                payload: sampleUpdateAreaPayload,
              })
            }
          >
            Update Area
          </Button>
          <Accordion type="single" collapsible className="mt-3">
            <AccordionItem value="update">
              <AccordionTrigger>Response</AccordionTrigger>
              <AccordionContent>
                {updateAreaMutation.isPending
                  ? "Updating..."
                  : <JsonView data={updateAreaMutation.data} />}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>
      </Card>
    </div>
  );
}
