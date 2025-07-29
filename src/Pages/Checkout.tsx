import { useCart } from "../context/CartContext";

const Checkout = () => {
  const { cartItems } = useCart();

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Left: User Form */}
        <div className="md:col-span-2 bg-white p-6 rounded-lg shadow max-h-screen overflow-y-auto">
          <h2 className="text-2xl font-bold mb-6">Billing Details</h2>

          <form className="space-y-6">
            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email Address <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>

            {/* Name */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  First Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Last Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md"
                />
              </div>
            </div>

            {/* Company */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Company Name (optional)
              </label>
              <input
                type="text"
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
              />
            </div>

            {/* Address */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Street Address <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="House number and street name"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
              />
              <input
                type="text"
                placeholder="Apartment, suite, unit (optional)"
                className="w-full px-4 py-2 border border-gray-300 rounded-md mt-2"
              />
            </div>

            {/* Location Fields */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Country / Region <span className="text-red-500">*</span>
                </label>
                <select className="w-full px-4 py-2 border border-gray-300 rounded-md">
                  <option>India</option>
                  <option>USA</option>
                  <option>UK</option>
                  <option>Canada</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  State <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  PIN Code <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md"
                />
              </div>
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Phone (optional)
              </label>
              <input
                type="tel"
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
              />
            </div>

            {/* Checkbox */}
            <div className="flex items-center space-x-2">
              <input type="checkbox" id="createAccount" />
              <label htmlFor="createAccount" className="text-sm">
                Create an account?
              </label>
            </div>

            <div className="text-right">
              <button
                type="submit"
                className="bg-black text-white px-6 py-2 rounded-md hover:bg-gray-900 transition"
              >
                Continue to Shipping →
              </button>
            </div>
          </form>
        </div>

        {/* Right: Order Summary */}
        <div className="bg-white p-6 rounded-lg shadow h-fit">
          <h3 className="text-xl font-semibold mb-4">Your Order</h3>

          {cartItems.map((item) => (
            <div key={item.id} className="flex items-start gap-4 mb-4">
              <img
                src={item.image}
                alt={item.title}
                className="w-16 h-16 rounded object-cover"
              />
              <div>
                <p className="font-medium text-sm">{item.title} - {item.size}</p>
                <p className="text-red-500 text-sm">₹{item.price}</p>
              </div>
            </div>
          ))}

          {/* Coupon */}
          <div className="mb-4">
            <input
              type="text"
              placeholder="Coupon code"
              className="w-full px-4 py-2 border border-gray-300 rounded-md mb-2"
            />
            <button className="w-full bg-black text-white py-2 rounded hover:bg-gray-900">
              Apply Coupon
            </button>
          </div>

          <div className="border-t pt-4">
            <div className="flex justify-between text-sm font-medium">
              <span>Subtotal</span>
              <span>₹{subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-base font-bold mt-2">
              <span>Total</span>
              <span>₹{subtotal.toFixed(2)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
