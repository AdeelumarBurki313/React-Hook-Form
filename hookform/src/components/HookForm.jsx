import { useForm } from "react-hook-form";

function HookForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  async function onSubmit(data) {
    await new Promise((resolve) => setTimeout(resolve, 3000));
    console.log("Submitting the form", data);
  }

  return (
    <div className="h-screen w-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-lg"
      >
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-800 tracking-wide uppercase">
          🚀 React Hook Form ✨
        </h2>


        {/* First Name */}
        <div className="mb-4">
          <label className="block text-gray-600 font-medium mb-1">
            First Name:
          </label>
          <input
            {...register("firstname", {
              required: "First name is required",
              minLength: { value: 4, message: "Must be at least 4 characters" },
              maxLength: { value: 8, message: "Cannot exceed 8 characters" },
              pattern: {
                value: /^[A-Za-z]+$/i,
                message: "Only letters are allowed",
              },
            })}
            className={`w-full px-4 py-2 text-black border ${errors.firstname ? "border-red-500" : "border-gray-300"
              } rounded-lg focus:ring focus:ring-blue-200 focus:outline-none`}
          />
          {errors.firstname && (
            <p className="text-red-500 text-sm mt-1">
              {errors.firstname.message}
            </p>
          )}
        </div>

        {/* Middle Name */}
        <div className="mb-4">
          <label className="block text-gray-600 font-medium mb-1">
            Middle Name:
          </label>
          <input
            {...register("middlename", {
              required: "Middle name is required",
              minLength: { value: 4, message: "Must be at least 4 characters" },
              maxLength: { value: 8, message: "Cannot exceed 8 characters" },
              pattern: {
                value: /^[A-Za-z]+$/i,
                message: "Only letters are allowed",
              },
            })}
            className={`w-full px-4 py-2 text-black border ${errors.middlename ? "border-red-500" : "border-gray-300"
              } rounded-lg focus:ring focus:ring-blue-200 focus:outline-none`}
          />
          {errors.middlename && (
            <p className="text-red-500 text-sm mt-1">
              {errors.middlename.message}
            </p>
          )}
        </div>

        {/* Last Name */}
        <div className="mb-6">
          <label className="block text-gray-600 font-medium mb-1">
            Last Name:
          </label>
          <input
            {...register("lastName", {
              required: "Last name is required",
              minLength: { value: 4, message: "Must be at least 4 characters" },
              maxLength: { value: 8, message: "Cannot exceed 8 characters" },
              pattern: {
                value: /^[A-Za-z]+$/i,
                message: "Only letters are allowed",
              },
            })}
            className={`w-full px-4 py-2 text-black border ${errors.lastName ? "border-red-500" : "border-gray-300"
              } rounded-lg focus:ring focus:ring-blue-200 focus:outline-none`}
          />
          {errors.lastName && (
            <p className="text-red-500 text-sm mt-1">
              {errors.lastName.message}
            </p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition disabled:bg-gray-400"
        >
          {isSubmitting ? "Submitting..." : "Submit"}
        </button>
      </form>
    </div>
  );
}

export default HookForm;
