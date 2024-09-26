import { useEffect, useState } from 'react';
import sanityClient from '../lib/sanity';
import imageUrlBuilder from '@sanity/image-url';

const builder = imageUrlBuilder(sanityClient);

const query = '*[_type == "page"]'; // Fetch all pages

export default function CmsPage() {
  const [pages, setPages] = useState([]);
  const [filteredPages, setFilteredPages] = useState([]);
  const [selectedTag, setSelectedTag] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const result = await sanityClient.fetch(query);
      setPages(result);
      setFilteredPages(result); // Initially show all pages
    };
    fetchData();
  }, []);

  const handleTagChange = (tag) => {
    setSelectedTag(tag);
    if (tag) {
      const filtered = pages.filter(page => page.tags?.includes(tag));
      setFilteredPages(filtered);
    } else {
      setFilteredPages(pages); // Show all if no tag is selected
    }
  };

  // Get unique tags for filtering
  const uniqueTags = [...new Set(pages.flatMap(page => page.tags || []))];

  return (
    <div>
      <h1>CMS Pages</h1>

      <div>
        <h2>Filter by Tags:</h2>
        {uniqueTags.map(tag => (
          <button key={tag} onClick={() => handleTagChange(tag)}>
            {tag}
          </button>
        ))}
        <button onClick={() => handleTagChange('')}>Show All</button>
      </div>

      {filteredPages.length > 0 ? (
        filteredPages.map((page) => (
          <div key={page.slug.current}>
            <h2>{page.title}</h2>
            {page.heroImage && (
              <img src={urlFor(page.heroImage).url()} alt={page.title} />
            )}
            <div>{renderContent(page.content)}</div>
          </div>
        ))
      ) : (
        <p>No pages found.</p>
      )}
    </div>
  );
}

// Function to render content blocks
const renderContent = (content) => {
  return content.map((block) => {
    if (block._type === 'block') {
      return <p key={block._key}>{block.children.map(child => child.text).join(' ')}</p>;
    }
    if (block._type === 'image') {
      return <img key={block._key} src={urlFor(block).url()} alt="" />;
    }
    // Handle other types like gallery and videoEmbed similarly...
    return null;
  });
};

function urlFor(source) {
  return builder.image(source);
}