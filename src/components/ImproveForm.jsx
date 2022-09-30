import * as React from "react";
import { useFieldArray, useForm } from "react-hook-form";

const ImproveForm = () => {
	const {
		register,
		handleSubmit,
		control,
		formState: { errors },
	} = useForm({
		mode: "onChange",
		delayError: 500,
		defaultValues: {
			name: "",
			age: "",
			pets: [],
		},
	});
	const { fields, append, prepend } = useFieldArray({
		control,
		name: "pets",
	});

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
							{...register("name", { required: "First name is required" })}
							placeholder="First Name"
							className="w-full mt-2 bg-white text-zinc-600 px-4 py-2 rounded-md focus:outline-none"
						/>
						<p className="text-white mt-1">{errors?.name?.message}</p>
					</div>

					<div className="mb-3">
						<input
							type="number"
							{...register("age", {
								valueAsNumber: true,
								required: "Please enter your age.",
								max: 5,
							})}
							placeholder="Your age"
							className="w-full mt-2 bg-white text-zinc-600 px-4 py-2 rounded-md focus:outline-none"
						/>
						<p className="text-white mt-1">{errors?.age?.message}</p>
					</div>

					<p>pets</p>
					<div>
						{fields.map((field, index) => {
							return (
								<input
									key={field.id}
									{...register(`pets.${index}.name`, { required: true })}
									className="w-full my-2 bg-white text-zinc-600 px-4 py-2 rounded-md focus:outline-none"
								/>
							);
						})}
					</div>

					<div className="mt-2">
						<button
							type="button"
							className="bg-white mx-1 px-4 py-2 rounded-md cursor-pointer text-zinc-600"
							onClick={() => {
								append({ name: "append" });
							}}
						>
							append
						</button>
						<button
							type="button"
							className="bg-white mx-1 px-4 py-2 rounded-md cursor-pointer text-zinc-600"
							onClick={() => {
								prepend({ name: "prepend" });
							}}
						>
							prepend
						</button>
					</div>

					<div>
						<input
							type="submit"
							className="px-4 py-2 mt-3 bg-white w-[50%] cursor-pointer rounded-md"
						/>
					</div>
				</form>
			</div>
		</div>
	);
};

export default ImproveForm;
