import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default function ReflectionPage() {
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
            <Link href="/login">
              <Button>Login</Button>
            </Link>
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-16 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8">Reflection</h1>

        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>What Challenged Me the Most</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                Building DonorConnect presented several significant challenges that pushed my skills and 
                understanding of full-stack development.
              </p>
              <div>
                <h3 className="font-semibold text-lg mb-2">Database Transactions and Data Consistency</h3>
                <p>
                  The most challenging aspect was ensuring that when a donation is created, the donor's 
                  metrics (total gifts, total amount, retention risk) are automatically updated correctly. 
                  I learned to use Prisma transactions to ensure atomicity—either all updates succeed or 
                  none do, preventing data inconsistencies.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Session-Based Authentication</h3>
                <p>
                  Implementing secure session management with HTTP-only cookies and database-backed sessions 
                  was more complex than I initially expected. Understanding how to properly validate sessions 
                  in middleware, handle expiration, and manage cookie security settings required careful 
                  research and testing.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Next.js App Router Patterns</h3>
                <p>
                  Learning the differences between server components and client components, when to use each, 
                  and how to properly handle data fetching and form submissions in the App Router was a 
                  learning curve. Understanding the async nature of server components and how to structure 
                  API routes took time to master.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">AI Integration</h3>
                <p>
                  Integrating AI responsibly while maintaining data privacy and ensuring useful outputs 
                  required careful prompt engineering and understanding of API limitations. Balancing the 
                  benefits of AI with ethical considerations was an important learning experience.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>What I Would Change or Add</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                If I had more time, there are several features and improvements I would add to make 
                DonorConnect even more valuable:
              </p>
              <div>
                <h3 className="font-semibold text-lg mb-2">Enhanced Features:</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li><strong>Email Integration:</strong> Send automated thank-you emails when donations are recorded</li>
                  <li><strong>Donor Segmentation:</strong> Build advanced segmentation tools to group donors by criteria</li>
                  <li><strong>Campaign Management:</strong> More detailed campaign tracking with goal progress and analytics</li>
                  <li><strong>Reporting:</strong> Generate PDF reports for board meetings and donor communications</li>
                  <li><strong>Export Functionality:</strong> Export donor lists and donation reports to CSV/Excel</li>
                  <li><strong>Donor Notes/Interactions:</strong> Track all interactions with donors (calls, emails, meetings)</li>
                  <li><strong>Recurring Donations:</strong> Set up and manage recurring donation schedules</li>
                  <li><strong>Advanced Search:</strong> More sophisticated filtering and search capabilities</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Technical Improvements:</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li><strong>Testing:</strong> Add comprehensive unit and integration tests</li>
                  <li><strong>Performance:</strong> Implement caching for frequently accessed data</li>
                  <li><strong>Real-time Updates:</strong> Use WebSockets or Server-Sent Events for live dashboard updates</li>
                  <li><strong>Mobile Responsiveness:</strong> Improve mobile experience for all pages</li>
                  <li><strong>Accessibility:</strong> Enhance ARIA labels and keyboard navigation</li>
                  <li><strong>Error Handling:</strong> More detailed error messages and recovery options</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>What I Learned About Building Real Products</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold text-lg mb-2">Data Modeling Matters</h3>
                <p>
                  I learned that spending time upfront on database schema design pays off significantly. 
                  Getting the relationships right between donors, donations, and campaigns made everything 
                  else easier. Understanding how to calculate derived fields (like retention risk) and when 
                  to store vs. calculate them was crucial.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">User Experience is Critical</h3>
                <p>
                  Building features that work is only half the battle—making them intuitive and providing 
                  clear feedback (like success messages after form submission) makes the difference between 
                  a functional app and a usable product. Small details like loading states and error messages 
                  significantly impact user experience.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Security Can't Be an Afterthought</h3>
                <p>
                  Implementing authentication, authorization, and data validation from the start is essential. 
                  I learned the importance of validating all user inputs, checking permissions before operations, 
                  and never trusting client-side data. Session management and secure cookie handling are 
                  foundational, not optional.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">API Design Affects Everything</h3>
                <p>
                  Well-designed API routes make the frontend much easier to build. Consistent error handling, 
                  clear response formats, and proper HTTP status codes create a predictable interface that 
                  simplifies client-side code. I learned to think about API design from both the server and 
                  client perspectives.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Real Data Makes a Difference</h3>
                <p>
                  Using seed data with realistic scenarios (like different retention risk levels) helped me 
                  build and test features more effectively. Having actual data to work with made the development 
                  process smoother and helped identify issues earlier.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>How AI Helped (and Where It Didn't)</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold text-lg mb-2">Where AI Helped:</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li><strong>Code Generation:</strong> AI helped generate boilerplate code for components and API routes, 
                  saving time on repetitive tasks</li>
                  <li><strong>Debugging:</strong> When I encountered errors, AI helped explain error messages and suggest 
                  fixes, especially for Prisma and Next.js specific issues</li>
                  <li><strong>Architecture Decisions:</strong> AI provided insights on best practices for structuring 
                  Next.js apps, database design patterns, and authentication approaches</li>
                  <li><strong>Documentation:</strong> AI helped draft clear documentation and explanations for complex 
                  concepts</li>
                  <li><strong>Learning:</strong> When I didn't understand a concept, AI provided explanations and examples 
                  that helped me learn faster</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Where AI Didn't Help:</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li><strong>Project-Specific Logic:</strong> For business logic specific to donor retention calculations, 
                  I had to think through the requirements myself and implement the logic</li>
                  <li><strong>Integration Issues:</strong> When dealing with specific versions of libraries or framework 
                  quirks, AI sometimes provided outdated or incorrect information</li>
                  <li><strong>Testing:</strong> AI couldn't actually test the application—I had to manually test features 
                  and fix issues that only appeared at runtime</li>
                  <li><strong>Design Decisions:</strong> Choosing what features to prioritize and how to structure the 
                  user interface required understanding the problem domain, which AI couldn't fully grasp</li>
                  <li><strong>Database Queries:</strong> Complex queries with specific performance requirements needed 
                  careful consideration and testing that AI couldn't fully validate</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Key Takeaway:</h3>
                <p>
                  AI is an excellent tool for learning, generating boilerplate, and getting unstuck, but 
                  building a real product still requires deep understanding, careful testing, and thoughtful 
                  decision-making. AI accelerates development but doesn't replace the need for solid 
                  fundamentals and problem-solving skills.
                </p>
              </div>
            </CardContent>
          </Card>

          <div className="text-center pt-8">
            <Link href="/login">
              <Button size="lg">Explore DonorConnect</Button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}
