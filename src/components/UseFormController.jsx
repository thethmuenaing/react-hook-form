import React from "react";
import { useForm, useFormState, useWatch } from "react-hook-form";

const Controller = ({ control, register, name, rules, render }) => {
	const value = useWatch({
		control,
		name,
	});
	const { errors } = useFormState({
		control,
		name,
	});
	const props = register(name, rules);
	console.log(errors);
	return render({
		value,
		onChange: (e) =>
			props.onChange({
				target: {
					name,
					value: e.target.value,
				},
			}),
		onBlur: props.onBlur,
		name: props.name,
	});
};
const Input = (props) => {
	const [value, setValue] = React.useState(props.value || "");

	React.useEffect(() => {
		setValue(props.value);
	}, [props.value]);
	return (
		<input
			name={props.name}
			className="w-full mt-2 mb-3 bg-white text-zinc-600 px-4 py-2 rounded-md focus:outline-none"
			onChange={(e) => {
				setValue(e.target.value);
				props.onChange && props.onChange(e);
			}}
			value={value}
		/>
	);
};

const UseFormController = () => {
	const {
		register,
		handleSubmit,
		control,
		setValue,
		formState: { errors },
	} = useForm({
		defaultValues: {
			firstName: "",
			lastName: "",
		},
	});
	console.log("errors", errors);

	React.useEffect(() => {
		setTimeout(() => {
			setValue("lastName", "test");
		}, 1000);
	}, [setValue]);

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
							{...register("firstName")}
							placeholder="First Name"
							className="w-full mt-2 bg-white text-zinc-600 px-4 py-2 rounded-md focus:outline-none"
						/>
					</div>

					<Controller
						{...{
							control,
							register,
							name: "lastName",
							rules: { required: true },
							render: (props) => <Input {...props} />,
						}}
					/>

					<input
						type="submit"
						className="w-full px-3 py-2 bg-white rounded-md cursor-pointer"
					/>
				</form>
			</div>
		</div>
	);
};

export default UseFormController;
