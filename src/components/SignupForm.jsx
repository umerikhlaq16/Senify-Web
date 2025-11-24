import { useState } from "react";
import { auth, db } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc, serverTimestamp, getDoc } from "firebase/firestore";
import { v4 as uuidv4 } from "uuid"; // For generating unique memberId

// ===== Floating Input Component =====
const FloatingInput = ({ label, type = "text", value, onChange, required }) => {
const [localValue, setLocalValue] = useState("");
const handleChange = (e) => {
const val = e.target.value;
setLocalValue(val);
if (onChange) onChange(val);
};
const inputValue = value !== undefined ? value : localValue;
return ( <div className="relative w-full mt-6"> <input
     type={type}
     value={inputValue}
     onChange={handleChange}
     placeholder=" "
     className="w-full border-b-2 border-gray-300 focus:border-purple-600 outline-none pt-5 pb-2 bg-transparent text-gray-900 placeholder-transparent"
   />
<label
className={`absolute left-0 transition-all duration-200 text-gray-500
          ${inputValue ? "-top-2 text-sm text-purple-600" : "top-5"}`}
>
{label} {required && <span className="text-red-500">*</span>} </label> </div>
);
};

// ===== Floating Select Component =====
const FloatingSelect = ({ label, options, value, onChange, required }) => {
const [localValue, setLocalValue] = useState("");
const handleChange = (e) => {
const val = e.target.value;
setLocalValue(val);
if (onChange) onChange(val);
};
const selectValue = value !== undefined ? value : localValue;
return ( <div className="relative w-full mt-6"> <select
     value={selectValue}
     onChange={handleChange}
     className="w-full border-b-2 border-gray-300 focus:border-purple-600 outline-none pt-5 pb-2 bg-transparent text-gray-900"
   > <option value="" disabled hidden></option>
{options.map((op) => ( <option key={op} value={op}>
{op} </option>
))} </select>
<label
className={`absolute left-0 text-gray-500 transition-all duration-200
          ${selectValue ? "-top-2 text-sm text-purple-600" : "top-5"}`}
>
{label} {required && <span className="text-red-500">*</span>} </label> </div>
);
};

// ===== Signup Form Component =====
const SignupForm = ({ switchToLogin }) => {
const [accountType, setAccountType] = useState("");
const [formValues, setFormValues] = useState({});
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [error, setError] = useState("");
const [loading, setLoading] = useState(false);

const handleChange = (key, value) => {
setFormValues((prev) => ({ ...prev, [key]: value }));
};

const requiredFields = {
Elderly: ["fullName", "age", "condition", "talent"],
Disabled: ["fullName", "age", "condition", "talent"],
Family: ["fullName", "relation", "phone", "email", "memberId"],
Volunteers: ["fullName", "email", "phone", "skill", "availability", "city"],
};

const handleSubmit = async (e) => {
e.preventDefault();
setError("");
setLoading(true);

try {
  // Validate required fields
  const missing = requiredFields[accountType]?.filter((f) => !formValues[f]);
  if (!email || !password) {
    setError("Email and Password are required");
    setLoading(false);
    return;
  }
  if (missing && missing.length > 0) {
    setError(`Please fill required fields: ${missing.join(", ")}`);
    setLoading(false);
    return;
  }

  // For Family, validate memberId exists
  if (accountType === "Family") {
    const memberDoc = await getDoc(doc(db, "users", formValues.memberId));
    if (!memberDoc.exists() || !["Elderly", "Disabled"].includes(memberDoc.data().accountType)) {
      setError("Invalid Elderly/Disabled Member ID");
      setLoading(false);
      return;
    }
  }

  // Create user with Firebase Auth
  const userCredential = await createUserWithEmailAndPassword(auth, email, password);
  const uid = userCredential.user.uid;

  // Generate memberId for Elderly/Disabled
  let memberId = null;
  if (accountType === "Elderly" || accountType === "Disabled") {
    memberId = uuidv4();
  }

  await setDoc(doc(db, "users", uid), {
    accountType,
    email,
    memberId,
    ...formValues,
    createdAt: serverTimestamp(),
  });

  alert("Signup successful!");
  setFormValues({});
  setAccountType("");
  setEmail("");
  setPassword("");
} catch (err) {
  console.error(err);
  setError(err.message || "Error submitting form. Please try again.");
} finally {
  setLoading(false);
}


};

return (
<> <h2 className="text-2xl font-bold text-gray-900 text-center">Create an Account</h2> <p className="text-center text-sm text-gray-500 mt-1">
Already have an account?{" "} <span className="text-purple-600 cursor-pointer" onClick={switchToLogin}>
Sign In </span> </p>


  {error && <p className="text-red-500 text-sm mt-2">{error}</p>}

  <form className="mt-6 space-y-6" onSubmit={handleSubmit}>
    <FloatingSelect
      label="Account Type"
      options={["Elderly", "Disabled", "Family", "Volunteers"]}
      value={accountType}
      onChange={setAccountType}
      required
    />

    {accountType && (
      <>
        <FloatingInput type="email" label="Email" value={email} onChange={setEmail} required />
        <FloatingInput type="password" label="Password" value={password} onChange={setPassword} required />
      </>
    )}

    {(accountType === "Elderly" || accountType === "Disabled") && (
      <>
        <FloatingInput label="Full Name" onChange={(val) => handleChange("fullName", val)} required />
        <FloatingInput label="Age" type="number" onChange={(val) => handleChange("age", val)} required />
        <FloatingSelect
          label="Condition"
          options={["Physical", "Visual", "Hearing", "Cognitive", "Other"]}
          onChange={(val) => handleChange("condition", val)}
          required
        />
        <FloatingInput
          type="text"
          label="Short Talent Description"
          onChange={(val) => handleChange("talent", val)}
          required
        />
      </>
    )}

    {accountType === "Family" && (
      <>
        <FloatingInput label="Full Name" onChange={(val) => handleChange("fullName", val)} required />
        <FloatingSelect
          label="Relation"
          options={["Son", "Daughter", "Sibling", "Guardian"]}
          onChange={(val) => handleChange("relation", val)}
          required
        />
        <FloatingInput type="text" label="Phone Number" onChange={(val) => handleChange("phone", val)} required />
        <FloatingInput type="text" label="Member ID of Elderly/Disabled" onChange={(val) => handleChange("memberId", val)} required />
      </>
    )}

    {accountType === "Volunteers" && (
      <>
        <FloatingInput label="Full Name" onChange={(val) => handleChange("fullName", val)} required />
        <FloatingInput type="text" label="Phone Number" onChange={(val) => handleChange("phone", val)} required />
        <FloatingSelect
          label="Skill"
          options={["Teaching", "Shopping Help", "Medical Guidance", "Social Visit", "Other"]}
          onChange={(val) => handleChange("skill", val)}
          required
        />
        <FloatingInput type="text" label="Availability Days" onChange={(val) => handleChange("availability", val)} required />
        <FloatingInput label="City" onChange={(val) => handleChange("city", val)} required />
      </>
    )}

    <div className="flex items-center gap-2 mt-4">
      <input
        type="checkbox"
        className="w-5 h-5 cursor-pointer"
        onChange={(e) => handleChange("agreeTerms", e.target.checked)}
        required
      />
      <span className="text-gray-700">I agree to terms and conditions</span>
    </div>

    <button
      type="submit"
      disabled={loading}
      className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold mt-4 disabled:opacity-50"
    >
      {loading ? "Submitting..." : "Sign Up"}
    </button>
  </form>
</>

);
};

export default SignupForm;
