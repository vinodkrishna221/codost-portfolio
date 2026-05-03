'use client';

import { motion } from 'framer-motion';

const dots = [{"left":"27%","top":"30%","isLine":true,"angle":95},{"left":"14%","top":"34%","isLine":false,"angle":52},{"left":"20%","top":"31%","isLine":true,"angle":21},{"left":"28%","top":"16%","isLine":true,"angle":3},{"left":"17%","top":"16%","isLine":true,"angle":146},{"left":"5%","top":"5%","isLine":true,"angle":27},{"left":"12%","top":"51%","isLine":true,"angle":90},{"left":"7%","top":"16%","isLine":false,"angle":147},{"left":"12%","top":"20%","isLine":true,"angle":37},{"left":"15%","top":"7%","isLine":true,"angle":169},{"left":"2%","top":"0%","isLine":true,"angle":23},{"left":"29%","top":"51%","isLine":true,"angle":131},{"left":"25%","top":"44%","isLine":false,"angle":116},{"left":"7%","top":"42%","isLine":true,"angle":77},{"left":"0%","top":"9%","isLine":true,"angle":39},{"left":"5%","top":"32%","isLine":false,"angle":108},{"left":"18%","top":"36%","isLine":true,"angle":75},{"left":"7%","top":"25%","isLine":false,"angle":50},{"left":"8%","top":"13%","isLine":true,"angle":137},{"left":"3%","top":"20%","isLine":true,"angle":143},{"left":"5%","top":"29%","isLine":true,"angle":84},{"left":"24%","top":"2%","isLine":true,"angle":107},{"left":"25%","top":"47%","isLine":false,"angle":100},{"left":"5%","top":"45%","isLine":false,"angle":175},{"left":"25%","top":"9%","isLine":true,"angle":85},{"left":"76%","top":"49%","isLine":false,"angle":134},{"left":"80%","top":"7%","isLine":false,"angle":20},{"left":"76%","top":"12%","isLine":false,"angle":18},{"left":"78%","top":"40%","isLine":true,"angle":32},{"left":"90%","top":"32%","isLine":false,"angle":165},{"left":"78%","top":"17%","isLine":true,"angle":40},{"left":"88%","top":"58%","isLine":true,"angle":165},{"left":"83%","top":"58%","isLine":false,"angle":66},{"left":"88%","top":"48%","isLine":true,"angle":141},{"left":"84%","top":"10%","isLine":true,"angle":76},{"left":"95%","top":"4%","isLine":false,"angle":32},{"left":"79%","top":"18%","isLine":true,"angle":15},{"left":"90%","top":"35%","isLine":true,"angle":23},{"left":"76%","top":"18%","isLine":true,"angle":155},{"left":"96%","top":"19%","isLine":true,"angle":42},{"left":"94%","top":"36%","isLine":true,"angle":0},{"left":"83%","top":"41%","isLine":false,"angle":177},{"left":"84%","top":"16%","isLine":false,"angle":136},{"left":"97%","top":"31%","isLine":true,"angle":136},{"left":"84%","top":"52%","isLine":false,"angle":2},{"left":"88%","top":"8%","isLine":false,"angle":114},{"left":"86%","top":"34%","isLine":true,"angle":32},{"left":"78%","top":"21%","isLine":true,"angle":111},{"left":"87%","top":"18%","isLine":false,"angle":54},{"left":"81%","top":"22%","isLine":true,"angle":136},{"left":"48%","top":"12%","isLine":true,"angle":89},{"left":"36%","top":"23%","isLine":false,"angle":63},{"left":"62%","top":"24%","isLine":false,"angle":58},{"left":"34%","top":"3%","isLine":false,"angle":160},{"left":"46%","top":"17%","isLine":true,"angle":166},{"left":"66%","top":"16%","isLine":false,"angle":4},{"left":"34%","top":"10%","isLine":false,"angle":107},{"left":"61%","top":"5%","isLine":false,"angle":141},{"left":"56%","top":"5%","isLine":false,"angle":121},{"left":"34%","top":"21%","isLine":true,"angle":94},{"left":"53%","top":"0%","isLine":true,"angle":24},{"left":"33%","top":"10%","isLine":true,"angle":25},{"left":"58%","top":"10%","isLine":false,"angle":75},{"left":"69%","top":"22%","isLine":false,"angle":106},{"left":"37%","top":"6%","isLine":false,"angle":179},{"left":"68%","top":"18%","isLine":true,"angle":167},{"left":"34%","top":"22%","isLine":false,"angle":52},{"left":"42%","top":"2%","isLine":false,"angle":123},{"left":"33%","top":"13%","isLine":false,"angle":103},{"left":"50%","top":"8%","isLine":true,"angle":80}];

export default function HeroDots() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
      <div className="absolute w-full h-[80%] top-0 left-0">
        {dots.map((dot, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 0.6, scale: 1 }}
            transition={{ 
              duration: 0.8, 
              delay: 0.2 + (Math.random() * 0.5),
              ease: "easeOut" 
            }}
            style={{
              position: 'absolute',
              left: dot.left,
              top: dot.top,
              transform: `rotate(${dot.angle}deg)`,
            }}
          >
            {dot.isLine ? (
              <div className="w-[8px] h-[2.5px] bg-[#ef4444] rounded-full" />
            ) : (
              <div className="w-[4px] h-[4px] bg-[#ef4444] rounded-full" />
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
