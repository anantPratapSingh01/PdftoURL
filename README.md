# 📄 README → PDF Converter (Next.js + Appwrite)

This project converts a **README file (text/markdown)** into a **PDF**, uploads it to **Appwrite Storage**, and returns a **public URL**.

---

## 🚀 Features
- Convert README / text to PDF
- Upload PDF to Appwrite
- Get shareable public URL
- Built with Next.js

---

## 🛠 Tech Stack
- Next.js
- Appwrite
- pdf-lib
- Node.js

---

## ⚙️ Appwrite Setup
1. Create an Appwrite project
2. Create a **Storage Bucket**
3. Enable **Read access: Any**
4. Note:
   - Project ID
   - Bucket ID
   - Endpoint

---

## 🔐 Environment Variables
Create `.env.local`:

```env
NEXT_PUBLIC_APPWRITE_ENDPOINT=https://cloud.appwrite.io/v1
NEXT_PUBLIC_APPWRITE_PROJECT_ID=your_project_id
NEXT_PUBLIC_APPWRITE_BUCKET_ID=your_bucket_id
