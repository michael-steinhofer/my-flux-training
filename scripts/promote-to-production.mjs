/**
 * Promotes the staging dataset to production.
 * Exports staging → imports into production (replacing all content).
 *
 * Usage:
 *   npm run promote
 */

import { execSync } from 'child_process'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const exportFile = path.join(__dirname, '../.staging-export.tar.gz')

console.log('\n🚀 Promoting staging → production\n')

try {
  // Step 1: Export staging
  console.log('📦 Exporting staging dataset...')
  execSync(`npx sanity dataset export staging "${exportFile}"`, {
    stdio: 'inherit',
    cwd: path.join(__dirname, '..'),
  })

  // Step 2: Import into production
  console.log('\n⬆️  Importing into production dataset...')
  execSync(`npx sanity dataset import "${exportFile}" production --replace`, {
    stdio: 'inherit',
    cwd: path.join(__dirname, '..'),
  })

  console.log('\n✅ Done! Staging content is now live in production.\n')
} finally {
  // Clean up temp file
  if (fs.existsSync(exportFile)) {
    fs.unlinkSync(exportFile)
  }
}
