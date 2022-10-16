import React from "react";
import { useFieldArray, useForm } from "react-hook-form";

const NewHookForm = () => {
	const {
		register,
		handleSubmit,
		control,
		// formState: { errors, isValid },
		formState: { errors },
	} = useForm({
		mode: "onChange",
		defaultValues: {
			name: "",
			email: "",
			number: "",
			pets: [],
		},
	});
	const { fields, append, prepend } = useFieldArray({
		control,
		name: "pets",
	});
	console.log("errors ", errors);
	return (
		<div className="mt-12">
			<div className="text-4xl text-white text-center mb-12">
				React Hook Form
			</div>
			<div>
				<form onSubmit={handleSubmit((data) => console.log(data))}>
					<p className="text-red-300">{errors?.name?.message}</p>

					<input
						{...register("name", { required: "Your name is required" })}
						type="text"
						placeholder="Name"
						className="bg-gray-100 text-gray-600 w-full mb-4 px-4 py-2 rounded-md border border-gray-400 block focus:bg-teal-50 focus:border-teal-400 focus:outline-none"
					/>

					<p className="text-red-300">{errors?.email?.message}</p>

					<input
						{...register("email", { required: "Your email is required" })}
						type="email"
						placeholder="Email"
						className="bg-gray-100 text-gray-600 w-full mb-4 px-4 py-2 rounded-md border border-gray-400 block focus:bg-teal-50 focus:border-teal-400 focus:outline-none"
					/>

					<p className="text-red-300">{errors?.number?.message}</p>

					<input
						{...register("number", {
							required: "Your phone number is required",
						})}
						type="number"
						placeholder="Phone Number"
						className="bg-gray-100 text-gray-600 w-full mb-4 px-4 py-2 rounded-md border border-gray-400 block focus:bg-teal-50 focus:border-teal-400 focus:outline-none"
					/>

					<p className="mb-5">Pets</p>
					<div>
						{fields.map((field, index) => {
							return (
								<input
									key={field.id}
									{...register(`pets.${index}.name`, { required: true })}
									className="bg-gray-100 text-gray-600 w-full mb-4 px-4 py-2 rounded-md border border-gray-400 block focus:bg-teal-50 focus:border-teal-400 focus:outline-none"
								/>
							);
						})}
					</div>

					<div className="flex items-center justify-between">
						<button
							type="button"
							className="w-32 h-10 my-1 rounded-md bg-gray-300 text-white text-center"
							onClick={() => {
								append({ name: "append" });
							}}
						>
							append
						</button>
						<button
							type="button"
							className="w-32 h-10 my-1 rounded-md bg-gray-300 text-white text-center"
							onClick={() => {
								prepend({ name: "prepend" });
							}}
						>
							prepend
						</button>
					</div>

					<input
						type="submit"
						// disabled={!isValid}
						className="w-32 h-10 mt-10 bg-gray-400 text-center text-white rounded-md cursor-pointer"
					/>
				</form>
			</div>
		</div>
	);
};

export default NewHookForm;
