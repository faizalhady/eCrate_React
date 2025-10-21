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
  useDataCustomer,
  useDataPlant,
  useDataVendor,
  useDataUser,
  useDataNewUser,
  useDataUpdateUser,
  useDataNewArea,
  useDataUpdateSettingArea,
  useDataDeleteArea,
  useDataGetTestArea,
} from "@/query/useDataQuery";

export default function DataTestPage() {
  // Input states
  const [customerId, setCustomerId] = useState<number | "">("");
  const [vendorId, setVendorId] = useState<number | "">("");
  const [userRole, setUserRole] = useState("");
  const [areaGuid, setAreaGuid] = useState("");
  const [deleteGuid, setDeleteGuid] = useState("");

  // Queries
  const customerQuery = useDataCustomer(Number(customerId) || 0);
  const plantQuery = useDataPlant();
  const vendorQuery = useDataVendor(Number(vendorId) || 0);
  const userQuery = useDataUser(userRole ? { role: userRole } : undefined);

  // Mutations
  const newUser = useDataNewUser();
  const updateUser = useDataUpdateUser();
  const newArea = useDataNewArea();
  const updateArea = useDataUpdateSettingArea();
  const deleteArea = useDataDeleteArea();
  const getTestArea = useDataGetTestArea();

  // JSON display helper
  const JsonView = ({ data }: { data: any }) => (
    <pre className="bg-gray-100 dark:bg-gray-800 rounded p-3 text-xs overflow-auto max-h-64">
      {JSON.stringify(data, null, 2)}
    </pre>
  );

  // Dummy payload templates for quick testing
  const sampleUserPayload = [
    {
      userId: "U001",
      customerId: 1,
      userNtid: "faiz",
      userName: "Syed Faiz Alhady",
      userRole: "admin",
      userUniqueCode: "IE-DEV-01",
      userEmail: "faiz@jabil.com",
      userAddedBy: "system",
      userAddedWhen: new Date().toISOString(),
      userIsActive: 1,
    },
  ];

  const sampleAreaPayload = {
    areaGuid: "A1B2C3D4",
    plant: "PEN001",
    areaId: "A01",
    areaName: "Crate Area 1",
    cratingId: "C123",
    areaPic: null,
    areaStatus: 1,
    addDatetime: new Date().toISOString(),
    connectionId: "XYZ987",
  };

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">🧩 Data API Testing</h1>
      <p className="text-gray-600">
        Test and verify all /data endpoints interactively.
      </p>

      {/* 1️⃣ /data/customer */}
      <Card>
        <CardHeader>
          <CardTitle>GET /data/customer?id=</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <Input
            type="number"
            placeholder="Enter Customer ID (0 = all)"
            value={customerId}
            onChange={(e) =>
              setCustomerId(e.target.value ? Number(e.target.value) : "")
            }
          />
          <Button onClick={() => customerQuery.refetch()}>Fetch</Button>
          <Accordion type="single" collapsible>
            <AccordionItem value="customer">
              <AccordionTrigger>Response</AccordionTrigger>
              <AccordionContent>
                {customerQuery.isFetching ? "Loading..." : (
                  <JsonView data={customerQuery.data} />
                )}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>
      </Card>

      {/* 2️⃣ /data/plant */}
      <Card>
        <CardHeader>
          <CardTitle>GET /data/plant</CardTitle>
        </CardHeader>
        <CardContent>
          <Button onClick={() => plantQuery.refetch()}>Fetch</Button>
          <Accordion type="single" collapsible className="mt-3">
            <AccordionItem value="plant">
              <AccordionTrigger>Response</AccordionTrigger>
              <AccordionContent>
                {plantQuery.isFetching ? "Loading..." : (
                  <JsonView data={plantQuery.data} />
                )}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>
      </Card>

      {/* 3️⃣ /data/vendor */}
      <Card>
        <CardHeader>
          <CardTitle>GET /data/vendor?id=</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <Input
            type="number"
            placeholder="Enter Vendor ID (0 = all)"
            value={vendorId}
            onChange={(e) =>
              setVendorId(e.target.value ? Number(e.target.value) : "")
            }
          />
          <Button onClick={() => vendorQuery.refetch()}>Fetch</Button>
          <Accordion type="single" collapsible>
            <AccordionItem value="vendor">
              <AccordionTrigger>Response</AccordionTrigger>
              <AccordionContent>
                {vendorQuery.isFetching ? "Loading..." : (
                  <JsonView data={vendorQuery.data} />
                )}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>
      </Card>

      {/* 4️⃣ /data/user */}
      <Card>
        <CardHeader>
          <CardTitle>GET /data/user?role=</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <Input
            placeholder="Enter role (e.g. admin)"
            value={userRole}
            onChange={(e) => setUserRole(e.target.value)}
          />
          <Button onClick={() => userQuery.refetch()} disabled={!userRole}>
            Fetch
          </Button>
          <Accordion type="single" collapsible>
            <AccordionItem value="user">
              <AccordionTrigger>Response</AccordionTrigger>
              <AccordionContent>
                {userQuery.isFetching ? "Loading..." : (
                  <JsonView data={userQuery.data} />
                )}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>
      </Card>

      {/* 5️⃣ POST /data/new/user */}
      <Card>
        <CardHeader>
          <CardTitle>POST /data/new/user</CardTitle>
        </CardHeader>
        <CardContent>
          <Button onClick={() => newUser.mutate(sampleUserPayload)}>
            Create Sample User
          </Button>
          <Accordion type="single" collapsible className="mt-3">
            <AccordionItem value="newUser">
              <AccordionTrigger>Response</AccordionTrigger>
              <AccordionContent>
                {newUser.isPending
                  ? "Submitting..."
                  : <JsonView data={newUser.data} />}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>
      </Card>

      {/* 6️⃣ PUT /data/update/user */}
      <Card>
        <CardHeader>
          <CardTitle>PUT /data/update/user</CardTitle>
        </CardHeader>
        <CardContent>
          <Button
            onClick={() =>
              updateUser.mutate({
                ...sampleUserPayload[0],
                userName: "Syed Faiz (Updated)",
              })
            }
          >
            Update Sample User
          </Button>
          <Accordion type="single" collapsible className="mt-3">
            <AccordionItem value="updateUser">
              <AccordionTrigger>Response</AccordionTrigger>
              <AccordionContent>
                {updateUser.isPending
                  ? "Updating..."
                  : <JsonView data={updateUser.data} />}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>
      </Card>

      {/* 7️⃣ POST /data/new/area */}
      <Card>
        <CardHeader>
          <CardTitle>POST /data/new/area</CardTitle>
        </CardHeader>
        <CardContent>
          <Button onClick={() => newArea.mutate(sampleAreaPayload)}>
            Create New Area
          </Button>
          <Accordion type="single" collapsible className="mt-3">
            <AccordionItem value="newArea">
              <AccordionTrigger>Response</AccordionTrigger>
              <AccordionContent>
                {newArea.isPending
                  ? "Submitting..."
                  : <JsonView data={newArea.data} />}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>
      </Card>

      {/* 8️⃣ PUT /data/update/setting/area */}
      <Card>
        <CardHeader>
          <CardTitle>PUT /data/update/setting/area</CardTitle>
        </CardHeader>
        <CardContent>
          <Button
            onClick={() =>
              updateArea.mutate({
                ...sampleAreaPayload,
                areaName: "Crate Area Updated",
              })
            }
          >
            Update Area
          </Button>
          <Accordion type="single" collapsible className="mt-3">
            <AccordionItem value="updateArea">
              <AccordionTrigger>Response</AccordionTrigger>
              <AccordionContent>
                {updateArea.isPending
                  ? "Updating..."
                  : <JsonView data={updateArea.data} />}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>
      </Card>

      {/* 9️⃣ DELETE /data/delete/area */}
      <Card>
        <CardHeader>
          <CardTitle>DELETE /data/delete/area?areaGuid=</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <Input
            placeholder="Enter Area GUID"
            value={deleteGuid}
            onChange={(e) => setDeleteGuid(e.target.value)}
          />
          <Button onClick={() => deleteArea.mutate(deleteGuid)} disabled={!deleteGuid}>
            Delete Area
          </Button>
          <Accordion type="single" collapsible>
            <AccordionItem value="deleteArea">
              <AccordionTrigger>Response</AccordionTrigger>
              <AccordionContent>
                {deleteArea.isPending
                  ? "Deleting..."
                  : <JsonView data={deleteArea.data} />}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>
      </Card>

      {/* 🔟 POST /data/getTest/area */}
      <Card>
        <CardHeader>
          <CardTitle>POST /data/getTest/area</CardTitle>
        </CardHeader>
        <CardContent>
          <Button onClick={() => getTestArea.mutate(sampleAreaPayload)}>
            Send Test Payload
          </Button>
          <Accordion type="single" collapsible className="mt-3">
            <AccordionItem value="getTestArea">
              <AccordionTrigger>Response</AccordionTrigger>
              <AccordionContent>
                {getTestArea.isPending
                  ? "Loading..."
                  : <JsonView data={getTestArea.data} />}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>
      </Card>
    </div>
  );
}
