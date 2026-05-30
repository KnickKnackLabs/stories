# Buttondown setup notes

Buttondown's role is mailing-list management, not the canonical blog engine.

First pass setup:

1. Buttondown public handle: `knickknacklabs`.
2. The static signup form in `src/components/SubscribeForm.astro` posts to `https://buttondown.com/api/emails/embed-subscribe/knickknacklabs`.
3. Site-origin subscribers are tagged with `stories-site`.
4. Buttondown redirects should point back to `https://stories.knacklabs.co/` after subscribe and after confirmation.
5. Canonical stories stay on `stories.knacklabs.co`; Buttondown is for subscriptions and newsletter sends.

Next manual checks:

1. Submit a non-admin email through the live site.
2. Confirm the double opt-in email arrives and redirects back to the site.
3. Confirm the subscriber appears in Buttondown with the `stories-site` tag.
4. Optionally copy each published story into Buttondown as an email/newsletter send.

Later, if manual copy/paste is annoying, add API publishing/sync tooling.
