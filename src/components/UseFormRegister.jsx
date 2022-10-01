import * as React from "react";
import { useForm } from "react-hook-form";

const UseFormRegister = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		defaultValues: {
			firstName: "",
			lastName: "",
			age: 0,
		},
	});
	console.log("errors", errors);

	return (
		<div>
			<h2 className="text-center text-white text-4xl font-semibold mt-10 ">
				React Hook Form
			</h2>

			<form
				onSubmit={handleSubmit((data) => {
					console.log(data);
				})}
				className="mt-10"
			>
				<div className="mb-3">
					<input
						{...register("firstName", {
							required: {
								value: true,
								message: "this is required",
							},
						})}
						placeholder="First Name"
						className="w-full mt-2 bg-white text-zinc-600 px-4 py-2 rounded-md focus:outline-none"
					/>
				</div>
				<div className="mb-3">
					<input
						{...register("lastName", {
							maxLength: {
								value: 5,
								message: "Max length is 5",
							},
						})}
						placeholder="Last Name"
						className="w-full mt-2 bg-white text-zinc-600 px-4 py-2 rounded-md focus:outline-none"
					/>
				</div>
				<div className="mb-3">
					<input
						type="number"
						{...register("age", { valueAsNumber: true })}
						placeholder="age"
						className="w-full mt-2 bg-white text-zinc-600 px-4 py-2 rounded-md focus:outline-none"
					/>
				</div>
				<input
					type="submit"
					className="w-full text-xl px-4 py-2 bg-white rounded-md"
				/>
			</form>
		</div>
	);
};

export default UseFormRegister;
