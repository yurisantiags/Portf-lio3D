
export default function EmailForm() {
  return (
    <div className="flex justify-center items-center">
      <div className="max-w-md mx-auto">
        <form>
          <label className="block mb-2 text-gray-900 md:text-sm text-xs opacity-75 transition-all" htmlFor="email">
            Send me an e-mail:
          </label>
          <input
            className="w-full px-4 py-2 mb-4 leading-tight opacity-85 focus:opacity-100 text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="Coming soon"
            disabled 
            required
          />
        </form>
      </div>
    </div>
  );
}
