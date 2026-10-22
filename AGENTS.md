<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Keep shared branding, navigation and footer in `src/components/site.tsx` so all pages stay consistent.
- Preserve original-site public paths, including `/get-in-touch`, and retain existing paths as compatible pages.
- Inquiry forms are presentation-only until real submission functionality is explicitly requested.
- Render original journal content from static article data through `/post/$slug` to preserve article URLs without adding a backend.
- Use Embla for the homepage photo slider with accessible controls and reduced-motion support.
