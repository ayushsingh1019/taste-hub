import React, { useEffect, useState } from "react";
import { PropagateLoader } from "react-spinners";
import { motion } from "framer-motion"; 

function Success() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 3000);
    }, []);

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-green-400 to-blue-500">
            {
                loading ? (
                    <motion.div 
                        className="flex flex-col items-center justify-center"
                        initial={{ opacity: 0 }} 
                        animate={{ opacity: 1 }} 
                        transition={{ duration: 1 }}>
                        <PropagateLoader color="white" size={15} />
                        <p className="mt-4 text-lg text-white">Processing your order...</p>
                    </motion.div>
                ) : (
                    <motion.div 
                        className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full text-center"
                        initial={{ opacity: 0, y: 50 }} 
                        animate={{ opacity: 1, y: 0 }} 
                        transition={{ duration: 1, ease: "easeOut" }}>
                        <h2 className="text-4xl font-semibold mb-6 text-green-600">Order Successful!</h2>
                        <p className="text-lg text-gray-700 mb-6">Your order has been successfully placed. Thank you for shopping with us.</p>
                        <motion.a 
                            href="/" 
                            className="inline-block px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition duration-300"
                            whileHover={{ scale: 1.05 }} 
                            whileTap={{ scale: 0.95 }}>
                            Go to Homepage
                        </motion.a>
                    </motion.div>
                )
            }
        </div>
    );
}

export default Success;
