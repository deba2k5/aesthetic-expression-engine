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

- The site is a set of campaign-poster routes (`/`, `/events`, `/schedule`, `/gallery`) sharing the floating `SiteNav` and contact `SiteFooter` from `src/components/site`, rendered in `__root.tsx`. Keep the broken-poster composition (torn clip-paths, Syne display type, square corners, generated artwork from `src/assets`) and avoid generic section templates.
