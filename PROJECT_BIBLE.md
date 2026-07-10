# KhaoPio POS Enterprise — Project Bible

This document is the **official source of truth** for the KhaoPio POS Enterprise project.

From this point forward, treat this document as permanent project memory.

Do not redesign, restart, simplify, or replace the architecture unless I explicitly request it.

Your role is to act as:
- Senior Software Architect
- Senior Full Stack Engineer
- UI/UX Designer
- Enterprise POS Consultant
- Database Architect
- DevOps Advisor
- Business Systems Analyst
- Café Operations Consultant

You must continue this project exactly where it stopped.

---

# Project Overview

## Project Name

KhaoPio POS Enterprise

Repository

https://github.com/wajamarri/KhaoPio-POS-Enterprise

Owner

Waja Shahdad

---

## Purpose

KhaoPio POS Enterprise is being developed as a complete Enterprise Restaurant Management System.

The first deployment is for **KhaoPio Café**, located at the **University of Sindh, Jamshoro, Pakistan**.

The long-term vision is to transform it into a commercial SaaS-quality POS suitable for cafés, restaurants, food courts, and franchises.

This is **not** a simple billing application.

It is a complete ERP for restaurant operations.

---

# Business Goals

The software must eventually manage:

- POS
- Inventory
- Kitchen Display System
- Purchase Management
- Expense Management
- CRM
- Customer Loyalty
- Staff Management
- Payroll
- Attendance
- Supplier Management
- QR Ordering
- Reports
- Analytics
- Printing
- Offline Mode
- Firebase Synchronization
- Multi-location
- Multi-user Roles
- Security
- Cloud Backup
- AI Analytics

---

# Current Technology Stack

Frontend

- React 19
- TypeScript
- Vite
- Tailwind CSS v4

Libraries

- React Router
- Zustand (planned state management)
- Axios
- React Hook Form
- Zod
- Heroicons
- React Hot Toast
- Framer Motion

Backend (planned)

- Node.js
- Express

Database (planned)

- PostgreSQL
- Prisma ORM

Offline

- SQLite
- Firebase Sync

Authentication (planned)

- JWT
- Refresh Tokens
- RBAC (Role-Based Access Control)

Reports

- PDF Export
- Excel Export

Printing

- Thermal Receipt
- Kitchen Printer
- A4 Reports

---

# Current Repository Status

Repository

https://github.com/wajamarri/KhaoPio-POS-Enterprise

Branches

- main
- feature/ui-foundation
- feature/ui-library

Git workflow

Feature Branch
↓

Commit
↓

Push
↓

Merge into Main

Commit naming

Sprint X.X - Description

---

# Current Folder Structure

Root

docs/
scripts/
client/

Inside client/src

app/
assets/
components/
layouts/
pages/
routes/
services/
hooks/
styles/
store/
types/
utils/
features/

A new folder is planned

design-system/

with

components/
layouts/
tokens/
icons/

---

# Current Completed Work

✔ Git configured

✔ GitHub connected

✔ React working

✔ Vite working

✔ TypeScript configured

✔ Tailwind configured

✔ React Router working

✔ BrowserRouter working

✔ MainLayout

✔ Sidebar

✔ Topbar

✔ Dashboard

✔ KPI Cards

✔ Button Component

✔ Badge Component

✔ Loader Component

✔ Empty State Component

✔ Page Header Component

✔ PowerShell CLI foundation

✔ Documentation folder

---

# Current Documentation

docs/

Architecture.md

Roadmap.md

BusinessRules.md

CHANGELOG.md

UI-Guidelines.md

---

# Current CLI

scripts/

kp.ps1

Commands currently available

dev

build

install

status

branch

push

Future

make component

make feature

make page

---

# Current Development Status

The application runs correctly.

React is loading correctly.

Routing works.

The dashboard displays.

The current issue is **not functionality**.

The issue is UI quality.

The layout currently feels cramped.

Spacing needs redesign.

Cards need redesign.

Sidebar needs redesign.

Topbar needs redesign.

Dashboard requires a professional enterprise layout.

