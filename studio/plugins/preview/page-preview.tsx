import React from "react";
import { type ValidSanityDocument } from "../../types/types";

interface PreviewProps {
  document: {
    displayed: ValidSanityDocument;
  };
}

export const getPreviewUrl = (slug: string) => {
  if (slug === "home") {
    return window.location.host;
  }

  const url = new URL("/api/preview", location.origin);
  url.searchParams.set("slug", slug);
  url.searchParams.set("type", "page");

  return url.toString();
};

const PagePreview = (props: PreviewProps) => {
  const { displayed } = props.document;

  if (!displayed?.slug?.current) {
    return <div>The page needs a slug before it can be previewed.</div>;
  }

  const url = getPreviewUrl(displayed.slug.current);

  return (
    <div
      style={{ width: "100%", height: "100%", position: "relative", zIndex: 1 }}
    >
      <div>
        <iframe
          src={url}
          style={{
            border: 0,
            height: "100%",
            left: 0,
            position: "absolute",
            top: 0,
            width: "100%",
          }}
        />
      </div>
    </div>
  );
};

export default PagePreview;
