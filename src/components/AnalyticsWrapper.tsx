"use client"
import { Analytics } from 'react-lens-analytics'

export function AnalyticsWrapper() {
    return (
      <Analytics 
        projectId={process.env.NEXT_PUBLIC_PROJECT_SECRET!}
      />
    )
  }

export default AnalyticsWrapper
