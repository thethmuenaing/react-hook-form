import * as React from "react";
import { useForm } from "react-hook-form";

const UseFormTigger = () => {
	const {
		register,
		handleSubmit,
		trigger,
		formState: { errors },
	} = useForm({
		defaultValues: {
			firstName: "",
		},
	});

	console.log("errors", errors);
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
							{...register("firstName", { required: true, maxLength: 5 })}
							placeholder="First Name"
							className="w-full mt-2 bg-white text-zinc-600 px-4 py-2 rounded-md focus:outline-none"
						/>
					</div>
					<div className="mb-3">
						<input
							{...register("lastName", { required: true, maxLength: 5 })}
							placeholder="Last Name"
							className="w-full mt-2 bg-white text-zinc-600 px-4 py-2 rounded-md focus:outline-none"
						/>
					</div>

					<button
						type="button"
						className="px-3 py-2 bg-white rounded-md mb-3"
						onClick={async () => {
							const output = await trigger(["firstName", "lastName"], {
								shouldFocus: true,
							});

							console.log("output", output);
						}}
					>
						Trigger
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

export default UseFormTigger;
