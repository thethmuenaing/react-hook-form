import React from "react";
import { useForm } from "react-hook-form";

const FormBuilder = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();
	console.log(errors);

	return (
		<form onSubmit={handleSubmit((data) => console.log("data ", data))}>
			<input
				type="text"
				placeholder="First name"
				{...register("First name", { required: true, maxLength: 80 })}
			/>
			<br />
			<input
				type="text"
				placeholder="Last name"
				{...register("Last name", { required: true, maxLength: 100 })}
			/>
			<br />
			<input
				type="text"
				placeholder="Email"
				{...register("Email", { required: true, pattern: /^\S+@\S+$/i })}
			/>
			<br />
			<input
				type="tel"
				placeholder="Mobile number"
				{...register("Mobile number", {
					required: true,
					minLength: 6,
					maxLength: 12,
				})}
			/>
			<br />
			<select {...register("Title", { required: true })}>
				<option value="Mr">Mr</option>
				<option value="Mrs">Mrs</option>
				<option value="Miss">Miss</option>
				<option value="Dr">Dr</option>
			</select>
			<br />

			<input
				{...register("Developer", { required: true })}
				type="radio"
				value="Yes"
			/>
			<br />
			<input
				{...register("Developer", { required: true })}
				type="radio"
				value="No"
			/>

			<br />
			<input type="submit" />
		</form>
	);
};
export default FormBuilder;
