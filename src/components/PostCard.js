import Link from "next/link";
import { dateFinder } from "./mainFunctions.js";
const PostCard = ({ post }) => {
	const { title, postUrl } = post.fields;
	const { createdAt } = post.sys;

	const date = dateFinder(createdAt);
	return (
		<>
			<section className="flex flex-wrap flex-col mt-4">
				<Link href={`/posts/${postUrl}`}>
					<a className="text-lg text-lightWhite font-bold">
						<h1 className="text-3xl md:text-4xl">{title}</h1>
					</a>
				</Link>
				<button className="w-36 mt-2 bg-brightYellow p-2 rounded-xl">
					{date}
				</button>
			</section>
		</>
	);
};

export default PostCard;
