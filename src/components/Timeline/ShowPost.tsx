import React from "react";
import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import "./showPost.css";

import PostCard from "../PostCard/postCard";

const supabase = createClient(
  "https://pjqbnzerwqygskkretxd.supabase.co",

  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBqcWJuemVyd3F5Z3Nra3JldHhkIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTk2NzQzNzYsImV4cCI6MjAxNTI1MDM3Nn0.tCOsaglHK0BVL689wrFKvQIVat88jhKow-yMsURlJSE"
);

type Post = {
  title: string;
  writter_name: string;
  discription: string;
  reacts: number;
  createDate: string;
  type: string;
  location: string;
};

export default function ShowPost() {
  const [post, setPost] = useState<Post[]>([]);

  useEffect(() => {
    getPost();
  }, []);

  async function getPost() {
    const { data, error } = await supabase.from("Timeline").select();
    console.log(data, error);

    if (data) {
      setPost(data);
    }
  }

  return (
    <React.Fragment>
      <div>ShowPost</div>

      {post &&
        Array.isArray(post) &&
        [...post].reverse().map((item: Post, index: number) => {
          return (
            <PostCard
              key={index}
              title={item.title}
              writter_name={item.writter_name}
              discription={item.discription}
              reacts={item.reacts}
              createDate={item.createDate}
              type={item.type}
              location={item.location}
            />
          );
        })}
    </React.Fragment>
  );
}
