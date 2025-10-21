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
  useAuthLogin,
  useAuthLogout,
  useAuthDevice,
  useAuthUser,
} from "@/query/useAuthQuery";

export default function AuthTestPage() {
  // Inputs
  const [username, setUsername] = useState("faiz");
  const [password, setPassword] = useState("faiz123");
  const [uniqueCode, setUniqueCode] = useState("IE-01");
  const [type, setType] = useState("web");
  const [serialNumber, setSerialNumber] = useState("");
  const [ntid, setNtid] = useState("faiz");

  // Mutations
  const loginMutation = useAuthLogin();
  const logoutMutation = useAuthLogout();

  // Queries
  const deviceQuery = useAuthDevice(serialNumber);
  const userQuery = useAuthUser(ntid);

  // JSON formatter
  const JsonView = ({ data }: { data: any }) => (
    <pre className="bg-gray-100 dark:bg-gray-800 rounded p-3 text-xs overflow-auto max-h-64">
      {JSON.stringify(data, null, 2)}
    </pre>
  );

  // Sample payload
  const loginPayload = {
    username,
    password,
    uniqueCode,
    type,
  };

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">🔐 Auth API Testing</h1>
      <p className="text-gray-600">
        Validate all authentication endpoints interactively.
      </p>

      {/* 1️⃣ POST /auth/login */}
      <Card>
        <CardHeader>
          <CardTitle>POST /auth/login</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <Input
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            placeholder="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Input
            placeholder="Unique Code (optional)"
            value={uniqueCode}
            onChange={(e) => setUniqueCode(e.target.value)}
          />
          <Input
            placeholder="Type (web/device/etc)"
            value={type}
            onChange={(e) => setType(e.target.value)}
          />
          <Button onClick={() => loginMutation.mutate(loginPayload)}>
            Login
          </Button>
          <Accordion type="single" collapsible className="mt-3">
            <AccordionItem value="login">
              <AccordionTrigger>Response</AccordionTrigger>
              <AccordionContent>
                {loginMutation.isPending
                  ? "Logging in..."
                  : <JsonView data={loginMutation.data} />}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>
      </Card>

      {/* 2️⃣ GET /auth/logout */}
      <Card>
        <CardHeader>
          <CardTitle>GET /auth/logout</CardTitle>
        </CardHeader>
        <CardContent>
          <Button onClick={() => logoutMutation.mutate()}>Logout</Button>
          <Accordion type="single" collapsible className="mt-3">
            <AccordionItem value="logout">
              <AccordionTrigger>Response</AccordionTrigger>
              <AccordionContent>
                {logoutMutation.isPending
                  ? "Logging out..."
                  : "✅ Logout complete or no response body."}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>
      </Card>

      {/* 3️⃣ GET /auth/device */}
      <Card>
        <CardHeader>
          <CardTitle>GET /auth/device?serialNumber=</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <Input
            placeholder="Enter Serial Number"
            value={serialNumber}
            onChange={(e) => setSerialNumber(e.target.value)}
          />
          <Button
            onClick={() => deviceQuery.refetch()}
            disabled={!serialNumber}
          >
            Fetch Device Info
          </Button>
          <Accordion type="single" collapsible className="mt-3">
            <AccordionItem value="device">
              <AccordionTrigger>Response</AccordionTrigger>
              <AccordionContent>
                {deviceQuery.isFetching
                  ? "Loading..."
                  : <JsonView data={deviceQuery.data} />}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>
      </Card>

      {/* 4️⃣ GET /auth/user */}
      <Card>
        <CardHeader>
          <CardTitle>GET /auth/user?ntid=</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <Input
            placeholder="Enter NTID"
            value={ntid}
            onChange={(e) => setNtid(e.target.value)}
          />
          <Button onClick={() => userQuery.refetch()} disabled={!ntid}>
            Fetch User Info
          </Button>
          <Accordion type="single" collapsible className="mt-3">
            <AccordionItem value="user">
              <AccordionTrigger>Response</AccordionTrigger>
              <AccordionContent>
                {userQuery.isFetching
                  ? "Loading..."
                  : <JsonView data={userQuery.data} />}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>
      </Card>
    </div>
  );
}
