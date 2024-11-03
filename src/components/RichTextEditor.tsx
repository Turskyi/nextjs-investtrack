"use client";

import { cn } from "@/lib/utils";
import dynamic from "next/dynamic";
import { forwardRef, useEffect, useState } from "react";
import { EditorProps } from "react-draft-wysiwyg";
import { ContentState, EditorState, convertFromHTML } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

// Inspired by the "RichTextEditor" component from the Next.js Job Board project by CodingInFlow.
// Source: https://github.com/codinginflow/nextjs-job-board/blob/Final-Project/src/components/RichTextEditor.tsx
const Editor = dynamic(
  () => import("react-draft-wysiwyg").then((mod) => mod.Editor),
  { ssr: false },
);

export default forwardRef<object, EditorProps & { initialContent?: string }>(
  function RichTextEditor(props, ref) {
    const [editorState, setEditorState] = useState(() => {
      const blocksFromHTML = convertFromHTML(props.initialContent || "");
      const contentState = ContentState.createFromBlockArray(
        blocksFromHTML.contentBlocks,
        blocksFromHTML.entityMap,
      );
      return EditorState.createWithContent(contentState);
    });

    useEffect(() => {
      if (props.initialContent) {
        const blocksFromHTML = convertFromHTML(props.initialContent);
        const contentState = ContentState.createFromBlockArray(
          blocksFromHTML.contentBlocks,
          blocksFromHTML.entityMap,
        );
        setEditorState(EditorState.createWithContent(contentState));
      }
    }, [props.initialContent]);

    return (
      <Editor
        editorClassName={cn(
          "border rounded-md px-3 min-h-[150px] cursor-text ring-offset-background focus-within:outline-none focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2",
          props.editorClassName,
        )}
        toolbar={{
          options: ["inline", "list", "link", "history"],
          inline: {
            options: ["bold", "italic", "underline"],
          },
        }}
        editorState={editorState}
        onEditorStateChange={setEditorState}
        editorRef={(r) => {
          if (typeof ref === "function") {
            ref(r);
          } else if (ref) {
            ref.current = r;
          }
        }}
        {...props}
      />
    );
  },
);
