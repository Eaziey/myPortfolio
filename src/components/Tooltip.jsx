import { motion } from "framer-motion";

const Tooltip = ({ icon, info }) => {
  return (
    <div className="relative">
      <button
        className="
          w-12 h-12 rounded-full border-none 
          bg-gradient-to-br from-[#ffe53b] to-[#ff2525]
          flex items-center justify-center cursor-pointer
          shadow-lg group
          relative
        "
      >
        {/* Icon with jello hover animation */}
        <motion.span
          className="w-6 h-6 text-white flex items-center justify-center"
          whileHover={{
            scale: [1, 0.75, 1.25, 0.85, 1.05, 0.95, 1],
            transition: { duration: 0.7 },
          }}
        >
          {icon}
        </motion.span>

        {/* Tooltip */}
        <span
          className="
            absolute -top-5 opacity-0 
            bg-gradient-to-br from-[#ffe53b] to-[#ff2525]
            text-white px-3 py-1 rounded-md 
            transition-all duration-300 pointer-events-none
            group-hover:-top-10 group-hover:opacity-100
          "
        >
          {info}

          {/* Arrow */}
          <span
            className="
              absolute bottom-[-6px] left-1/2 -translate-x-1/2 
              w-2.5 h-2.5 
              bg-[#ff2525] rotate-45
            "
          />
        </span>
      </button>
    </div>
  );
};

export default Tooltip;