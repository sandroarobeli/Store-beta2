// Functions cannot be passed directly to Client Components because they're not serializable.
// So we serialize it here because this is not fetch and doesn't have res.json() method
export function convertDocumentToObject(doc) {
  doc._id = doc._id.toString();
  doc.createdAt = doc.createdAt.toString();
  doc.updatedAt = doc.updatedAt.toString();
  return doc;
}
