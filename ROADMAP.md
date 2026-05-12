# Roadmap

Things planned but not yet built. Add to this as ideas come up.

## Email notifications for submissions

**What:** When a new `contactSubmission`, `membershipApplication`, or leader onboarding draft is created, send a notification email to the board with a deep link to the Studio Inbox to view/respond.

**Why:** Owners shouldn't have to keep checking `/studio` for new submissions. Email is where they already live.

**How (rough plan):**
- Pick an email provider — Resend is the obvious fit once a custom domain is verified
- Add a Sanity webhook on document creation for those three types, pointing at a new `/api/notify` route
- Route reads the submission, formats a short email summary, sends to a `notificationEmails` array on `siteSettings`
- Email body includes a deep link like `https://oda-usa.com/studio/structure/contactSubmission;<docId>` so the recipient lands on the full record
- Optionally include a one-click "mark as read" magic link

**Blockers:** Need a verified sending domain (e.g. `noreply@oda-usa.org`). Until then, all submissions live only in Studio's Inbox.

**Effort:** ~half a day once the domain is verified.
