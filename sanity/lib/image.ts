import imageUrlBuilder from '@sanity/image-url'
import { client } from './client'

const builder = imageUrlBuilder(client)

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function urlFor(source: any) {
  return builder.image(source)
}

/**
 * Returns an optimized Sanity CDN URL:
 * - Resized to the requested width
 * - Converted to WebP automatically
 * - Compressed to quality 80
 * Falls back to the provided local path if no Sanity image is set.
 */
export function optimizedImg(
  image: { asset?: unknown } | null | undefined,
  fallback: string,
  width = 1200
): string {
  if (image?.asset) {
    return urlFor(image).width(width).format('webp').quality(80).url()
  }
  return fallback
}
