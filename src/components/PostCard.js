import Link from "next/link";

const PostCard = ({ post }) => {
	const { title, postUrl } = post.fields;
	// const slug = title.replace(/\s+/g, "-").toLowerCase();
	return (
		<>
			<div>{title}</div>
			<Link href={`posts/${postUrl}`}>
				<a>See post</a>
			</Link>
		</>
	);
};

export default PostCard;
