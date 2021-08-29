import Link from "next/link";

const PostCard = ({ post }) => {
	const { title, postUrl } = post.fields;
	const { createdAt } = post.sys;
	const date = new Date(createdAt);
	var month = new Array();
	month[0] = "Jan";
	month[1] = "Feb";
	month[2] = "March";
	month[3] = "April";
	month[4] = "May";
	month[5] = "June";
	month[6] = "July";
	month[7] = "Aug";
	month[8] = "Sept";
	month[9] = "Oct";
	month[10] = "Nov";
	month[11] = "Dec";
	const year = date.getFullYear();
	const n = month[date.getMonth()];
	const day = date.getDate();

	// const month = date.getMonth()
	// const slug = title.replace(/\s+/g, "-").toLowerCase();
	return (
		<>
			<section className="flex flex-wrap flex-col mt-4">
				<Link href={`/posts/${postUrl}`}>
					<a className="text-lg text-lightWhite font-bold">
						<h1 className="text-3xl md:text-4xl">{title}</h1>
					</a>
				</Link>
				<button className=" w-36 mt-2 bg-brightYellow h-8 rounded-xl">{`${n} ${day}, ${year}`}</button>
			</section>
		</>
	);
};

export default PostCard;
