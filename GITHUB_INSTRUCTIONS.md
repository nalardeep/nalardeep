# How to Push Your Code to GitHub

It looks like **Git** is not currently installed on your system. Follow these steps to get your blog on GitHub.

## 1. Install Git
1.  Download Git for Windows: [https://git-scm.com/download/win](https://git-scm.com/download/win)
2.  Run the installer (you can use default settings).
3.  **Important**: After installation, close and reopen your terminal/VS Code to refresh your `PATH`.

## 2. Check Installation
Run this command in your new terminal:
```bash
git --version
```
If it shows a version (e.g., `git version 2.x.x`), you are ready.

## 3. Initialize Repositority
Run these commands in your project folder (`d:\Projek\Blog Pribadi`):

```bash
# Initialize git
git init

# Add all files
git add .

# Commit changes
git commit -m "Initial commit: minggo-commits blog"
```

## 4. Create Repository on GitHub
1.  Go to [github.com/new](https://github.com/new).
2.  Name it `minggo-commits`.
3.  Click **Create repository**.

## 5. Push Code
Copy the commands shown on GitHub (under "…or push an existing repository from the command line") and run them. They will look like this:

```bash
git remote add origin https://github.com/YOUR_USERNAME/minggo-commits.git
git branch -M main
git push -u origin main
```

## Troubleshooting
-   If you get a "Permission denied" error, make sure you are logged in.
-   You may be asked to sign in via the browser.
