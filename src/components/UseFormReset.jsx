import * as React from "react";
import { useForm } from "react-hook-form";

const UseFormReset = () => {
	const {
		register,
		handleSubmit,
		reset,
		formState: { isDirty },
	} = useForm({
		defaultValue: {
			firstName: "",
			lastName: "",
		},
	});

	console.log("isDirty", isDirty);
	return (
		<div>
			<h2 className="text-center text-white text-4xl font-semibold mt-10 ">
				React Hook Form
			</h2>
			<div className="mt-10">
				<form
					onSubmit={handleSubmit((data) => {
						console.log(data);
					})}
				>
					<div className="mb-3">
						<input
							{...register("firstName")}
							placeholder="First Name"
							className="w-full mt-2 bg-white text-zinc-600 px-4 py-2 rounded-md focus:outline-none"
						/>
					</div>
					<div className="mb-3">
						<input
							{...register("lastName")}
							placeholder="Last Name"
							className="w-full mt-2 bg-white text-zinc-600 px-4 py-2 rounded-md focus:outline-none"
						/>
					</div>

					<button
						type="button"
						onClick={() => {
							reset(
								{
									firstName: "htet",
									lastName: "Oo",
								}
								// { keepValues: true }
								// { keepDefaultValues: true }
							);
						}}
						className="px-3 py-2 bg-white rounded-md mb-3"
					>
						reset
					</button>

					<input
						type="submit"
						className="w-full bg-white px-3 py-2 rounded-md cursor-pointer"
					/>
				</form>
			</div>
		</div>
	);
};

export default UseFormReset;
