import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { toStudentPayload } from "../utils/studentMapper";

const StudentForm = ({ defaultValues, onSubmit, buttonText }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues,
  });

  useEffect(() => {
    reset(defaultValues);
  }, [defaultValues, reset]);
    
  const submitForm = (data) => {
    onSubmit(toStudentPayload(data));
  };

  return (
    <form
      onSubmit={handleSubmit(submitForm)}
      className="space-y-6 rounded-lg border border-gray-200 bg-white p-6 shadow-sm"
    >
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {/* First Name */}
        <div>
          <label className="mb-2 block font-medium">First Name</label>

          <input
            type="text"
            {...register("firstName", {
              required: "First name is required",
            })}
            className="w-full rounded-lg border px-4 py-2"
          />

          {errors.firstName && (
            <p className="mt-1 text-sm text-red-500">
              {errors.firstName.message}
            </p>
          )}
        </div>

        {/* Last Name */}
        <div>
          <label className="mb-2 block font-medium">Last Name</label>

          <input
            type="text"
            {...register("lastName", {
              required: "Last name is required",
            })}
            className="w-full rounded-lg border px-4 py-2"
          />

          {errors.lastName && (
            <p className="mt-1 text-sm text-red-500">
              {errors.lastName.message}
            </p>
          )}
        </div>

        {/* Email */}
        <div className="md:col-span-2">
          <label className="mb-2 block font-medium">Email</label>

          <input
            type="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^\S+@\S+\.\S+$/,
                message: "Enter a valid email",
              },
            })}
            className="w-full rounded-lg border px-4 py-2"
          />

          {errors.email && (
            <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
          )}
        </div>

        {/* Age */}
        <div>
          <label className="mb-2 block font-medium">Age</label>

          <input
            type="number"
            {...register("age", {
              required: "Age is required",
              min: {
                value: 1,
                message: "Age must be at least 1",
              },
            })}
            className="w-full rounded-lg border px-4 py-2"
          />

          {errors.age && (
            <p className="mt-1 text-sm text-red-500">{errors.age.message}</p>
          )}
        </div>

        {/* Grade */}
        <div>
          <label className="mb-2 block font-medium">Grade</label>

          <select
            {...register("grade", {
              required: "Grade is required",
            })}
            className="w-full rounded-lg border px-4 py-2"
          >
            <option value="">Select Grade</option>
            <option value="1">Grade 1</option>
            <option value="2">Grade 2</option>
            <option value="3">Grade 3</option>
            <option value="4">Grade 4</option>
            <option value="5">Grade 5</option>
          </select>

          {errors.grade && (
            <p className="mt-1 text-sm text-red-500">{errors.grade.message}</p>
          )}
        </div>

        {/* Math Marks */}
        <div>
          <label className="mb-2 block font-medium">Math Marks</label>

          <input
            type="number"
            {...register("mathMarks", {
              required: "Math marks are required",
              min: 0,
              max: 100,
            })}
            className="w-full rounded-lg border px-4 py-2"
          />

          {errors.mathMarks && (
            <p className="mt-1 text-sm text-red-500">
              {errors.mathMarks.message}
            </p>
          )}
        </div>

        {/* Science Marks */}
        <div>
          <label className="mb-2 block font-medium">Science Marks</label>

          <input
            type="number"
            {...register("scienceMarks", {
              required: "Science marks are required",
              min: 0,
              max: 100,
            })}
            className="w-full rounded-lg border px-4 py-2"
          />

          {errors.scienceMarks && (
            <p className="mt-1 text-sm text-red-500">
              {errors.scienceMarks.message}
            </p>
          )}
        </div>

        {/* English Marks */}
        <div>
          <label className="mb-2 block font-medium">English Marks</label>

          <input
            type="number"
            {...register("englishMarks", {
              required: "English marks are required",
              min: 0,
              max: 100,
            })}
            className="w-full rounded-lg border px-4 py-2"
          />

          {errors.englishMarks && (
            <p className="mt-1 text-sm text-red-500">
              {errors.englishMarks.message}
            </p>
          )}
        </div>
      </div>

      <button
        type="submit"
        className="rounded-lg bg-blue-600 px-6 py-2 text-white hover:bg-blue-700"
      >
        {buttonText}
      </button>
    </form>
  );
};

export default StudentForm;
