import * as React from "react";
import { useForm } from "react-hook-form";

const UseFormSetError = () => {
	const {
		register,
		handleSubmit,
		setError,
		formState: { errors },
	} = useForm({
		defaultValues: {
			firstName: "",
		},
		criteriaMode: "all",
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
						console.log("submit data", data);
					})}
				>
					<div className="mb-3">
						<input
							{...register("firstName")}
							placeholder="First Name"
							className="w-full mt-2 bg-white text-zinc-600 px-4 py-2 rounded-md focus:outline-none"
						/>
					</div>

					<button
						type="button"
						onClick={() => {
							setError("firstName", {
								// type: "custom",
								// message: "this is wrong",
								types: {
									test: "test is wrong",
									test1: "text1 is wrong",
								},
							});
						}}
						className="px-3 py-2 bg-white rounded-md mb-3"
					>
						setError
					</button>
					{/* {errors?.firstName && (
						<p className="mb-3 text-white">{errors.firstName?.message}</p>
					)} */}
					{errors?.firstName && (
						<div>
							<p className="mb-3 text-white">{errors.firstName?.types?.test}</p>
							<p className="mb-3 text-white">
								{errors.firstName?.types?.test1}
							</p>
						</div>
					)}
					<input
						type="submit"
						className="w-full px-3 py-2 bg-white rounded-md cursor-pointer"
					/>
				</form>
			</div>
		</div>
	);
};

export default UseFormSetError;
