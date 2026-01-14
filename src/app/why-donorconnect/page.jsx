import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default function WhyDonorConnectPage() {
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
            <Link href="/about">
              <Button variant="ghost">About</Button>
            </Link>
            <Link href="/login">
              <Button>Get Started</Button>
            </Link>
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-16 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8">Why DonorConnect</h1>

        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Our Solution</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg mb-4">
                DonorConnect is a comprehensive donor retention platform that helps nonprofits track donor 
                information and donation history in one clear, organized system. Our platform solves the 
                critical "first-to-second gift" conversion problem by providing tools to identify at-risk 
                donors, track engagement, and automate follow-up workflows.
              </p>
              <p>
                We built DonorConnect because we saw nonprofits struggling with fragmented donor data and 
                missing opportunities to build lasting relationships. Our solution brings everything together 
                in one place, making it easy for staff to see the complete picture of each donor's journey 
                and take action to improve retention.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Key Features and Why We Chose Them</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-lg mb-2">Donor Management</h3>
                  <p>
                    We chose to build comprehensive donor profiles because complete information is essential 
                    for personalized outreach. Each donor profile includes contact information, giving history, 
                    and calculated retention risk metrics.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Donation Tracking</h3>
                  <p>
                    Linking donations directly to donors was critical because it enables automatic calculation 
                    of donor metrics (total gifts, total amount, first/last gift dates) and retention risk. 
                    This eliminates manual calculations and ensures data accuracy.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Retention Risk Calculation</h3>
                  <p>
                    We implemented automatic retention risk scoring because it helps staff prioritize which 
                    donors need immediate attention. The system analyzes giving patterns to identify high-risk 
                    donors who haven't given in a while or are first-time donors.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">AI-Powered Insights</h3>
                  <p>
                    We integrated AI to summarize donor activity and support planning decisions because it 
                    transforms raw data into actionable insights. Staff can quickly understand donor patterns 
                    and make informed decisions about outreach strategies.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Real-Time Dashboard</h3>
                  <p>
                    The dashboard provides instant visibility into key metrics because staff need to see the 
                    big picture at a glance. Total donors, donations, and lapsed donor counts help track 
                    organizational health and fundraising progress.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Challenges We Expected and How We Planned</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-lg mb-2">Data Accuracy</h3>
                  <p>
                    <strong>Challenge:</strong> Ensuring donation data accurately updates donor metrics<br />
                    <strong>Solution:</strong> We implemented database transactions so that when a donation is 
                    created, donor metrics are automatically recalculated and updated atomically, preventing 
                    data inconsistencies.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">User Authentication</h3>
                  <p>
                    <strong>Challenge:</strong> Securing the platform while keeping it easy to use<br />
                    <strong>Solution:</strong> We chose session-based authentication with HTTP-only cookies 
                    for better security than JWT tokens, while maintaining a simple login experience.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Scalability</h3>
                  <p>
                    <strong>Challenge:</strong> Building a system that can handle growing amounts of data<br />
                    <strong>Solution:</strong> We used PostgreSQL for reliable data storage, Prisma ORM for 
                    efficient database queries, and implemented pagination for all list views to ensure 
                    performance as data grows.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">AI Integration</h3>
                  <p>
                    <strong>Challenge:</strong> Making AI features useful and responsible<br />
                    <strong>Solution:</strong> We focused on specific use cases like donor activity summaries 
                    and planning support, with clear documentation of AI usage and safeguards to ensure 
                    responsible implementation.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>System Summary</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-lg mb-2">Pages</h3>
                  <ul className="list-disc list-inside space-y-1">
                    <li><strong>Home:</strong> Landing page with app overview and navigation</li>
                    <li><strong>About:</strong> Problem explanation and impact</li>
                    <li><strong>Why DonorConnect:</strong> Solution rationale and planning</li>
                    <li><strong>Dashboard:</strong> Summary metrics from database (total donors, donations, raised, lapsed)</li>
                    <li><strong>Donors:</strong> List of all donors with search and filtering</li>
                    <li><strong>Add Donor:</strong> Form to create new donors (data persists to database)</li>
                    <li><strong>Donations:</strong> List of all donations linked to donors</li>
                    <li><strong>Add Donation:</strong> Form to record new donations (linked to donors, updates metrics)</li>
                    <li><strong>AI Policy:</strong> Documentation of AI usage and safeguards</li>
                    <li><strong>Evidence:</strong> Assessment evidence and links</li>
                    <li><strong>Reflection:</strong> Learning and decision-making process</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Data Structure</h3>
                  <ul className="list-disc list-inside space-y-1">
                    <li><strong>Organizations:</strong> Multi-tenant support (one organization per user)</li>
                    <li><strong>Users:</strong> Staff members with role-based access (ADMIN, STAFF)</li>
                    <li><strong>Donors:</strong> Complete profiles with contact info, status, and calculated metrics</li>
                    <li><strong>Donations:</strong> Linked to donors and campaigns, with type and method tracking</li>
                    <li><strong>Campaigns:</strong> Fundraising campaigns that donations can be associated with</li>
                    <li><strong>Sessions:</strong> User authentication sessions with expiration</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="text-center pt-8">
            <Link href="/login">
              <Button size="lg">Start Using DonorConnect</Button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}
