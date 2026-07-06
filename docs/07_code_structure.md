# Code Structure Overview

## Purpose of This Document

This document explains the implementation structure of the original Logic-to-Layout AI Tutor web app repository without copying the full source code into this portfolio repository.

Original implementation repository:

- https://github.com/jujushmaterial/logic-to-layout-tutor

The implementation repository is used for the actual deployed web app. This portfolio repository focuses on explaining why the project was built, how it works, and how the code is organized.

## High-level Repository Structure

The original implementation is organized as a lightweight Vercel deployment package.

```text
logic-to-layout-tutor/
  index.html
  package.json
  README.md
  api/
    _utils.js
    register.js
    login.js
    me.js
    autosave.js
    score.js
    leaderboard.js
    reset.js
    tutor.js
    report.js
```

## Frontend: `index.html`

The frontend is implemented mainly in a single `index.html` file. It contains the HTML shell, CSS styles, and JavaScript logic for the interactive learning app.

Main responsibilities:

- Home screen and mode selection
- Tutorial, practice, challenge, and free layout modes
- Truth Table interaction and validation
- Gate Circuit construction and simulation
- CMOS Schematic visualization
- Layout Lab editing, layer drawing, and electrical checks
- AI Tutor panel UI
- Score, ranking, autosave, reset, and report UI integration

The file started as a single-file prototype and was extended step by step as the app grew. This structure made rapid iteration possible during the early vibe-coding phase, although it also means the file contains many UI and logic responsibilities together.

## Learning Stage Implementation

### 1. Truth Table

The Truth Table stage lets users directly set output values for each input combination.

Representative responsibilities:

- Render input combinations and output buttons
- Toggle output values between 0 and 1
- Compare user answers with the target truth table
- Mark stage completion and send score events

Portfolio meaning:

This stage turns an abstract Boolean expression into an explicit input-output relationship that later stages can use as a reference.

### 2. Gate Circuit

The Gate Circuit stage lets users build a gate-level circuit by placing gates and connecting ports.

Representative responsibilities:

- Render gate palette and SVG workspace
- Add gates to the canvas
- Connect input, gate, and output ports
- Build a netlist-like internal representation
- Evaluate circuit behavior against the target truth table

Portfolio meaning:

This stage shows how the logic function can be implemented as a gate-level circuit rather than selected as a multiple-choice answer.

### 3. CMOS Schematic

The CMOS Schematic stage connects gate-level logic to pMOS/nMOS transistor networks.

Representative responsibilities:

- Arrange pMOS and nMOS devices
- Separate Pull-up Network and Pull-down Network
- Visualize transistor ON/OFF states for input combinations
- Check whether the CMOS network produces the expected output

Portfolio meaning:

This stage bridges digital logic learning and semiconductor device-level thinking by showing how pMOS/nMOS behavior determines output Y.

### 4. Layout Lab

The Layout Lab stage lets users work with simplified layout layers.

Representative responsibilities:

- Render a grid-based layout editor
- Support N-Well, Active, Poly, Metal1, Contact, and output layers
- Support drawing, erasing, and answer guide actions
- Extract simplified device and connection information
- Validate whether important electrical connections are present

Portfolio meaning:

This stage is the core link between CMOS schematic understanding and physical layout intuition. It shows that layout is not just a drawing, but a structure with electrical meaning.

## Backend: Vercel Serverless APIs

The `api/` directory contains serverless functions used by the deployed Vercel app.

| File | Main Role |
|---|---|
| `api/_utils.js` | Shared helpers for JSON responses, request parsing, Supabase admin client, session handling, nickname validation, scoring helpers, and ranking lookup |
| `api/register.js` | Handles user registration with nickname, password, and join code |
| `api/login.js` | Handles login and session creation |
| `api/me.js` | Returns the currently authenticated user and rank information |
| `api/autosave.js` | Saves and restores user progress through Supabase |
| `api/score.js` | Records score events and updates leaderboard data |
| `api/leaderboard.js` | Returns leaderboard data |
| `api/reset.js` | Resets score events, leaderboard state, and autosave data for user testing |
| `api/tutor.js` | Provides AI Tutor responses through OpenAI API or fallback rules |
| `api/report.js` | Analyzes score events and leaderboard data to produce learning reports |

## Data and Service Flow

```text
Browser UI
  -> index.html JavaScript
  -> Vercel Serverless API
  -> Supabase tables/views
  -> OpenAI API for tutor responses
```

Examples:

- When a user logs in, `login.js` validates credentials and creates a session.
- When a stage is completed, frontend logic sends a score event to `score.js`.
- When the user asks for help, the Tutor panel sends context to `tutor.js`.
- When the user opens a learning report, `report.js` analyzes stage-level events.
- When the user returns later, `autosave.js` restores progress.

## Security-related Structure

Sensitive keys are not embedded directly in the frontend.

Important environment variables:

```text
SUPABASE_URL
SUPABASE_SERVICE_ROLE_KEY
OPENAI_API_KEY
JOIN_CODE
SESSION_SECRET
```

Design intent:

- The browser does not directly access the OpenAI API key.
- Supabase service role access is handled only through serverless API routes.
- The app can still provide fallback tutor guidance if the OpenAI API key is unavailable.

## Why the Full Code Is Not Copied Here

The full implementation code remains in the original web app repository because that repository is responsible for deployment and development.

This portfolio repository keeps the explanation separate so that readers can understand:

- what problem the project solves
- what each learning stage does
- how the frontend and serverless APIs are organized
- how AI, Supabase, Vercel, and GitHub are connected
- where to inspect the actual source code if needed

This separation keeps the portfolio readable while preserving a clear link to the implementation.
