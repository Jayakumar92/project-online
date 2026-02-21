export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-background p-8">
      <h1 className="text-4xl font-bold text-foreground">Online Admin</h1>
      <p className="mt-4 text-muted-foreground">
        Migrate content from <code className="font-mono">apps/admin</code> to this app.
      </p>
    </main>
  );
}
