const Form = () => {
  return (
    <div className="px-8 py-6 shadow-lg bg-gray-100">
      <form action="">
        <div className="">
          <div>
            <label className="block" for="email">
              Email
            </label>
            <input type="text" placeholder="Email" class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"></input>
          </div>
          <div className="mt-4">
            <label className="block">Password</label>
            <input type="password" placeholder="Password" class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"></input>
          </div>
          <div className="flex items-baseline justify-between">
            <button className="px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900">Login</button>
            <a href="#" class="text-sm text-blue-600 hover:underline">
              Forgot Password?
            </a>
          </div>
        </div>
      </form>
    </div>
    // </div>
  );
};

export default Form;

// https://reactjs.org/docs/hooks-state.html
