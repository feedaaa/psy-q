// import { useState } from 'react';
// import { Link } from 'react-router-dom';

// const SignUp = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     interest: '',
//     password: '',
//     confirmPassword: ''
//   });
//   const [errors, setErrors] = useState({});
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   const validateForm = () => {
//     const newErrors = {};
    
//     if (!formData.name.trim()) {
//       newErrors.name = 'Name is required';
//     }
    
//     if (!formData.email.trim()) {
//       newErrors.email = 'Email is required';
//     } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
//       newErrors.email = 'Email is invalid';
//     }
    
//     if (!formData.phone.trim()) {
//       newErrors.phone = 'Phone number is required';
//     } else if (!/^\d{10}$/.test(formData.phone.replace(/\D/g, ''))) {
//       newErrors.phone = 'Phone number must be 10 digits';
//     }
    
//     if (!formData.interest.trim()) {
//       newErrors.interest = 'Please select your area of interest';
//     }

//     if (!formData.password.trim()) {
//       newErrors.password = 'Password is required';
//     } else if (formData.password.length < 6) {
//       newErrors.password = 'Password must be at least 6 characters';
//     }

//     if (formData.password !== formData.confirmPassword) {
//       newErrors.confirmPassword = 'Passwords do not match';
//     }
    
//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
    
//     if (!validateForm()) {
//       return;
//     }
    
//     setIsSubmitting(true);
    
//     // Simulate API call
//     setTimeout(() => {
//       setIsSubmitting(false);
//       alert('Account created successfully! Welcome to Psy-Q!');
//       setFormData({ name: '', email: '', phone: '', interest: '', password: '', confirmPassword: '' });
//     }, 1000);
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: value
//     }));
    
//     // Clear error when user starts typing
//     if (errors[name]) {
//       setErrors(prev => ({
//         ...prev,
//         [name]: ''
//       }));
//     }
//   };

//   return (
//     <main className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 sm:py-16 lg:py-20">
//       <div className="container max-w-2xl px-4">
//         <div className="text-center mb-8">
//           <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-3">Create Your Account</h1>
//           <p className="text-base sm:text-lg text-gray-600">Join Psy-Q and start your journey to success</p>
//         </div>
        
//         <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 sm:p-10">
//           <form onSubmit={handleSubmit} className="space-y-5">
//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
//               <div>
//                 <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
//                   Full Name
//                 </label>
//                 <input
//                   type="text"
//                   id="name"
//                   name="name"
//                   value={formData.name}
//                   onChange={handleChange}
//                   className={`w-full px-4 py-3.5 border rounded-xl focus:outline-none focus:ring-2 transition-all ${
//                     errors.name ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-pink-200 focus:border-pink-400'
//                   }`}
//                   placeholder="John Doe"
//                 />
//                 {errors.name && <p className="text-red-500 text-sm mt-2">{errors.name}</p>}
//               </div>
              
//               <div>
//                 <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
//                   Phone Number
//                 </label>
//                 <input
//                   type="tel"
//                   id="phone"
//                   name="phone"
//                   value={formData.phone}
//                   onChange={handleChange}
//                   className={`w-full px-4 py-3.5 border rounded-xl focus:outline-none focus:ring-2 transition-all ${
//                     errors.phone ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-pink-200 focus:border-pink-400'
//                   }`}
//                   placeholder="(555) 123-4567"
//                 />
//                 {errors.phone && <p className="text-red-500 text-sm mt-2">{errors.phone}</p>}
//               </div>
//             </div>
            
//             <div>
//               <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
//                 Email Address
//               </label>
//               <input
//                 type="email"
//                 id="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 className={`w-full px-4 py-3.5 border rounded-xl focus:outline-none focus:ring-2 transition-all ${
//                   errors.email ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-pink-200 focus:border-pink-400'
//                 }`}
//                 placeholder="you@example.com"
//               />
//               {errors.email && <p className="text-red-500 text-sm mt-2">{errors.email}</p>}
//             </div>

//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
//               <div>
//                 <label htmlFor="password" className="block text-sm font-semibold text-gray-700 mb-2">
//                   Password
//                 </label>
//                 <input
//                   type="password"
//                   id="password"
//                   name="password"
//                   value={formData.password}
//                   onChange={handleChange}
//                   className={`w-full px-4 py-3.5 border rounded-xl focus:outline-none focus:ring-2 transition-all ${
//                     errors.password ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-pink-200 focus:border-pink-400'
//                   }`}
//                   placeholder="••••••••"
//                 />
//                 {errors.password && <p className="text-red-500 text-sm mt-2">{errors.password}</p>}
//               </div>

//               <div>
//                 <label htmlFor="confirmPassword" className="block text-sm font-semibold text-gray-700 mb-2">
//                   Confirm Password
//                 </label>
//                 <input
//                   type="password"
//                   id="confirmPassword"
//                   name="confirmPassword"
//                   value={formData.confirmPassword}
//                   onChange={handleChange}
//                   className={`w-full px-4 py-3.5 border rounded-xl focus:outline-none focus:ring-2 transition-all ${
//                     errors.confirmPassword ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-pink-200 focus:border-pink-400'
//                   }`}
//                   placeholder="••••••••"
//                 />
//                 {errors.confirmPassword && <p className="text-red-500 text-sm mt-2">{errors.confirmPassword}</p>}
//               </div>
//             </div>
            
//             <div>
//               <label htmlFor="interest" className="block text-sm font-semibold text-gray-700 mb-2">
//                 Area of Interest
//               </label>
//               <select
//                 id="interest"
//                 name="interest"
//                 value={formData.interest}
//                 onChange={handleChange}
//                 className={`w-full px-4 py-3.5 border rounded-xl focus:outline-none focus:ring-2 transition-all bg-white ${
//                   errors.interest ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-pink-200 focus:border-pink-400'
//                 }`}
//               >
//                 <option value="">Select your interest</option>
//                 <option value="competitive-exams">Competitive Exam Preparation</option>
//                 <option value="career-guidance">Career Guidance</option>
//                 <option value="counseling">Online Counseling</option>
//                 <option value="webinars">Psychological Webinars</option>
//               </select>
//               {errors.interest && <p className="text-red-500 text-sm mt-2">{errors.interest}</p>}
//             </div>
            
//             <button
//               type="submit"
//               disabled={isSubmitting}
//               className="w-full bg-gradient-to-r from-pink-600 to-pink-500 hover:from-pink-700 hover:to-pink-600 text-white font-semibold py-3.5 rounded-xl transition-all shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed mt-6"
//             >
//               {isSubmitting ? 'Creating Account...' : 'Create Account'}
//             </button>
//           </form>
          
//           <div className="mt-8 pt-6 border-t border-gray-200 text-center">
//             <p className="text-gray-600">
//               Already have an account?{' '}
//               <Link to="/signin" className="text-pink-600 font-semibold hover:text-pink-700 transition-colors">
//                 Sign In
//               </Link>
//             </p>
//           </div>
//         </div>
//       </div>
//     </main>
//   );
// };

// export default SignUp;
