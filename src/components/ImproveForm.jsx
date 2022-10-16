// import * as React from "react";
// import { useFieldArray, useForm } from "react-hook-form";

// const ImproveForm = () => {
// 	const {
// 		register,
// 		handleSubmit,
// 		control,
// 		formState: { errors },
// 	} = useForm({
// 		mode: "onChange",
// 		delayError: 500,
// 		defaultValues: {
// 			name: "",
// 			age: "",
// 			pets: [],
// 		},
// 	});
// 	const { fields, append, prepend } = useFieldArray({
// 		control,
// 		name: "pets",
// 	});

// 	return (
// 		<div>
// 			<h2 className="text-center text-white text-4xl font-semibold mt-10 ">
// 				React Hook Form
// 			</h2>
// 			<div className="mt-10">
// 				<form
// 					onSubmit={handleSubmit((data) => {
// 						console.log(data);
// 					})}
// 				>
// 					<div className="mb-3">
// 						<input
// 							{...register("name", { required: "First name is required" })}
// 							placeholder="First Name"
// 							className="w-full mt-2 bg-white text-zinc-600 px-4 py-2 rounded-md focus:outline-none"
// 						/>
// 						<p className="text-white mt-1">{errors?.name?.message}</p>
// 					</div>

// 					<div className="mb-3">
// 						<input
// 							type="number"
// 							{...register("age", {
// 								valueAsNumber: true,
// 								required: "Please enter your age.",
// 								max: 5,
// 							})}
// 							placeholder="Your age"
// 							className="w-full mt-2 bg-white text-zinc-600 px-4 py-2 rounded-md focus:outline-none"
// 						/>
// 						<p className="text-white mt-1">{errors?.age?.message}</p>
// 					</div>

// 					<p>pets</p>
// 					<div>
// 						{fields.map((field, index) => {
// 							return (
// 								<input
// 									key={field.id}
// 									{...register(`pets.${index}.name`, { required: true })}
// 									className="w-full my-2 bg-white text-zinc-600 px-4 py-2 rounded-md focus:outline-none"
// 								/>
// 							);
// 						})}
// 					</div>

// 					<div className="mt-2">
// 						<button
// 							type="button"
// 							className="bg-white mx-1 px-4 py-2 rounded-md cursor-pointer text-zinc-600"
// 							onClick={() => {
// 								append({ name: "append" });
// 							}}
// 						>
// 							append
// 						</button>
// 						<button
// 							type="button"
// 							className="bg-white mx-1 px-4 py-2 rounded-md cursor-pointer text-zinc-600"
// 							onClick={() => {
// 								prepend({ name: "prepend" });
// 							}}
// 						>
// 							prepend
// 						</button>
// 					</div>

// 					<div>
// 						<input
// 							type="submit"
// 							className="px-4 py-2 mt-3 bg-white w-[50%] cursor-pointer rounded-md"
// 						/>
// 					</div>
// 				</form>
// 			</div>
// 		</div>
// 	);
// };

// export default ImproveForm;

import * as React from "react";
import { useForm, useFieldArray } from "react-hook-form";

const ImproveForm = () => {
	const {
		register,
		handleSubmit,
		control,
		formState: { errors },
	} = useForm({
		delayError: 500,
		mode: "onChange",
		defaultValues: {
			firstName: "",
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
			<h2 className="text-white font-semibold text-5xl text-center mt-10">
				React Hook Form
			</h2>
			<div className="mt-10">
				<form onSubmit={handleSubmit((data) => console.log(data))}>
					<div className="mb-3">
						<input
							{...register("firstName", {
								required: {
									value: true,
									message: "* Please enter your first name *",
								},
							})}
							placeholder="First Name"
							className="bg-white px-3 py-2 w-full rounded-md text-zinc-600 focus:outline-none"
						/>
						{errors?.firstName && (
							<p className="text-red-400 mt-3">{errors?.firstName?.message}</p>
						)}
					</div>
					<div className="mb-3">
						<input
							{...register("age", {
								required: {
									value: true,
									message: "* Please enter your age *",
								},
								maxLength: {
									value: 3,
									message: "You exceeded the max length",
								},
							})}
							type="number"
							placeholder="Age"
							className="bg-white px-3 py-2 w-full rounded-md text-zinc-600 focus:outline-none"
						/>
						{errors?.age && (
							<p className="text-red-400 mt-3">{errors?.age?.message}</p>
						)}
					</div>

					<p className="text-white mb-3">Pets</p>
					<div>
						{fields.map((field, index) => {
							return (
								<input
									key={field.id}
									{...register(`pets.${index}.name`, { required: true })}
									className="bg-white px-3 py-2 mb-3 w-full rounded-md text-zinc-600 focus:outline-none"
								/>
							);
						})}
					</div>
					<button
						type="button"
						className="bg-white px-3 py-2 rounded-md mx-2 mb-3"
						onClick={() => {
							append({ name: "append" });
						}}
					>
						append
					</button>
					<button
						type="button"
						className="bg-white px-3 py-2 rounded-md mx-2 mb-3"
						onClick={() => {
							prepend({ name: "prepend" });
						}}
					>
						prepend
					</button>

					<input
						type="submit"
						className="bg-white w-full px-3 py-2 rounded-md cursor-pointer"
					/>
				</form>
			</div>
		</div>
	);
};

export default ImproveForm;
