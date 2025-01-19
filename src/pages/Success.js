import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function Success() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 3000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="bg-gray-50 min-h-screen flex items-center justify-center">
            <div className="flex flex-col items-center justify-center text-center bg-white p-12 rounded-xl shadow-lg w-full max-w-lg">
                {loading ? (
                    <motion.div
                        className="space-y-4 text-center"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                    >
                        <div className="animate-spin rounded-full h-24 w-24 border-t-4 border-blue-500 mx-auto"></div>
                        <p className="text-xl text-gray-600">Processing your order...</p>
                    </motion.div>
                ) : (
                    <motion.div
                        className="space-y-6"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                    >
                        <motion.h2
                            className="text-4xl font-bold text-green-600"
                            initial={{ scale: 0.8 }}
                            animate={{ scale: 1 }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                        >
                            Order Successful!
                        </motion.h2>
                        <motion.p
                            className="text-lg text-gray-700 mb-6"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                        >
                            Your order has been successfully placed. Thank you for shopping with us!
                        </motion.p>
                        <motion.div
                            className="mt-6"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1, delay: 0.6 }}
                        >
                            <Link
                                to="/"
                                className="bg-yellow-500 text-red-800 px-8 py-3 rounded-full font-semibold shadow-lg hover:bg-yellow-600 transition duration-300"
                            >
                                Go to Homepage
                            </Link>
                        </motion.div>
                    </motion.div>
                )}
            </div>
        </div>
    );
}

export default Success;
