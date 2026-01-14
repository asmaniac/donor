import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="border-b bg-white">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/">
            <h1 className="text-2xl font-bold text-gray-900">DonorConnect</h1>
          </Link>
          <div className="flex gap-4">
            <Link href="/">
              <Button variant="ghost">Home</Button>
            </Link>
            <Link href="/why-donorconnect">
              <Button variant="ghost">Why DonorConnect</Button>
            </Link>
            <Link href="/login">
              <Button>Get Started</Button>
            </Link>
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-16 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8">The Problem</h1>

        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Problem Explained</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-lg">
                Nonprofits struggle to track donor information and donation history in one clear, organized system. 
                This leads to missed follow-ups, poor reporting, and lost funding opportunities.
              </p>
              <p>
                Many nonprofits rely on spreadsheets, email inboxes, or multiple disconnected systems to manage 
                their donor relationships. This fragmented approach makes it nearly impossible to get a complete 
                picture of donor engagement, identify retention risks, or make data-driven decisions about 
                fundraising strategies.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Why This Problem Matters</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                For nonprofits, donor retention is critical to financial sustainability. Research shows that 
                converting a first-time donor to a second-time donor is one of the biggest challenges in 
                nonprofit fundraising. Without proper tracking and follow-up systems, organizations lose 
                valuable donors simply because they can't identify who needs attention or when.
              </p>
              <p>
                This problem directly impacts an organization's ability to:
              </p>
              <ul className="list-disc list-inside mt-4 space-y-2">
                <li>Maintain consistent funding streams</li>
                <li>Build long-term relationships with supporters</li>
                <li>Demonstrate impact to stakeholders</li>
                <li>Plan and execute effective fundraising campaigns</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Who Is Affected</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                This problem affects everyone involved in nonprofit operations:
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li><strong>Nonprofit staff</strong> who waste time searching for donor information across multiple systems</li>
                <li><strong>Development directors</strong> who can't make informed decisions without complete data</li>
                <li><strong>Donors</strong> who receive inconsistent communication or are contacted at the wrong times</li>
                <li><strong>Organizations</strong> that lose funding opportunities due to poor donor management</li>
                <li><strong>Beneficiaries</strong> who suffer when organizations can't maintain stable funding</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>What Happens If Not Solved</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                Without a solution, nonprofits will continue to:
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>Lose donors due to lack of follow-up and engagement</li>
                <li>Miss opportunities to convert first-time donors into repeat supporters</li>
                <li>Waste staff time on manual data entry and searching for information</li>
                <li>Make fundraising decisions based on incomplete or inaccurate data</li>
                <li>Struggle to demonstrate impact and maintain donor relationships</li>
                <li>Face financial instability due to inconsistent funding streams</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>How DonorConnect Is Different</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                Unlike generic CRM systems or spreadsheets, DonorConnect is specifically designed for nonprofit 
                donor retention. Our platform:
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li><strong>Automatically calculates retention risk</strong> based on giving patterns, helping staff prioritize outreach</li>
                <li><strong>Links donations directly to donors</strong> in one unified system, eliminating data fragmentation</li>
                <li><strong>Provides real-time dashboards</strong> showing key metrics like total donors, donations, and lapsed donors</li>
                <li><strong>Uses AI to summarize donor activity</strong> and support planning decisions, making data actionable</li>
                <li><strong>Focuses on the critical "first-to-second gift" conversion</strong> with built-in workflows and alerts</li>
              </ul>
              <p className="mt-4">
                DonorConnect transforms donor management from a reactive task into a proactive strategy for 
                building lasting donor relationships.
              </p>
            </CardContent>
          </Card>

          <div className="text-center pt-8">
            <Link href="/login">
              <Button size="lg">Get Started with DonorConnect</Button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}
