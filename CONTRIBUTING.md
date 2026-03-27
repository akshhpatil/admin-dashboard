# Contributing to Ultimate Angular 21 Boilerplate 🚀

We're thrilled you're interested in contributing! This project is designed to be a high-quality, production-ready starting point for developers building complex admin dashboards. Together, we can make this the best Angular boilerplate on GitHub.

## Table of Contents
- [Our Philosophy](#our-philosophy)
- [How Can I Contribute?](#how-can-i-contribute)
- [Development Workflow](#development-workflow)
- [Coding Guidelines](#coding-guidelines)
- [Commit Message Styles](#commit-message-styles)

---

## Our Philosophy
We aim for **performance**, **scalability**, and **premium aesthetics**. 
- **Standalone components** only.
- **Signals** for reactive state.
- **Tailwind CSS** for layout.
- **No dependencies bloating**: Keep it lean.

## How Can I Contribute?
1. **Report Bugs**: Open an issue with a clear description and steps to reproduce.
2. **Feature Requests**: Suggest new pages (e.g., Kanban board, Calendar).
3. **Pull Requests**:
   - Fork the repository.
   - Create a feature branch (`git checkout -b feature/your-feature`).
   - Commit your changes.
   - Push to your fork and submit a PR against `master`.

## Development Workflow
1. **Requirements**: 
   - Node.js (v20+ recommended).
   - Angular CLI 21 (pre-configured).
2. **Setup**:
   ```bash
   npm install
   ```
3. **Run Locally**:
   ```bash
   npm start
   ```
4. **Build & Test**:
   ```bash
   npm run build
   npm test
   ```

## Coding Guidelines
- **Project Structure**: Follow the existing feature-based structure (`core/`, `features/`, `layout/`, `shared/`).
- **Styles**: Use Tailwind CSS utilities. Avoid custom CSS unless absolutely necessary (add it to the component's CSS or `styles.css` if global).
- **TypeScript**: Use strict typing and Signals for component local state.
- **Linting**: Run `npm run lint` before committing.

## Commit Message Styles
We follow the conventional commit format:
- `feat: ...` for new features.
- `fix: ...` for bug fixes.
- `docs: ...` for documentation changes.
- `style: ...` for UI/styling updates.

---
Thank you for helping us build the ultimate Angular experience! ❤️
