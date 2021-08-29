import Link from "next/link";

const PostCard = ({ post }) => {
	const { title, slug } = post.fields;
	// const slug = title.replace(/\s+/g, "-").toLowerCase();
	return (
		<>
			<div>{title}</div>
			<Link href={`posts/${slug}`}>
				<a>See post</a>
			</Link>
		</>
	);
};

export default PostCard;
