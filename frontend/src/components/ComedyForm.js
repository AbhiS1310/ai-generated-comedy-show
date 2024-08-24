import React, { useState } from 'react';
import axios from 'axios';

function ComedyForm({ formData, onSubmit }) {
  const [data, setData] = useState(formData);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post('http://localhost:5000/generate-script', data);
      const generatedScript = response.data.script;

      setLoading(false);
      onSubmit({ ...data, script: generatedScript });
    } catch (error) {
      console.error("Error generating script:", error);
      setLoading(false);
      alert(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-2">
      <div>
        <label className="block text-lg font-medium">Type of Comedy:</label>
        <select
          name="comedyType"
          value={data.comedyType}
          onChange={handleChange}
          required
          className="block w-full mt-1 p-2 bg-gray-700 border border-gray-600 rounded"
        >
          <option value="" disabled>Select comedy type</option>
          <option value="standup">Standup Comedy</option>
          <option value="skit">Skit</option>
          <option value="satire">Satire</option>
          <option value="darkHumor">Dark Humor</option>
          <option value="parody">Parody</option>
        </select>
      </div>
      <div>
        <label className="block text-lg font-medium">Theme</label>
        <input
          type="text"
          name="theme"
          value={data.theme}
          onChange={handleChange}
          placeholder="e.g., Technology"
          required
          className="block w-full mt-1 p-2 bg-gray-700 border border-gray-600 rounded"
        />
      </div>
      <div>
        <label className="block text-lg font-medium">Tone</label>
        <select
          type="text"
          name="tone"
          value={data.tone}
          onChange={handleChange}
          placeholder="e.g., Clumsy Detective"
          required
          className="block w-full mt-1 p-2 bg-gray-700 border border-gray-600 rounded"
        >
          <option value="" disabled>Select Tone</option>
          <option value="Absurd">Absurd</option>
          <option value="Sarcastic">Sarcastic</option>
          <option value="Witty">Witty</option>
          <option value="Silly">Silly</option>
        </select>
      </div>
      <div>
        <label className="block text-lg font-medium">Targeted Audience</label>
        <select
          type="text"
          name="audience"
          value={data.audience}
          onChange={handleChange}
          placeholder="e.g., Clumsy Detective"
          required
          className="block w-full mt-1 p-2 bg-gray-700 border border-gray-600 rounded"
        >
          <option value="" disabled>Select</option>
          <option value="Kids (5-12)">Kids (5-12)</option>
          <option value="Teens (13-18)">Teens (13-18)</option>
          <option value="Young Adults (18-35)">Young Adults (18-35)</option>
          <option value="Adults (35+)">Adults (35+)</option>
        </select>
      </div>
     
      <div>
        <label className="block text-lg font-medium">Duration (minutes):</label>
        <input
          type="number"
          name="duration"
          value={data.duration}
          onChange={handleChange}
          min="1"
          max="60"
          required
          className="block w-full mt-1 p-2 bg-gray-700 border border-gray-600 rounded"
        />
      </div>
      <div>
        <label className="block text-lg font-medium">Custom prompt</label>
        <textarea
          type="text"
          name="cprompt"
          value={data.cprompt}
          onChange={handleChange}
          placeholder="Write your own prompt..."
          className="block w-full mt-1 p-2 bg-gray-700 border border-gray-600 rounded"
        />
      </div>
      <button
        type="submit"
        className="w-full bg-teal-500 hover:bg-teal-600 text-white py-2 rounded font-semibold"
        disabled={loading}
      >
        {loading ? 'Generating...' : 'Generate Script'}
      </button>
    </form>
  );
}

export default ComedyForm;
