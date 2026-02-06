import { Preferences } from "@/lib/storage/preferences";

const DOCUMENTS_KEY = "docgenie_saved_documents";

export interface SavedDocument {
  id: string;
  title: string;
  templateId: string;
  category: string;
  content: string;
  createdAt: string;
  updatedAt: string;
  isPremium: boolean;
}

async function getDocuments(): Promise<SavedDocument[]> {
  try {
    const { value } = await Preferences.get({ key: DOCUMENTS_KEY });
    if (value) {
      return JSON.parse(value) as SavedDocument[];
    }
    return [];
  } catch {
    return [];
  }
}

async function saveDocuments(documents: SavedDocument[]): Promise<void> {
  await Preferences.set({
    key: DOCUMENTS_KEY,
    value: JSON.stringify(documents),
  });
}

export async function saveDocument(doc: Omit<SavedDocument, "id" | "createdAt" | "updatedAt">): Promise<SavedDocument> {
  const documents = await getDocuments();
  const now = new Date().toISOString();
  
  const newDoc: SavedDocument = {
    ...doc,
    id: `doc_${Date.now()}_${Math.random().toString(36).slice(2, 9)}`,
    createdAt: now,
    updatedAt: now,
  };
  
  documents.unshift(newDoc);
  await saveDocuments(documents);
  
  return newDoc;
}

export async function updateDocument(id: string, updates: Partial<SavedDocument>): Promise<SavedDocument | null> {
  const documents = await getDocuments();
  const index = documents.findIndex(d => d.id === id);
  
  if (index === -1) return null;
  
  documents[index] = {
    ...documents[index],
    ...updates,
    updatedAt: new Date().toISOString(),
  };
  
  await saveDocuments(documents);
  return documents[index];
}

export async function deleteDocument(id: string): Promise<boolean> {
  const documents = await getDocuments();
  const filtered = documents.filter(d => d.id !== id);
  
  if (filtered.length === documents.length) return false;
  
  await saveDocuments(filtered);
  return true;
}

export async function getDocumentById(id: string): Promise<SavedDocument | null> {
  const documents = await getDocuments();
  return documents.find(d => d.id === id) || null;
}

export async function getAllDocuments(): Promise<SavedDocument[]> {
  return getDocuments();
}

export async function getRecentDocuments(limit: number = 10): Promise<SavedDocument[]> {
  const documents = await getDocuments();
  return documents.slice(0, limit);
}

export async function getDocumentsByCategory(category: string): Promise<SavedDocument[]> {
  const documents = await getDocuments();
  return documents.filter(d => d.category === category);
}

export async function getDocumentCount(): Promise<number> {
  const documents = await getDocuments();
  return documents.length;
}

export async function clearAllDocuments(): Promise<void> {
  await Preferences.remove({ key: DOCUMENTS_KEY });
}
