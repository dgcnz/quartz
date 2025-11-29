import { QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"
import style from "./styles/contentMeta.scss"

export default (() => {
  function AuthorInfo({ fileData, displayClass }: QuartzComponentProps) {
    const fm = fileData.frontmatter ?? {}
    const authorsRaw = fm.authors
    const urlRaw = fm.url

    let authors: string | null = null
    const clean = (val: string) =>
      val
        .trim()
        .replace(/^\[\[/, "")
        .replace(/\]\]$/, "")
        .trim()

    if (Array.isArray(authorsRaw)) {
      const cleaned = authorsRaw.filter(Boolean).map((a) => clean(String(a))).filter(Boolean)
      const joined = cleaned.join(", ")
      authors = joined.length > 0 ? joined : null
    } else if (typeof authorsRaw === "string" && authorsRaw.trim().length > 0) {
      const cleaned = clean(authorsRaw)
      authors = cleaned.length > 0 ? cleaned : null
    }

    const url = typeof urlRaw === "string" && urlRaw.trim().length > 0 ? urlRaw.trim() : null

    if (!authors && !url) {
      return null
    }

    return (
      <p class={classNames(displayClass, "content-meta", "author-info")}>
        {authors ? (
          <span>
            {authors}
            {url ? <br /> : null}
          </span>
        ) : null}
        {url ? (
          <a href={url} rel="noopener noreferrer" target="_blank">
            {url}
          </a>
        ) : null}
      </p>
    )
  }

  AuthorInfo.css = style
  return AuthorInfo
}) satisfies QuartzComponentConstructor
