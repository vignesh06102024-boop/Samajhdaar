import { useState } from "react";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "./ui/alert-dialog";
import { Button } from "./ui/button";
import { motion } from "motion/react";
import { Check } from "lucide-react";

interface PledgeDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function PledgeDialog({ open, onOpenChange }: PledgeDialogProps) {
  const [pledgeTaken, setPledgeTaken] = useState(false);

  const handleTakePledge = () => {
    setPledgeTaken(true);
    setTimeout(() => {
      setPledgeTaken(false);
      onOpenChange(false);
    }, 3000);
  };

  return (
    <AlertDialog open={open} onOpenChange={onOpenChange}>
      <AlertDialogContent className="max-w-2xl">
        {!pledgeTaken ? (
          <>
            <AlertDialogHeader>
              <AlertDialogTitle className="text-2xl md:text-3xl text-center bg-gradient-to-r from-[#FF9933] to-[#138808] bg-clip-text text-transparent">
                Take the Civic Pledge
              </AlertDialogTitle>
              <AlertDialogDescription className="text-base md:text-lg text-gray-700 leading-relaxed pt-4">
                <div className="bg-gradient-to-br from-orange-50 to-green-50 p-6 rounded-lg border-l-4 border-[#FF9933] mb-4">
                  <p className="italic text-gray-800 leading-relaxed">
                    I pledge to act responsibly in public spaces,<br />
                    respect people, property, and nature,<br />
                    follow rules with pride—not fear,<br />
                    and contribute to a cleaner, safer, and kinder India.
                  </p>
                </div>
                <p className="text-sm text-center text-gray-600 mt-4">
                  By taking this pledge, you commit to being a responsible citizen
                  and inspiring others through your actions.
                </p>
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter className="flex-col sm:flex-row gap-2">
              <Button
                variant="outline"
                onClick={() => onOpenChange(false)}
                className="w-full sm:w-auto"
              >
                Maybe Later
              </Button>
              <Button
                onClick={handleTakePledge}
                className="bg-[#FF9933] hover:bg-[#FF9933]/90 text-white w-full sm:w-auto"
              >
                I Take the Pledge 🇮🇳
              </Button>
            </AlertDialogFooter>
          </>
        ) : (
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="text-center py-8"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-4"
            >
              <Check className="w-12 h-12 text-green-600" />
            </motion.div>
            <h3 className="text-2xl mb-2 text-gray-800">Thank You!</h3>
            <p className="text-lg text-gray-600">
              Thank you for taking a step toward a Samajhdaar Bharat.
            </p>
            <p className="text-sm text-gray-500 mt-4">
              Your commitment makes a difference. Share this movement with others!
            </p>
          </motion.div>
        )}
      </AlertDialogContent>
    </AlertDialog>
  );
}
