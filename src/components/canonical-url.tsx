import Head from "next/head"
import { baseUrl } from "@/app/metadata"

interface CanonicalProps {
  path?: string
}

export function Canonical({ path = "" }: CanonicalProps) {
  const canonicalUrl = `${baseUrl}${path}`

  return (
    <Head>
      <link rel="canonical" href={canonicalUrl} />
    </Head>
  )
}

