import Link from "next/link";
import React from "react";
import PropTypes from "prop-types";
import Image from "next/image";

// ...

Project.propTypes = {
  project: PropTypes.shape({
    title: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    link: PropTypes.shape({
      link_type: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    }).isRequired,
    thumbnail: PropTypes.string.isRequired,
  }).isRequired,
};

export function Project({ project }) {
  if (!project) {
    return <div>Project not found</div>;
  }

  const { type, description, thumbnail, link, title } = project;

  // Access the nested properties of the `link` object
  const linkUrl = link?.url || "";

  // Access the nested properties of the `title` object
  const titleText = title[0]?.text || "";

  return (
    <div className="flex flex-col items-center text-center">
      <div className="mb-8">
        <Image
          src={thumbnail}
          width={500}
          height={400}
          className="rounded-2xl"
          alt={titleText}
        />
      </div>
      <p className="capitalize text-accent text-sm mb-3">{type}</p>
      <h3 className="text-2xl font font-semibold capitalize mb-3">
        {titleText}
      </h3>
      <p className="text-base max-w-md">{description}</p>

      <Link href={linkUrl} passHref>
        <a
          rel="noopener noreferrer"
          className="mt-4 text-accent hover:underline cursor-pointer"
        >
          See project
        </a>
      </Link>
    </div>
  );
}
