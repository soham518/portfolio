export default function Footer() {
  return (
    <footer className="border-t py-8 mt-16">
      <div className="container mx-auto px-6 text-sm text-muted-foreground flex items-center justify-between">
        <p>© {new Date().getFullYear()} Soham. All rights reserved.</p>
        <p>Built with Next.js & Tailwind</p>
      </div>
    </footer>
  );
}


