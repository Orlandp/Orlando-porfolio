# Orlando Portfolio

A modern portfolio website built with **React**, **TypeScript**, **Vite**, and **Tailwind CSS**.

## 🚀 Getting Started

Follow these steps to set up the project locally on your machine.

### 1. Prerequisites
Ensure you have the following installed:
- **Node.js** (v18 or higher)
- **npm**

### 2. Installation
Clone the repository and install the dependencies:
```bash
git clone <repository-url>
cd Orlando-porfolio
npm install
```

### 3. Development
Start the development server with Hot Module Replacement (HMR):
```bash
npm run dev
```
The application will be available at `http://localhost:5173`.

### 4. Code Quality
We use Prettier and ESLint to maintain code consistency. Please run these before committing:
- **Format**: `npm run format`
- **Lint**: `npm run lint`

### 5. Production Build
To create a production-ready bundle:
```bash
npm run build
```
The output will be in the `dist/` directory.

## ✉️ Contact form backend

The contact form posts to a Spring Boot service in `backend/` that relays
messages to `jamesblssings@gmail.com` over Gmail SMTP.

It reads `MAIL_USERNAME` and `MAIL_PASSWORD` (a Google **app password**, not the
account password) from `backend/.env`, which is gitignored — the app will not
start without them. Create one at <https://myaccount.google.com/apppasswords>:

```bash
cd backend
printf 'MAIL_USERNAME=jamesblssings@gmail.com\nMAIL_PASSWORD=<app-password>\n' > .env
./run.sh        # serves on http://localhost:8090
```

Run it alongside `npm run dev` — Vite proxies `/api` to port 8090.

## 📁 Project Structure
- `src/`: Core application logic and components.
- `public/`: Static assets (icons, CV, etc.).
- `backend/`: Spring Boot mail service for the contact form.
- `tailwind.config.js`: Tailwind CSS configuration.
- `vite.config.ts`: Vite configuration.

## 💡 Contribution Guidelines
- Ensure all new components are written in **TypeScript**.
- Use **Tailwind CSS** for styling to maintain design consistency.
- Always run `npm run lint` before pushing your changes.
