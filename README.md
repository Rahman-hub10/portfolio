# Portfolio Site

This repository contains a static portfolio site and a tiny Express server that serves the files and exposes a contact API.

To run locally (Windows PowerShell):

```powershell
cd c:\PORTFOLIO
npm install
npm start
```

Then open http://localhost:3000 in your browser.

(Resume removed) If you want to add a downloadable resume later, place `resume.pdf` at the project root and re-add the Resume section.

Public deployment options
-------------------------
If you want your portfolio to be accessible to everyone, here are three easy options and when to use them:

- Vercel (recommended if you want a simple, free deployment and you don't need a long-running Node server):
	- Vercel serves static assets and serverless functions. I've added `/api/contact` as a Vercel serverless endpoint in `api/contact.js` and a `vercel.json` configuration.
	- Steps:
		1. Push this repository to GitHub.
		2. Sign up at https://vercel.com, import your repo, and deploy.
		3. The site will be public at `https://<your-project>.vercel.app`.

- Render (recommended if you prefer to run your existing Express server without converting to serverless):
	- Render deploys standard Node.js servers easily and will preserve your `server.js` and `/api/contact` endpoint as-is.
	- Steps:
		1. Push the repo to GitHub.
		2. Sign up at https://render.com and create a new Web Service — connect your repo and set the build and start commands.
		3. After deploy, your site will be available at `https://<your-app>.onrender.com`.

- GitHub Pages (static only):
	- Use this if you only need a static site and don't need the `/api/contact` endpoint.
	- Push to GitHub and enable Pages for the chosen branch (main). The site will be available at `https://<github-username>.github.io/<repo-name>`.

Need help deploying? Tell me which provider you'd like (Vercel/Render/GitHub Pages) and I'll give step-by-step commands or create config files for you.