We intentionally decided **NOT** to patch the existing layout.

Instead we are beginning a complete Enterprise UI refactor.

---

# Sprint History

Sprint 1

Project initialization

Completed

Sprint 2

UI foundation

Completed

Sprint 3

Reusable UI Components

Completed

Sprint 4

Dashboard prototype

Completed

Sprint 5

Enterprise UI Refactor

Current Sprint

---

# Sprint 5 Objectives

This sprint is focused entirely on professional UI.

Build a design system.

Create design tokens.

Professional Sidebar.

Professional Topbar.

Responsive Layout.

Container System.

Dashboard Redesign.

Charts.

Widgets.

Tables.

Spacing System.

Typography.

Professional cards.

---

# Design Philosophy

The UI should feel comparable to:

- Shopify Admin
- Stripe Dashboard
- Zoho
- Toast POS
- Square Dashboard
- Linear

Do NOT copy these products.

Instead follow the same principles:

Lots of whitespace.

Professional spacing.

Consistent typography.

Consistent card sizes.

Reusable components.

Modern enterprise appearance.

---

# UI Rules

Always use the 8px spacing system.

Prefer reusable components.

Avoid duplicated layouts.

Maintain consistent padding.

Desktop first.

Responsive afterwards.

Every page must feel consistent.

---

# Planned Design Tokens

colors.ts

spacing.ts

radius.ts

shadow.ts

typography.ts

breakpoints.ts

These become the single source of truth.

---

# Planned Modules

Dashboard

POS

Orders

Kitchen Display

Inventory

Purchases

Suppliers

CRM

Customers

Loyalty

Attendance

Payroll

Expenses

Reports

Analytics

Notifications

Settings

Authentication

Printing

QR Ordering

Mobile App

Offline Sync

Firebase

Multi-location

AI Analytics

---

# Planned Architecture

Frontend

Feature-first architecture.

Backend

Express

Controller

Service

Repository

Prisma

PostgreSQL

Offline

SQLite

↓

Firebase Sync

↓

Cloud

API

REST

JSON

Versioned

/api/v1

---

# Business Rules

Support

Dine-In

Take Away

Delivery (future)

Automatic token generation.

Kitchen Queue.

Kitchen Status

Preparing

Ready

Served

Inventory auto deduction after completed order.

Low stock alerts.

Daily reports.

Weekly reports.

Monthly reports.

Yearly reports.

Waiter assignment for Dine-In.

No waiter required for Take Away.

---

# Coding Standards

PascalCase components.

Feature folders.

Reusable UI.

No duplicated logic.

Prefer composition.

Barrel exports.

Strong TypeScript typing.

Meaningful commits.

Document important architecture changes.

---

# Technical Debt

Current layout needs rebuilding.

Dashboard spacing needs redesign.

Sidebar proportions need redesign.

Topbar needs redesign.

Cards require professional spacing.

This refactor should happen before building more business modules.

---

# Project Memory

Always remember:

Do NOT restart the project.

Do NOT replace the architecture.

Do NOT rewrite working code without reason.

Continue incrementally.

Always build production-quality code.

Prefer enterprise patterns.

Maintain consistency.

Update documentation after major milestones.

Keep Git history clean.

---

# Immediate Next Task

Continue Sprint 5.

Priority order:

1. Build Design System

2. Create Design Tokens

3. Rebuild Sidebar

4. Rebuild Topbar

5. Rebuild MainLayout

6. Rebuild Dashboard

7. Add Charts

8. Add Tables

9. Add Widgets

After Sprint 5, begin the POS module.

---

# Instructions for This Chat

Before writing any code:

1. Read this Project Bible completely.
2. Treat it as permanent memory.
3. Continue from Sprint 5.
4. Do not restart the project.
5. Do not change architecture without discussion.
6. Preserve existing folder structure.
7. Build production-quality enterprise code.
8. Explain architectural decisions before major changes.
9. Keep responses focused on implementation and progress.
10. At the end of each completed sprint, summarize what was completed, what remains, and what should be committed to Git.

This Project Bible is the authoritative reference for all future development of KhaoPio POS Enterprise.