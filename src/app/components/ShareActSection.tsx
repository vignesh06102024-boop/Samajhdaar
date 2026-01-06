import { useState } from "react";
import { motion } from "motion/react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { Upload, Check } from "lucide-react";

/* ---------- Helper: File → Base64 ---------- */
const toBase64 = (file: File): Promise<string> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = reject;
  });

export function ShareActSection() {
  const [submitted, setSubmitted] = useState(false);
  const [imageFile, setImageFile] = useState<File | null>(null);
  


  const [formData, setFormData] = useState({
    name: "",
    city: "",
    act: ""
  });

  /* ---------- Submit Handler ---------- */
const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    let base64 = "";
    let type = "";

    if (imageFile) {
      const result = await toBase64(imageFile);
      base64 = result;
      type = imageFile.type;
    }

    await fetch("/api", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: formData.name,
        city: formData.city,
        description: formData.act,
        imageBase64: base64,
        imageType: type
      })
    });

    setSubmitted(true);

    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", city: "", act: "" });
      setImageFile(null);
    }, 5000);
  };

  return (
    <section id="share" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">

          {/* ---------- Header ---------- */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="mb-4 text-4xl md:text-5xl bg-gradient-to-r from-[#FF9933] to-[#138808] bg-clip-text text-transparent">
              Share Your Samajhdaar Act
            </h2>
            <p className="text-lg text-gray-600">
              Did you do something responsible today?<br />
              Share it with us and inspire others.
            </p>
          </motion.div>

          {/* ---------- Form Card ---------- */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gradient-to-br from-orange-50 to-green-50 p-8 rounded-lg shadow-lg"
          >
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">

                {/* Name */}
                <div>
                  <Label>Your Name</Label>
                  <Input
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    required
                  />
                </div>

                {/* City */}
                <div>
                  <Label>Your City</Label>
                  <Input
                    value={formData.city}
                    onChange={(e) =>
                      setFormData({ ...formData, city: e.target.value })
                    }
                    required
                  />
                </div>

                {/* Action */}
                <div>
                  <Label>What did you do today?</Label>
                  <Textarea
                    rows={5}
                    value={formData.act}
                    onChange={(e) =>
                      setFormData({ ...formData, act: e.target.value })
                    }
                    required
                  />
                </div>

                {/* Upload */}
                <div>
                  <Label>Upload Image (Optional)</Label>

                  <label className="block border-2 border-dashed border-gray-300 rounded-lg p-8 text-center cursor-pointer bg-white hover:border-[#FF9933]">
                    <Upload className="w-12 h-12 mx-auto text-gray-400 mb-2" />
                    <p className="text-sm text-gray-500">Click to upload</p>

                    <input
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={(e) =>
                        e.target.files && setImageFile(e.target.files[0])
                      }
                    />
                  </label>
                </div>

                {/* Submit */}
                <Button
                  type="submit"
                  className="w-full bg-[#FF9933] text-white py-6 text-lg"
                >
                  Share My Act
                </Button>
              </form>
            ) : (
              /* ---------- Success ---------- */
              <div className="text-center py-12">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-4">
                  <Check className="w-12 h-12 text-green-600" />
                </div>
                <h3 className="text-3xl mb-2">
                  👏 Thank you for being Samajhdaar!
                </h3>
                <p className="text-lg text-gray-600">
                  Your action contributes to a better Bharat.
                </p>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
