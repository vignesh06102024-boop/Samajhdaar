import { useState } from "react";
import { motion } from "motion/react";
import { Upload, Check, X, Loader2 } from "lucide-react";

/* ---------- Helper: File → Base64 ---------- */
const toBase64 = (file: File): Promise<string> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = reject;
  });

export default function ShareActSection() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string>("");

  const [formData, setFormData] = useState({
    name: "",
    city: "",
    act: ""
  });

  /* ---------- Handle Image Upload ---------- */
  const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImageFile(file);
      // Create preview
      const preview = await toBase64(file);
      setImagePreview(preview);
    }
  };

  /* ---------- Remove Image ---------- */
  const removeImage = () => {
    setImageFile(null);
    setImagePreview("");
  };

  /* ---------- Submit Handler ---------- */
  const handleSubmit = async () => {
    if (!formData.name || !formData.city || !formData.act) {
      alert("Please fill in all required fields");
      return;
    }

    setIsSubmitting(true);

    let base64 = "";
    let type = "";

    if (imageFile) {
      const result = await toBase64(imageFile);
      base64 = result;
      type = imageFile.type;
    }

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Uncomment for real API call
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
    

    setIsSubmitting(false);
    setSubmitted(true);

    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", city: "", act: "" });
      setImageFile(null);
      setImagePreview("");
    }, 5000);
  };

  return (
    <section id="share" className="py-20 bg-gradient-to-br from-orange-50 via-white to-green-50">
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
            <h2 className="mb-4 text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#FF9933] to-[#138808] bg-clip-text text-transparent">
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
            className="bg-white border-2 border-green-600 rounded-2xl p-8 shadow-xl"
          >
            {!submitted ? (
              <div className="space-y-6">

                {/* Name */}
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    className="w-full border-2 border-gray-300 rounded-lg px-4 py-3 focus:border-green-600 focus:outline-none transition-all"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    placeholder="Enter your name"
                  />
                </div>

                {/* City */}
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Your City
                  </label>
                  <input
                    type="text"
                    className="w-full border-2 border-gray-300 rounded-lg px-4 py-3 focus:border-green-600 focus:outline-none transition-all"
                    value={formData.city}
                    onChange={(e) =>
                      setFormData({ ...formData, city: e.target.value })
                    }
                    placeholder="Enter your city"
                  />
                </div>

                {/* Action */}
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    What did you do today?
                  </label>
                  <textarea
                    rows={5}
                    className="w-full border-2 border-gray-300 rounded-lg px-4 py-3 focus:border-green-600 focus:outline-none transition-all resize-none"
                    value={formData.act}
                    onChange={(e) =>
                      setFormData({ ...formData, act: e.target.value })
                    }
                    placeholder="Describe your responsible act..."
                  />
                </div>

                {/* Upload */}
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Upload Image (Optional)
                  </label>

                  {!imagePreview ? (
                    <label className="block border-2 border-dashed border-gray-300 rounded-lg p-8 text-center cursor-pointer bg-gray-50 hover:border-green-600 hover:bg-green-50 transition-all">
                      <Upload className="w-12 h-12 mx-auto text-gray-400 mb-2" />
                      <p className="text-sm text-gray-600 font-medium">Click to upload an image</p>
                      <p className="text-xs text-gray-500 mt-1">PNG, JPG up to 5MB</p>

                      <input
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={handleImageChange}
                      />
                    </label>
                  ) : (
                    <div className="relative border-2 border-green-600 rounded-lg overflow-hidden">
                      <img
                        src={imagePreview}
                        alt="Preview"
                        className="w-full h-64 object-cover"
                      />
                      <button
                        type="button"
                        onClick={removeImage}
                        className="absolute top-3 right-3 bg-red-500 text-white p-2 rounded-full hover:bg-red-600 transition-all shadow-lg"
                      >
                        <X className="w-5 h-5" />
                      </button>
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                        <div className="flex items-center gap-2 text-white">
                          <Check className="w-5 h-5" />
                          <span className="font-medium text-sm">{imageFile?.name}</span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Submit */}
                <button
                  type="button"
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className="w-full bg-green-600 hover:bg-green-700 disabled:bg-gray-400 disabled:cursor-not-allowed text-white py-4 text-lg font-bold rounded-lg transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-3"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      <span>Submitting...</span>
                    </>
                  ) : (
                    <span>Share My Act</span>
                  )}
                </button>
              </div>
            ) : (
              /* ---------- Success ---------- */
              <div className="text-center py-12">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-4">
                  <Check className="w-12 h-12 text-green-600" />
                </div>
                <h3 className="text-3xl font-bold mb-2 text-gray-900">
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