import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { FaImage } from "react-icons/fa";

function CreatePost() {
  const navigate = useNavigate();

  const [preview, setPreview] = useState(null);
  const [loading, setLoading] = useState(false);

  function handleImageChange(e) {
    const file = e.target.files[0];

    if (file) {
      setPreview(URL.createObjectURL(file));
    }
  }

  function handleSubmit(e) {
    e.preventDefault();

    setLoading(true);

    axios
      .post("http://localhost:3000/createPost", new FormData(e.target))
      .then(() => {
        navigate("/feed");
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center p-4">
      <div
        className="
        w-full
        max-w-md
        backdrop-blur-xl
        bg-white/80
        rounded-3xl
        shadow-2xl
        border
        border-white/40
        p-8
      "
      >
       <h1
  className="text-6xl text-center"
  style={{ fontFamily: '"Dancing Script", cursive' }}
>
  Create Post
</h1>

        <p className="text-gray-600 italic text-center mb-8">
          Share your memories with everyone.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          {/* Upload Box */}
          <label
            className="
            border-2
            border-dashed
            border-gray-300
            rounded-2xl
            p-8
            flex
            flex-col
            items-center
            justify-center
            cursor-pointer
            hover:border-blue-500
            hover:bg-blue-50
            transition
            duration-300
          "
          >
            <FaImage className="text-5xl text-blue-500 mb-3" />

            <p className="font-semibold">Click to Upload</p>

            <p className="text-sm text-gray-500">
              PNG, JPG or JPEG
            </p>

            <input
              type="file"
              name="image"
              accept="image/*"
              className="hidden"
              onChange={handleImageChange}
              required
            />
          </label>

          {/* Image Preview */}
          {preview && (
            <img
              src={preview}
              alt="Preview"
              className="w-full h-56 object-cover rounded-2xl shadow"
            />
          )}

          {/* Caption */}
          <textarea
            name="caption"
            rows={4}
            required
            placeholder="What's on your mind?"
            className="
              w-full
              rounded-xl
              border
              border-gray-300
              p-4
              outline-none
              focus:ring-2
              focus:ring-blue-500
              resize-none
            "
          />

          {/* Button */}
          <button
            type="submit"
            disabled={loading}
            className="
              w-full
              py-3
              rounded-xl
              bg-gradient-to-r
              from-blue-600
              to-purple-600
              text-white
              font-semibold
              shadow-lg
              hover:scale-105
              transition
              duration-300
              disabled:opacity-50
              disabled:cursor-not-allowed
            "
          >
            {loading ? "Uploading..." : "Create Post"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default CreatePost;