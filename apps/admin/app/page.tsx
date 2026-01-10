'use client';

import { APP_NAME_VALID } from '@repo/core/validations';
import { API_FEATURES_AUTH } from '@repo/features/auth/api';
import { useAppStore } from '@repo/store';
import { ifObjectExist } from '@repo/utils/collections';
import { Button, Card, CardContent, CardDescription, CardHeader, CardTitle, Input, Badge } from '@repo/ui';

export default function Home() {
  const theme = useAppStore((state) => state.theme);
  return (
    <div className="flex min-h-screen items-center justify-center font-sans">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between px-16 py-32 sm:items-start">
        <div className="mt-8 flex flex-col items-center gap-4 w-full">
          <div className="flex flex-col gap-2 text-center">
            <h1>{APP_NAME_VALID}</h1>
          </div>
          <p>{ifObjectExist({ name: 'John Doe' }) + '' + theme}</p>
          <h3>{API_FEATURES_AUTH}</h3>
          
          {/* Example UI components from @repo/ui */}
          <Card className="w-full max-w-md mt-8">
            <CardHeader>
              <CardTitle>Admin Dashboard</CardTitle>
              <CardDescription>
                Using components from @repo/ui library
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Input placeholder="Enter your name" />
                <Input placeholder="Enter your email" type="email" />
              </div>
              <div className="flex gap-2 items-center">
                <Button>Save Changes</Button>
                <Button variant="outline">Cancel</Button>
                <Badge variant="secondary">Active</Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
