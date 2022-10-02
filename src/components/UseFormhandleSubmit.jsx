import React from "react";
import { useForm } from "react-hook-form";

const UseFormhandleSubmit = () => {
	const { register, handleSubmit } = useForm({
		defaultValues: {
			firstName: "",
		},
	});

	const onSubmit = async (data) => {
		// e.preventDefault();
		console.log("data", data);
	};
	const onError = () => {
		console.log("something is wrong");
	};
	return (
		<div>
			<h2 className="text-center text-white text-4xl font-semibold mt-10 ">
				React Hook Form
			</h2>
			<div className="mt-10">
				<form onSubmit={handleSubmit(onSubmit, onError)}>
					<div className="mb-3">
						<input
							// {...register("firstName")}
							{...register("firstName", { required: true })}
							// {...register("firstName", { disabled: true })}
							placeholder="First Name"
							className="w-full mt-2 bg-white text-zinc-600 px-4 py-2 rounded-md focus:outline-none"
						/>
					</div>

					<input
						type="submit"
						className="w-full bg-white px-3 py-2 rounded-md cursor-pointer"
					/>
				</form>
			</div>
		</div>
	);
};

export default UseFormhandleSubmit;
