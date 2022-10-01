import * as React from "react";
import { useForm } from "react-hook-form";

const UseFormSetValue = () => {
	const {
		register,
		handleSubmit,
		setValue,
		// formState: { isDirty, dirtyFields },
		// formState: { touchedFields },
		formState: { isValid },
	} = useForm({
		defaultValues: {
			yourDetails: {
				firstName: "",
				lastName: "",
			},
		},
	});

	// console.log("isDirty , dirtyFields ", isDirty, dirtyFields);
	// console.log("touchedFields", touchedFields);
	console.log("isValid", isValid);
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
							{...register("yourDetails.firstName", {
								required: true,
							})}
							placeholder="First Name"
							className="w-full mt-2 bg-white text-zinc-600 px-4 py-2 rounded-md focus:outline-none"
						/>
					</div>
					<div className="mb-3">
						<input
							{...register("yourDetails.lastName", {
								required: true,
							})}
							placeholder="Last Name"
							className="w-full mt-2 bg-white text-zinc-600 px-4 py-2 rounded-md focus:outline-none"
						/>
					</div>
					<div className="mb-3">
						<button
							type="button"
							onClick={() => {
								// setValue("firstName", "thet", { shouldDirty: true });
								// setValue("firstName", "thet", { shouldTouch: true });
								// setValue("firstName", "thet hmue", { shouldValidate: true });
								setValue("yourDetails", {
									firstName: "thet",
									lastName: "hmue",
								});
							}}
							className="bg-white px-3 py-2 rounded-md cursor-pointer"
						>
							setValue
						</button>
					</div>

					<input
						type="submit"
						className="w-full text-xl bg-white px-3 py-2 rounded-md cursor-pointer"
					/>
				</form>
			</div>
		</div>
	);
};

export default UseFormSetValue;
