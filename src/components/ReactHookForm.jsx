import * as React from "react";
import { useForm } from "react-hook-form";

const ReactHookForm = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

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
						<label htmlFor="firstName" className="text-[#d9d6d6]">
							First Name :
						</label>
						<input
							{...register("firstName", { required: "This is required" })}
							id="firstName"
							className="w-full mt-2 bg-white text-zinc-600 px-4 py-2 rounded-md focus:outline-none"
						/>
						{errors.firstName && (
							<p className="text-white mt-1">{errors.firstName.message}</p>
						)}
					</div>

					<div className="mb-3">
						<label htmlFor="lastName" className="text-[#d9d6d6]">
							Last Name :
						</label>
						<input
							{...register("lastName", {
								required: "This is required",
								maxLength: { value: 4, message: "You exceeded the max length" },
							})}
							id="lastName"
							className="w-full mt-2 bg-white text-zinc-600 px-4 py-2 rounded-md focus:outline-none"
						/>
						{errors.lastName && (
							<p className="text-white mt-1">{errors.lastName.message}</p>
						)}
					</div>

					<div className="mb-3">
						<label htmlFor="age" className="text-[#d9d6d6]">
							Age
						</label>
						<input
							type="number"
							{...register("age", {
								valueAsNumber: true,
								required: "This is required",
							})}
							id="age"
							className="w-full mt-2 bg-white text-zinc-600 px-4 py-2 rounded-md focus:outline-none"
						/>
						{errors.age && (
							<p className="text-white mt-1">{errors.age.message}</p>
						)}
					</div>

					<div className="mb-3">
						<label htmlFor="gender"></label>
						<select
							{...register("gender")}
							id="gender"
							className="bg-white px-4 py-2 mt-2 rounded-md focus:outline-none"
						>
							<option value="">Select...</option>
							<option value="male">male</option>
							<option value="female">female</option>
						</select>
					</div>

					<div className="mt-2 mb-3">
						<label htmlFor="developer" className="text-[#d9d6d6]">
							Are you a developer?
						</label>
						<input
							type="checkbox"
							{...register("developer")}
							value="yes"
							id="developer"
						/>
					</div>

					<input
						type="submit"
						className="px-4 py-2 bg-white w-[50%] cursor-pointer rounded-md"
					/>
				</form>
			</div>
		</div>
	);
};

export default ReactHookForm;
