Deployment instructions for static demo pages

- Copy the root files `index.html`, `demo.html`, `demo-access.html`, and `privacy-policy.html` to your shared hosting document root (e.g., `public_html`).
- Upload the `css/styles.css` and `js/demo.js` files to `css/` and `js/` folders under the same root.
- Ensure the existing `api/submit-lead.php` and `db/schema.sql` are also uploaded and reachable at `/api/submit-lead.php`.
- If `submit-lead.php` needs database credentials updated, edit the file (`api/submit-lead.php`) or set hosting environment variables `DB_HOST`, `DB_USER`, `DB_PASS`, and `DB_NAME`.
- After upload, open `/demo.html` and submit the form. It posts JSON to `/api/submit-lead.php` and redirects to `/demo-access.html` on success.

Notes:
- The provided CSS is lightweight; you can replace it if desired.
- If your site lives in a subfolder, update the fetch URL in `js/demo.js` and asset paths in the HTML files accordingly.
