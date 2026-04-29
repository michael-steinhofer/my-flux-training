import { createClient } from '@sanity/client'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const imagesDir = path.join(__dirname, '../public/images')

const client = createClient({
  projectId: 'xtee9d7c',
  dataset: 'production',
  apiVersion: '2026-04-29',
  token: 'skKTgKf5S32ZcSxMLONJYajFSYmhROrOBiiEHzAJkBl92M0dcALjfrTYhvI3l9SfudMqPYrm9FyU8NG8r',
  useCdn: false,
})

async function uploadImage(filename) {
  const filepath = path.join(imagesDir, filename)
  const stream = fs.createReadStream(filepath)
  const asset = await client.assets.upload('image', stream, { filename })
  console.log(`  ✓ Uploaded ${filename} → ${asset._id}`)
  return asset._id
}

function imageRef(assetId) {
  return { _type: 'image', asset: { _type: 'reference', _ref: assetId } }
}

async function main() {
  console.log('\n📦 Fetching documents...')

  const [services, newsItems, testimonials, portfolioProjects, siteSettings] = await Promise.all([
    client.fetch(`*[_type == "service"] | order(order asc) { _id, name }`),
    client.fetch(`*[_type == "newsItem"] | order(order asc) { _id }`),
    client.fetch(`*[_type == "testimonial"] | order(order asc) { _id, name }`),
    client.fetch(`*[_type == "portfolioProject"] | order(order asc) { _id, title }`),
    client.fetch(`*[_type == "siteSettings"][0] { _id }`),
  ])

  // ── Services ──────────────────────────────────────────────────────────────
  console.log('\n🖼  Uploading service images...')
  for (let i = 0; i < services.length; i++) {
    const assetId = await uploadImage(`service-${i + 1}.webp`)
    await client.patch(services[i]._id).set({ image: imageRef(assetId) }).commit()
    console.log(`  ↳ Patched: ${services[i].name}`)
  }

  // ── News items ────────────────────────────────────────────────────────────
  console.log('\n🖼  Uploading news images...')
  for (let i = 0; i < newsItems.length; i++) {
    const assetId = await uploadImage(`news-${i + 1}.webp`)
    await client.patch(newsItems[i]._id).set({ image: imageRef(assetId) }).commit()
    console.log(`  ↳ Patched: news item ${i + 1}`)
  }

  // ── Testimonial logos ─────────────────────────────────────────────────────
  console.log('\n🖼  Uploading testimonial logos...')
  const logoDims = [
    { width: 138, height: 19 },
    { width: 143, height: 19 },
    { width: 109, height: 31 },
    { width: 81, height: 36 },
  ]
  for (let i = 0; i < testimonials.length; i++) {
    const assetId = await uploadImage(`testimonial-logo-${i + 1}.webp`)
    await client.patch(testimonials[i]._id).set({
      logo: { ...imageRef(assetId), ...logoDims[i] },
    }).commit()
    console.log(`  ↳ Patched: ${testimonials[i].name}`)
  }

  // ── Portfolio projects ────────────────────────────────────────────────────
  console.log('\n🖼  Uploading portfolio images...')
  for (let i = 0; i < portfolioProjects.length; i++) {
    const assetId = await uploadImage(`portfolio-${i + 1}.webp`)
    await client.patch(portfolioProjects[i]._id).set({ image: imageRef(assetId) }).commit()
    console.log(`  ↳ Patched: ${portfolioProjects[i].title}`)
  }

  // ── Site settings ─────────────────────────────────────────────────────────
  console.log('\n🖼  Uploading site settings images...')
  if (siteSettings?._id) {
    const [heroId, profileId, photographerId] = await Promise.all([
      uploadImage('hero.webp'),
      uploadImage('profile.webp'),
      uploadImage('photographer.webp'),
    ])
    await client.patch(siteSettings._id).set({
      heroImage: imageRef(heroId),
      profilePhoto: imageRef(profileId),
      photographerPhoto: imageRef(photographerId),
    }).commit()
    console.log('  ↳ Patched: site settings')
  }

  console.log('\n✅ All done! All images uploaded and linked in Sanity.\n')
}

main().catch(console.error)
