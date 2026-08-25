# CodeCPS — Internship & Certificate System

Ye README sirf **naye internship + certificate module** ke setup ke liye hai.
Baaki website (Home, About, Services, Blog, AI Assistant) already working hai —
usme koi change nahi kiya gaya, sirf naya feature add kiya gaya hai.

Project structure same hai:

```
tech/
├── client/     React + Vite frontend (Vercel par deploy hoga)
└── server/     Express + MongoDB backend (Vercel serverless functions)
```

---

## Kya naya add hua

**Backend (`server/`)**
- `POST  /api/internship/apply` — public, internship apply form
- `POST  /api/admin/login` — admin login (JWT)
- `GET   /api/internship/admin/all` — [protected] saari applications
- `PATCH /api/internship/admin/:id/status` — [protected] status update (applied → ongoing → completed → rejected)
- `POST  /api/internship/admin/:id/certificate` — [protected] certificate issue karo (status "completed" hone ke baad hi)
- `DELETE /api/internship/admin/:id` — [protected] application delete
- `GET   /api/certificate/verify/:certificateId` — public, certificate valid hai ya nahi check karo
- `GET   /api/certificate/:certificateId/download` — public, PDF certificate on-the-fly generate + download hota hai (QR code ke saath, koi cloud storage nahi chahiye)

**Frontend (`client/`)**
- `/internship` — apply form
- `/verify` and `/verify/:certificateId` — certificate verify page (QR scan yahi khulega)
- `/admin/login` — admin login
- `/admin/dashboard` — applications manage karo, status update karo, certificate issue karo

---

## 1. MongoDB Atlas Setup

1. [mongodb.com/atlas](https://www.mongodb.com/atlas) par free cluster banao.
2. Database user banao (username/password).
3. Network Access me `0.0.0.0/0` allow karo (ya Vercel ke IPs).
4. Connection string copy karo — kuch aisi dikhegi:
   ```
   mongodb+srv://<username>:<password>@cluster0.xxxxx.mongodb.net/codecps?retryWrites=true&w=majority
   ```

## 2. Backend Setup (local)

```bash
cd server
npm install
```

`server/.env` file me ye values bharo (already keys create ho chuki hain, bas values daalni hain):

```
PORT=5000
GEMINI_API_KEY=<already set hai, mat chhedo>
CLIENT_URL=http://localhost:5173

MONGODB_URI=<apna Atlas connection string>
JWT_SECRET=<koi bhi random strong string, e.g. openssl rand -hex 32>
ADMIN_EMAIL=admin@codecps.com
ADMIN_PASSWORD=<apna admin password>
```

Admin account create karne ke liye (ye `.env` ke `ADMIN_EMAIL` / `ADMIN_PASSWORD` se admin banata hai):

```bash
npm run seed:admin
```

Server run karo:

```bash
npm run dev
# 🚀 CodeCPS Backend running on port 5000
```

## 3. Frontend Setup (local)

```bash
cd client
npm install
```

`client/.env` banao (`.env.example` copy kar sakte ho):

```
VITE_API_URL=http://localhost:5000
```

```bash
npm run dev
# Vite dev server -> http://localhost:5173
```

Ab `http://localhost:5173/internship` khol ke apply form test karo, aur
`http://localhost:5173/admin/login` se admin dashboard access karo.

---

## 4. Logo / MSME Badge

Certificate ke liye company logo already `server/src/assets/logo.png` me copy ho chuka hai
(same logo jo website par use ho raha hai). Agar alag logo use karna hai toh usi file ko replace kar dena.

MSME registration number abhi placeholder hai — isse update karo:

```
server/src/config/company.js  →  MSME_REG_NO: "UDYAM-XX-00-0000000"
```

Yahan apna actual Udyam registration number daal dena.

---

## 5. Vercel Deploy

Backend aur frontend **do alag Vercel projects** ke roop me deploy karne hain.

### Backend (`server/`)
1. Vercel par naya project banao, root directory = `server`.
2. `server/vercel.json` already configured hai (serverless function ke roop me `app.js` deploy hota hai).
3. Environment Variables (Vercel dashboard → Settings → Environment Variables) me daalo:
   - `MONGODB_URI`
   - `JWT_SECRET`
   - `ADMIN_EMAIL`, `ADMIN_PASSWORD` (sirf seed script local se chalane ke liye zaroori hain, production me admin already DB me create ho chuka hoga toh optional)
   - `GEMINI_API_KEY`
   - `CLIENT_URL` (apna frontend ka live Vercel URL)
4. Deploy karo. URL milega, e.g. `https://codecps-api.vercel.app`

> Admin seed production DB par bhi chalana hoga (ek baar): apne local `.env` me production `MONGODB_URI` daal ke `npm run seed:admin` chala lo, phir wapas local URI daal dena.

### Frontend (`client/`)
1. Naya Vercel project, root directory = `client`.
2. Environment Variable: `VITE_API_URL` = backend ka live URL (upar wala).
3. Deploy karo.

Deploy hone ke baad `CLIENT_URL` (backend ke env me) ko frontend ke final live URL se update kar dena, taaki CORS aur QR verify links sahi se kaam karein.

---

## 6. Certificate ID Format

Certificates `CPS/<year>/INT/<sequence>` format follow karte hain, jaise `CPS/2026/INT/001`.
Ye automatically generate hota hai jab admin "Issue" button dabata hai — koi manual kaam nahi.
