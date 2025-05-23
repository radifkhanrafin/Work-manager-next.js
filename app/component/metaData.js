// app/blog/[slug]/page.js

export async function generateMetadata({ title, description }) {


  return {
    title: title,
    description: description,
  };
}

