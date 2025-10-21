import React, { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import {
  useHistoryAll,
  useHistoryByPlant,
  useHistoryBySerialNumber,
  useHistoryByModel,
  useHistoryByCratingId,
  useHistoryByArea,
  useHistoryByCustomerId,
} from "@/query/useHistoryQuery";

export default function HistoryTestPage() {
  const [plant, setPlant] = useState("");
  const [serial, setSerial] = useState("");
  const [model, setModel] = useState("");
  const [cratingId, setCratingId] = useState("");
  const [areaGuid, setAreaGuid] = useState("");
  const [customerId, setCustomerId] = useState<number | "">("");

  const allQuery = useHistoryAll();
  const plantQuery = useHistoryByPlant(plant);
  const serialQuery = useHistoryBySerialNumber(serial);
  const modelQuery = useHistoryByModel(model);
  const cratingQuery = useHistoryByCratingId(cratingId);
  const areaQuery = useHistoryByArea(areaGuid);
  const customerQuery = useHistoryByCustomerId(Number(customerId));

  const JsonView = ({ data }: { data: any }) => (
    <pre className="bg-gray-100 dark:bg-gray-800 rounded p-3 text-xs overflow-auto max-h-64">
      {JSON.stringify(data, null, 2)}
    </pre>
  );

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">📜 History API Testing</h1>
      <p className="text-gray-600">
        Use this page to test all History endpoints interactively.
      </p>

      {/* 1️⃣ /history/all */}
      <Card>
        <CardHeader>
          <CardTitle>GET /history/all</CardTitle>
        </CardHeader>
        <CardContent>
          <Button onClick={() => allQuery.refetch()}>Fetch All</Button>
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

      {/* 2️⃣ /history/plant */}
      <Card>
        <CardHeader>
          <CardTitle>GET /history/plant?plant=</CardTitle>
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

      {/* 3️⃣ /history/serialNumber */}
      <Card>
        <CardHeader>
          <CardTitle>GET /history/serialNumber?serialNumber=</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <Input
            placeholder="Enter Serial Number"
            value={serial}
            onChange={(e) => setSerial(e.target.value)}
          />
          <Button onClick={() => serialQuery.refetch()} disabled={!serial}>
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

      {/* 4️⃣ /history/model */}
      <Card>
        <CardHeader>
          <CardTitle>GET /history/model?model=</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <Input
            placeholder="Enter model name"
            value={model}
            onChange={(e) => setModel(e.target.value)}
          />
          <Button onClick={() => modelQuery.refetch()} disabled={!model}>
            Fetch
          </Button>
          <Accordion type="single" collapsible>
            <AccordionItem value="model">
              <AccordionTrigger>Response</AccordionTrigger>
              <AccordionContent>
                {modelQuery.isFetching ? "Loading..." : <JsonView data={modelQuery.data} />}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>
      </Card>

      {/* 5️⃣ /history/cratingId */}
      <Card>
        <CardHeader>
          <CardTitle>GET /history/cratingId?cratingId=</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <Input
            placeholder="Enter Crating ID"
            value={cratingId}
            onChange={(e) => setCratingId(e.target.value)}
          />
          <Button onClick={() => cratingQuery.refetch()} disabled={!cratingId}>
            Fetch
          </Button>
          <Accordion type="single" collapsible>
            <AccordionItem value="crating">
              <AccordionTrigger>Response</AccordionTrigger>
              <AccordionContent>
                {cratingQuery.isFetching ? "Loading..." : <JsonView data={cratingQuery.data} />}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>
      </Card>

      {/* 6️⃣ /history/area */}
      <Card>
        <CardHeader>
          <CardTitle>GET /history/area?areaGuid=</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <Input
            placeholder="Enter Area GUID"
            value={areaGuid}
            onChange={(e) => setAreaGuid(e.target.value)}
          />
          <Button onClick={() => areaQuery.refetch()} disabled={!areaGuid}>
            Fetch
          </Button>
          <Accordion type="single" collapsible>
            <AccordionItem value="area">
              <AccordionTrigger>Response</AccordionTrigger>
              <AccordionContent>
                {areaQuery.isFetching ? "Loading..." : <JsonView data={areaQuery.data} />}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>
      </Card>

      {/* 7️⃣ /history/customerId */}
      <Card>
        <CardHeader>
          <CardTitle>GET /history/customerId?customerId=</CardTitle>
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
            <AccordionItem value="customer">
              <AccordionTrigger>Response</AccordionTrigger>
              <AccordionContent>
                {customerQuery.isFetching ? "Loading..." : <JsonView data={customerQuery.data} />}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>
      </Card>
    </div>
  );
}
