import { Button } from '@repo/ui-shadcn/components/button';
import { Badge } from '@repo/ui-shadcn/components/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@repo/ui-shadcn/components/card';
import { Input } from '@repo/ui-shadcn/components/input';

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 bg-background p-8">
      <h1 className="text-4xl font-bold text-foreground">{'Online Admin'}</h1>

      <div className="flex gap-2">
        <Badge>{'Default'}</Badge>
        <Badge variant="secondary">{'Secondary'}</Badge>
        <Badge variant="destructive">{'Destructive'}</Badge>
        <Badge variant="outline">{'Outline'}</Badge>
      </div>

      <div className="flex gap-2">
        <Button>{'Primary'}</Button>
        <Button variant="secondary">{'Secondary'}</Button>
        <Button variant="outline">{'Outline'}</Button>
        <Button variant="destructive">{'Destructive'}</Button>
        <Button variant="ghost">{'Ghost'}</Button>
      </div>

      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle>{'Test Card'}</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-3">
          <Input placeholder="Type something..." />
          <Button className="w-full">{'Submit'}</Button>
        </CardContent>
      </Card>
    </main>
  );
}
