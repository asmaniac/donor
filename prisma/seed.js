// Seed script for DonorConnect database
// Creates realistic test data: organizations, users, donors, donations, campaigns, etc.

import prisma from './client.js'
import bcrypt from 'bcryptjs'

// Helper: Generate random date within range
function randomDate(start, end) {
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()))
}

// Helper: Pick random item from array
function randomItem(arr) {
  return arr[Math.floor(Math.random() * arr.length)]
}

async function main() {
  console.log('🌱 Starting seed...')

  // Clean existing data
  console.log('🧹 Cleaning existing data...')
  await prisma.activityLog.deleteMany()
  await prisma.workflowExecution.deleteMany()
  await prisma.workflow.deleteMany()
  await prisma.segmentMember.deleteMany()
  await prisma.segment.deleteMany()
  await prisma.task.deleteMany()
  await prisma.interaction.deleteMany()
  await prisma.donation.deleteMany()
  await prisma.campaign.deleteMany()
  await prisma.donor.deleteMany()
  await prisma.session.deleteMany()
  await prisma.user.deleteMany()
  await prisma.organization.deleteMany()

  // Hash password for all users
  const hashedPassword = await bcrypt.hash('password123', 12)

  // Create 1 Organization
  console.log('🏢 Creating organization...')
  const org = await prisma.organization.create({
    data: { name: 'Hope Foundation' }
  })

  // Create Users
  console.log('👥 Creating users...')
  const admin = await prisma.user.create({
    data: {
      email: 'admin@hopefoundation.org',
      password: hashedPassword,
      firstName: 'Sarah',
      lastName: 'Admin',
      role: 'ADMIN',
      organizationId: org.id
    }
  })

  const staff = await prisma.user.create({
    data: {
      email: 'staff@hopefoundation.org',
      password: hashedPassword,
      firstName: 'John',
      lastName: 'Smith',
      role: 'STAFF',
      organizationId: org.id
    }
  })

  console.log(`✅ Created 2 users`)

  // Create Campaigns
  console.log('📢 Creating campaigns...')
  const campaigns = await Promise.all([
    prisma.campaign.create({
      data: {
        name: 'Annual Fund 2024',
        description: 'Year-end annual fund drive',
        goal: 100000,
        startDate: new Date('2024-10-01'),
        endDate: new Date('2024-12-31'),
        type: 'Annual Fund',
        status: 'ACTIVE',
        organizationId: org.id
      }
    }),
    prisma.campaign.create({
      data: {
        name: 'Spring Gala 2024',
        description: 'Annual spring fundraising gala',
        goal: 50000,
        startDate: new Date('2024-04-01'),
        endDate: new Date('2024-05-15'),
        type: 'Event',
        status: 'COMPLETED',
        organizationId: org.id
      }
    }),
    prisma.campaign.create({
      data: {
        name: 'Monthly Giving Program',
        description: 'Sustaining donor program',
        goal: 25000,
        startDate: new Date('2024-01-01'),
        endDate: null,
        type: 'Recurring',
        status: 'ACTIVE',
        organizationId: org.id
      }
    })
  ])

  console.log(`✅ Created ${campaigns.length} campaigns`)

  // Create Donors with varied profiles
  console.log('💝 Creating donors...')

  const firstNames = ['James', 'Mary', 'John', 'Patricia', 'Robert', 'Jennifer', 'Michael', 'Linda', 'William', 'Elizabeth',
    'David', 'Barbara', 'Richard', 'Susan', 'Joseph', 'Jessica', 'Thomas', 'Sarah', 'Charles', 'Karen']
  const lastNames = ['Smith', 'Johnson', 'Williams', 'Brown', 'Jones', 'Garcia', 'Miller', 'Davis', 'Rodriguez', 'Martinez',
    'Hernandez', 'Lopez', 'Gonzalez', 'Wilson', 'Anderson', 'Thomas', 'Taylor', 'Moore', 'Jackson', 'Martin']
  const cities = ['New York', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix', 'Philadelphia', 'San Antonio', 'San Diego']
  const states = ['NY', 'CA', 'IL', 'TX', 'AZ', 'PA']

  const donors = []
  for (let i = 0; i < 20; i++) {
    const firstName = randomItem(firstNames)
    const lastName = randomItem(lastNames)

    const donor = await prisma.donor.create({
      data: {
        firstName,
        lastName,
        email: `${firstName.toLowerCase()}.${lastName.toLowerCase()}${i}@example.com`,
        phone: `+1-555-${String(Math.floor(Math.random() * 9000) + 1000)}`,
        address: `${Math.floor(Math.random() * 9999) + 1} Main St`,
        city: randomItem(cities),
        state: randomItem(states),
        zipCode: String(Math.floor(Math.random() * 90000) + 10000),
        status: 'ACTIVE',
        retentionRisk: 'UNKNOWN', // Will be updated based on donations
        organizationId: org.id
      }
    })
    donors.push(donor)
  }

  console.log(`✅ Created ${donors.length} donors`)

  // Create Donations with distribution:
  // - 40% first-time (1 donation, 60+ days ago) → HIGH risk
  // - 30% two-gift (2 donations) → MEDIUM risk
  // - 20% loyal (3-5 donations) → LOW risk
  // - 10% lapsed (1+ donation, 12+ months ago) → CRITICAL risk

  console.log('💰 Creating donations...')

  const now = new Date()
  const oneMonth = new Date(now); oneMonth.setMonth(oneMonth.getMonth() - 1)
  const twoMonths = new Date(now); twoMonths.setMonth(twoMonths.getMonth() - 2)
  const sixtyDays = new Date(now); sixtyDays.setDate(sixtyDays.getDate() - 60)
  const sixMonths = new Date(now); sixMonths.setMonth(sixMonths.getMonth() - 6)
  const twelveMonths = new Date(now); twelveMonths.setMonth(twelveMonths.getMonth() - 12)
  const eighteenMonths = new Date(now); eighteenMonths.setMonth(eighteenMonths.getMonth() - 18)

  let donationCount = 0

  // First-time donors (40%) - 1 donation, 60+ days ago, HIGH risk
  const firstTimeCount = Math.floor(donors.length * 0.4)
  for (let i = 0; i < firstTimeCount; i++) {
    const donor = donors[i]
    const amount = Math.floor(Math.random() * 400) + 50
    const date = randomDate(sixtyDays, sixMonths)
    const campaign = randomItem(campaigns)

    await prisma.donation.create({
      data: {
        donorId: donor.id,
        campaignId: campaign.id,
        amount,
        date,
        type: 'ONE_TIME',
        method: randomItem(['Credit Card', 'Check', 'PayPal', 'Wire'])
      }
    })

    await prisma.donor.update({
      where: { id: donor.id },
      data: {
        totalGifts: 1,
        totalAmount: amount,
        firstGiftDate: date,
        lastGiftDate: date,
        retentionRisk: 'HIGH'
      }
    })
    donationCount++
  }

  // Two-gift donors (30%) - 2 donations, MEDIUM risk
  const twoGiftStart = firstTimeCount
  const twoGiftEnd = Math.floor(donors.length * 0.7)
  for (let i = twoGiftStart; i < twoGiftEnd; i++) {
    const donor = donors[i]
    const campaign = randomItem(campaigns)

    // First donation (older)
    const amount1 = Math.floor(Math.random() * 300) + 50
    const date1 = randomDate(sixMonths, twelveMonths)

    await prisma.donation.create({
      data: {
        donorId: donor.id,
        campaignId: campaign.id,
        amount: amount1,
        date: date1,
        type: 'ONE_TIME',
        method: randomItem(['Credit Card', 'Check', 'PayPal'])
      }
    })

    // Second donation (recent)
    const amount2 = Math.floor(Math.random() * 300) + 50
    const date2 = randomDate(twoMonths, oneMonth)

    await prisma.donation.create({
      data: {
        donorId: donor.id,
        campaignId: campaign.id,
        amount: amount2,
        date: date2,
        type: 'ONE_TIME',
        method: randomItem(['Credit Card', 'Check', 'PayPal'])
      }
    })

    await prisma.donor.update({
      where: { id: donor.id },
      data: {
        totalGifts: 2,
        totalAmount: amount1 + amount2,
        firstGiftDate: date1,
        lastGiftDate: date2,
        retentionRisk: 'MEDIUM'
      }
    })
    donationCount += 2
  }

  // Loyal donors (20%) - 3-5 donations, LOW risk
  const loyalStart = twoGiftEnd
  const loyalEnd = Math.floor(donors.length * 0.9)
  for (let i = loyalStart; i < loyalEnd; i++) {
    const donor = donors[i]
    const campaign = randomItem(campaigns)
    const numDonations = Math.floor(Math.random() * 3) + 3 // 3-5 donations

    let totalAmount = 0
    let firstDate = null
    let lastDate = null

    for (let j = 0; j < numDonations; j++) {
      const amount = Math.floor(Math.random() * 500) + 100
      const monthsAgo = Math.floor(Math.random() * 12) + 1
      const date = new Date(now)
      date.setMonth(date.getMonth() - monthsAgo)

      await prisma.donation.create({
        data: {
          donorId: donor.id,
          campaignId: campaign.id,
          amount,
          date,
          type: j % 3 === 0 ? 'RECURRING' : 'ONE_TIME',
          method: randomItem(['Credit Card', 'Check', 'PayPal', 'Wire'])
        }
      })

      totalAmount += amount
      if (!firstDate || date < firstDate) firstDate = date
      if (!lastDate || date > lastDate) lastDate = date
      donationCount++
    }

    await prisma.donor.update({
      where: { id: donor.id },
      data: {
        totalGifts: numDonations,
        totalAmount,
        firstGiftDate: firstDate,
        lastGiftDate: lastDate,
        retentionRisk: 'LOW'
      }
    })
  }

  // Lapsed donors (10%) - 1+ donation, 12+ months ago, CRITICAL risk
  const lapsedStart = loyalEnd
  for (let i = lapsedStart; i < donors.length; i++) {
    const donor = donors[i]
    const campaign = randomItem(campaigns)

    const amount = Math.floor(Math.random() * 500) + 100
    const date = randomDate(twelveMonths, eighteenMonths)

    await prisma.donation.create({
      data: {
        donorId: donor.id,
        campaignId: campaign.id,
        amount,
        date,
        type: 'ONE_TIME',
        method: randomItem(['Credit Card', 'Check'])
      }
    })

    await prisma.donor.update({
      where: { id: donor.id },
      data: {
        totalGifts: 1,
        totalAmount: amount,
        firstGiftDate: date,
        lastGiftDate: date,
        retentionRisk: 'CRITICAL',
        status: 'LAPSED'
      }
    })
    donationCount++
  }

  console.log(`✅ Created ${donationCount} donations`)

  console.log('\n🎉 Seed completed successfully!')
  console.log('\n📊 Summary:')
  console.log(`   - ${await prisma.organization.count()} organization`)
  console.log(`   - ${await prisma.user.count()} users`)
  console.log(`   - ${await prisma.donor.count()} donors`)
  console.log(`   - ${await prisma.donation.count()} donations`)
  console.log(`   - ${await prisma.campaign.count()} campaigns`)
  console.log('\n👤 Test Login:')
  console.log('   Email: admin@hopefoundation.org')
  console.log('   Password: password123')
}

main()
  .catch((e) => {
    console.error('❌ Seed error:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
