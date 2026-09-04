// Local media storage helper to manage doctor portrait and clinical case images

export const MEDIA_KEYS = {
  HERO_DOCTOR: 'dra_katherine_hero_img',
  CASE_1: 'dra_katherine_case_1_img',
  CASE_2: 'dra_katherine_case_2_img',
  CASE_3: 'dra_katherine_case_3_img',
} as const;

export function getStoredMedia(key: string): string | null {
  try {
    return localStorage.getItem(key);
  } catch {
    return null;
  }
}

export function saveStoredMedia(key: string, dataUrl: string): void {
  try {
    localStorage.setItem(key, dataUrl);
    window.dispatchEvent(new Event('katherine-media-updated'));
  } catch (err) {
    console.warn('Storage limit or error saving media:', err);
  }
}

export function removeStoredMedia(key: string): void {
  try {
    localStorage.removeItem(key);
    window.dispatchEvent(new Event('katherine-media-updated'));
  } catch (err) {
    console.warn('Error removing media:', err);
  }
}

// Convert a File object to base64 DataURL
export function fileToDataUrl(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}
