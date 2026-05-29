# Buttondown setup notes

Buttondown's role is mailing-list management, not the canonical blog engine.

First pass plan:

1. Create a Knick Knack Labs Stories list in Buttondown.
2. Configure sender identity/domain when ready.
3. Replace the disabled placeholder form in `src/components/SubscribeForm.astro` with the Buttondown embed/action URL.
4. Publish canonical stories on `stories.knacklabs.co`.
5. Optionally copy each published story into Buttondown as an email/newsletter send.

Later, if manual copy/paste is annoying, add API publishing/sync tooling.
