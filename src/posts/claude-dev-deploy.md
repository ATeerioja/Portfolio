---
title: Using Claude to develop and deploy simple applications
date: 2025-06-09
summary: Notes on building this very portfolio with an AI pair-programmer — and where I had to step in.
draft: false
---

This portfolio is the first project I built with Claude as a pair-programmer. Here are
some honest notes on what that workflow is actually like as a student who is still
learning the stack.

## What worked well

Claude is good at scaffolding. Going from "I want a modular portfolio" to a working
Vite + React structure took minutes, and the component boundaries were sensible. It's
also a patient explainer — I could ask *why* a `useEffect` cleanup function matters and
get a straight answer.

## Where I had to step in

The one recurring issue: **stale versions**. Generated code would reach for older package
versions or deprecated build setups. I keep a note in my developer docs about this —
always check what version is current and update `package.json` manually. Once I did that,
things built cleanly.

## The deployment side

The chain ended up being: Docker to package the static build, Nginx to serve it, Fly.io
to host, Cloudflare for the domain and SSL, and GitHub Actions for CI/CD. None of these
were hard individually, but wiring them together is where I learned the most.

## Takeaway

AI generates a lot of the code, but understanding it is still on me — and that's the part
that actually makes me a better developer.
