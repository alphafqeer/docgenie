export function extractPlaceholders(text: string): string[] {
  if (!text) return [];
  const matches = text.match(/\[[^\]]+\]/g) || [];
  const uniq = Array.from(new Set(matches.filter((m) => m.length > 2)));
  return uniq.sort((a, b) => a.localeCompare(b));
}

export function applyFields(text: string, fields: Record<string, string>): string {
  if (!text) return text;
  let result = text;
  for (const key of Object.keys(fields)) {
    const val = fields[key];
    if (val === "" || val == null) continue; // keep placeholder
    // safe replace-all using split/join to avoid regex pitfalls
    result = result.split(key).join(val);
  }
  return result;
}
