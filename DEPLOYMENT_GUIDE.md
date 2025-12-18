# Deployment Guide - Mental Health Support Chatbot

Your React chatbot is ready to deploy! Here are the easiest options:

## 🚀 Option 1: Vercel (Recommended - Easiest)

Vercel is the creator of Next.js and provides the best deployment experience for React apps.

### Steps:
1. **Create a Vercel account** at https://vercel.com/signup (free)
2. **Connect your GitHub** (or create a GitHub repo first):
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   # Then create a repo on GitHub and push
   ```
3. **Import your project** on Vercel dashboard
4. **Set environment variables**:
   - Add `REACT_APP_GEMINI_API_KEY` in Vercel environment variables
   - Don't commit `.env` to GitHub!
5. **Deploy** - It's automatic on every push!

**Vercel Link:** https://vercel.com/new

---

## 🌐 Option 2: Netlify (Very Easy)

### Steps:
1. **Create a Netlify account** at https://netlify.com (free)
2. **Build your app locally**:
   ```bash
   npm run build
   ```
3. **Connect GitHub** or drag & drop the `build/` folder
4. **Set environment variables** in Netlify dashboard
5. **Deploy!**

**Netlify Link:** https://app.netlify.com/signup

---

## ☁️ Option 3: GitHub Pages (Free but requires workarounds)

Good for static sites, but needs configuration for environment variables.

### Steps:
1. Update `package.json`:
   ```json
   "homepage": "https://yourusername.github.io/mentalhealthchatbot"
   ```
2. Build & deploy:
   ```bash
   npm run build
   npm install --save-dev gh-pages
   ```
3. Add to `package.json` scripts:
   ```json
   "predeploy": "npm run build",
   "deploy": "gh-pages -d build"
   ```

---

## 🔐 Important Security Notes

⚠️ **NEVER commit `.env` to GitHub!**

1. Add to `.gitignore` (already done):
   ```
   .env
   ```

2. Set environment variables in deployment platform:
   - Vercel: Settings → Environment Variables
   - Netlify: Site settings → Build & deploy → Environment
   - GitHub Pages: Use GitHub Secrets (more complex)

3. For production, consider:
   - Using a backend API to hide the API key
   - Implementing request throttling
   - Adding usage limits

---

## 📦 Build & Test Locally

Before deploying:

```bash
# Install dependencies
npm install

# Start development server
npm start

# Build for production
npm run build

# The build folder is what gets deployed
```

---

## ✅ Pre-Deployment Checklist

- [ ] Test chatbot thoroughly locally
- [ ] Verify `.env.example` has correct variable names
- [ ] Check that `.env` is in `.gitignore`
- [ ] Test on mobile devices
- [ ] Verify API key is not in any file being committed
- [ ] Test the build: `npm run build`

---

## 🎯 Quick Deploy Summary

| Platform | Difficulty | Cost | Cold Start | Time |
|----------|-----------|------|-----------|------|
| **Vercel** | Easy | Free | Fast | 2 min |
| **Netlify** | Easy | Free | Fast | 2 min |
| **GitHub Pages** | Medium | Free | N/A | 5 min |
| **Azure/AWS** | Hard | Variable | Varies | 10+ min |

**Recommended:** Use **Vercel** for the smoothest experience!

---

## 🔗 Useful Links

- [Vercel Docs](https://vercel.com/docs)
- [Netlify Docs](https://docs.netlify.com/)
- [Create React App Deployment](https://create-react-app.dev/deployment/)
- [Google Gemini API Docs](https://ai.google.dev/docs)

---

## ❓ Troubleshooting

### API key not working after deployment?
- Check environment variables are set correctly in the platform
- Make sure variable name is `REACT_APP_GEMINI_API_KEY`
- Redeploy after adding environment variables

### Build fails?
- Check `npm run build` works locally
- Ensure all imports are correct
- Check for console errors

### Chatbot not responding?
- Verify API key is valid
- Check browser console for CORS errors
- Ensure API key has correct permissions in Google Cloud

---

**Ready to deploy? Start with [Vercel](https://vercel.com/new)!** 🚀
