import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle } from "lucide-react"
import { generateMetadata } from "@/app/metadata"

// Export metadata for this page
export const metadata = generateMetadata({
  title: "Thank You | Message Received",
  description: "Your message has been received. I will get back to you as soon as possible.",
  path: "/thank-you",
})

export default function ThankYou() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background">
      <div className="container flex flex-col items-center justify-center gap-4 text-center">
        <CheckCircle className="h-24 w-24 text-primary" />
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">Thank You!</h1>
        <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
          Your message has been sent successfully. I'll get back to you as soon as possible.
        </p>
        <Button asChild className="mt-4">
          <Link href="/">Return to Homepage</Link>
        </Button>
      </div>
    </div>
  )
}

