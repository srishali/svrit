import React, { useState } from "react";
import { Upload } from "lucide-react";
import { useToast } from "../hooks/use-toast";

const SubmitCV = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ firstName: "", lastName: "", phone: "", email: "" });
  const [fileName, setFileName] = useState("No file chosen.");

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleFile = (e) => {
    const f = e.target.files?.[0];
    if (!f) return setFileName("No file chosen.");
    if (f.type !== "application/pdf") {
      toast({ title: "Invalid file", description: "Please upload a PDF only." });
      return;
    }
    setFileName(f.name);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.firstName || !form.email) {
      toast({ title: "Missing details", description: "First name and email are required." });
      return;
    }
    toast({
      title: "CV submitted!",
      description: `Thanks ${form.firstName}, we've received your submission.`,
    });
    setForm({ firstName: "", lastName: "", phone: "", email: "" });
    setFileName("No file chosen.");
  };

  return (
    <section id="jobs" className="py-20 bg-gray-100">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#3d0764] tracking-tight">
            Submit your CV
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            The world is waiting for the professional people like you, submit your CV to get the latest job information and trends to improve your position.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <input
              type="text"
              name="firstName"
              value={form.firstName}
              onChange={handleChange}
              placeholder="First Name"
              className="w-full px-5 py-4 rounded-md border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#00b4f0] transition-colors"
            />
            <input
              type="text"
              name="lastName"
              value={form.lastName}
              onChange={handleChange}
              placeholder="Last Name"
              className="w-full px-5 py-4 rounded-md border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#00b4f0] transition-colors"
            />
            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="Phone"
              className="w-full px-5 py-4 rounded-md border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#00b4f0] transition-colors"
            />
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Email"
              className="w-full px-5 py-4 rounded-md border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#00b4f0] transition-colors"
            />
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-2">
            <label className="cursor-pointer bg-[#3d0764] hover:bg-[#4c0a7a] text-white px-6 py-3 rounded-md font-medium inline-flex items-center gap-2 transition-colors">
              <Upload size={16} />
              Upload your CV in PDF format only.
              <input type="file" accept="application/pdf" className="hidden" onChange={handleFile} />
            </label>
            <span className="text-gray-600 text-sm">{fileName}</span>
            <button
              type="submit"
              className="sm:ml-auto bg-[#00b4f0] hover:bg-[#0396cc] text-white px-8 py-3 rounded-md font-medium transition-colors shadow-md"
            >
              Submit your CV
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default SubmitCV;
