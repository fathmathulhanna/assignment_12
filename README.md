# Resume Website – React + Node + Express + MongoDB

## Structure
```
resume-app/
├── backend/    Express + Mongoose API (port 5000)
└── frontend/   React (Vite) app (port 5173)
```

## Prerequisites
- Node.js 18+
- MongoDB Community Server installed locally and running
  (default: mongodb://127.0.0.1:27017)

## Step 1 – Start MongoDB
- Windows: runs as a service after install (check "MongoDB" in Services), or run `mongod`
- macOS: `brew services start mongodb-community`
- Linux: `sudo systemctl start mongod`

## Step 2 – Backend
```
cd backend
npm install
npm run seed     # puts your resume data in MongoDB
npm run dev      # starts API at http://localhost:5000
```
Test it: open http://localhost:5000/api/resume in the browser.

## Step 3 – Frontend (new terminal)
```
cd frontend
npm install
npm run dev
```
Open http://localhost:5173

## Step 4 – Keep your original design
Copy everything from your original `css/style.css` and paste it into
`frontend/src/styles/style.css` (replace the placeholder). Class names are unchanged.

## How it works
| Piece | File |
|---|---|
| Mongoose schema | backend/models/Resume.js |
| GET endpoint | backend/routes/resume.js |
| Seed data | backend/seed.js |
| Axios GET + useState + useEffect | frontend/src/App.jsx |
| .map() rendering | frontend/src/pages/About.jsx, Contact.jsx |
| Pages (Home, About, Contact) | frontend/src/pages/ |
